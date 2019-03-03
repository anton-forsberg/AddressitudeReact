import React, { PureComponent } from 'react';
import SearchField from '../components/SearchField';
import OrderBy from '../components/OrderBy';
import ContactListItem from './ContactListItem';
import { SearchFields } from '../config';

class ContactList extends PureComponent {  
  handleSearch = (searchTerm) => {
    this.props.handleSearch(searchTerm);
  }

  handleOrder = (field, reverse) => {
    this.props.handleOrderBy(field, reverse);
  }

  performSearch = (contact) => {
    const { searchTerm } = this.props;
    if (!searchTerm) return true;

    const regex = new RegExp(searchTerm, 'gi');

    for (const field of SearchFields) {
      if (regex.test(contact[field])) {
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
          <OrderBy orderByField={orderByField} orderByReverse={orderByReverse} onOrder={this.handleOrder}/>
        </section>
        {
          <ul className="contacts">
            {
              contacts.sort(this.performOrder).map((contact, i) => {
                return (
                  <li key={contact.identifier} style={{ display: this.performSearch(contact) ? 'block': 'none' }}>
                    <ContactListItem index={i} contact={contact} highlight={searchTerm}/>
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

export default ContactList;