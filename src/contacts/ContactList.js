import React, { PureComponent } from 'react';
import SearchField from '../components/SearchField';
import OrderBy from '../components/OrderBy';
import ContactListItem from './ContactListItem';
import { SearchFields } from '../store/config';

export default class ContactList extends PureComponent {
  state = {
    searchRegex: null,
    orderByField: 'name',
    orderByReverse: false
  }
  
  handleSearch = (searchTerm) => {
    const regex = searchTerm ? new RegExp(searchTerm, 'gi') : null;
    this.setState({
      searchRegex: regex
    });
  }

  handleOrder = (field, reverse) => {
    this.setState({
      orderByField: field,
      orderByReverse: reverse
    });
  }

  performSearch = (contact) => {
    const { searchRegex } = this.state;
    if (!searchRegex) return true;

    for (const field of SearchFields) {
      if (searchRegex.test(contact[field])) {
        return true;
      }
    }

    return false;
  }

  performOrder = (a, b) => {
    const { orderByField, orderByReverse } = this.state;
    if (!orderByField) return 0;

    const order = orderByReverse ? [-1,1] : [1,-1];
    return (a[orderByField] > b[orderByField]) ? order[0] : ((b[orderByField] > a[orderByField]) ? order[1] : 0);
  }


  render() {
    const { contacts } = this.props;
    const { searchRegex, orderByField, orderByReverse } = this.state;

    return (
      <div className="contact-list">
        <section className="top-section">
          <SearchField placeholder="Search contacts..." onSearch={this.handleSearch}/>
          <OrderBy field={orderByField} reverse={orderByReverse} onOrder={this.handleOrder}/>
        </section>
        {
          <ul className="contacts">
            {
              contacts.filter(this.performSearch).sort(this.performOrder).map((contact, i) => {
                return (
                  <li key={contact.identifier}>
                    <ContactListItem index={i} contact={contact} highlightRegex={searchRegex}/>
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
