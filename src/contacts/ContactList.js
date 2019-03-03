import React, { PureComponent } from 'react';
import SearchField from '../components/SearchField';
import OrderBy from '../components/OrderBy';
import ContactListItem from './ContactListItem';
import { SearchFields } from '../store/config';
import { connect } from 'react-redux';
import { searchContactsAction, orderContactsAction } from '../store';

class ContactList extends PureComponent {  
  handleSearch = (searchTerm) => {
    this.props.searchContacts(searchTerm);
  }

  handleOrder = (field, reverse) => {
    this.props.orderContacts(field, reverse);
  }

  performSearch = (contact) => {
    const { searchTerm } = this.props;
    if (!searchTerm) return true;

    this.searchRegex = new RegExp(searchTerm, 'gi');

    for (const field of SearchFields) {
      if (this.searchRegex.test(contact[field])) {
        return true;
      }
    }

    return false;
  }

  performOrder = (a, b) => {
    const { orderByField, orderByReverse } = this.props;
    if (!orderByField) return 0;

    const order = orderByReverse ? [-1,1] : [1,-1];
    return (a[orderByField] > b[orderByField]) ? order[0] : ((b[orderByField] > a[orderByField]) ? order[1] : 0);
  }


  render() {
    const { contacts, searchTerm, orderByField, orderByReverse } = this.props;

    return (
      <div className="contact-list">
        <section className="top-section">
          <SearchField value={searchTerm} placeholder="Search contacts..." onSearch={this.handleSearch}/>
          <OrderBy field={orderByField} reverse={orderByReverse} onOrder={this.handleOrder}/>
        </section>
        {
          <ul className="contacts">
            {
              contacts.filter(this.performSearch).sort(this.performOrder).map((contact, i) => {
                return (
                  <li key={contact.identifier}>
                    <ContactListItem index={i} contact={contact} highlightRegex={this.searchRegex}/>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      searchTerm: state.contacts.searchTerm,
      orderByField: state.contacts.orderBy.field,
      orderByReverse: state.contacts.orderBy.reverse
  }
};

const mapDispatchToProps = dispatch => {
  return {
      searchContacts: (searchTerm) => {
          dispatch(searchContactsAction(searchTerm));
      },
      orderContacts: (orderByField, orderByReverse) => {
        dispatch(orderContactsAction({ field: orderByField, reverse: orderByReverse }));
      }
  }
};

const ContactListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

export default ContactListContainer;