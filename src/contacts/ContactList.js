import React, { Component } from 'react';
import SearchField from './SearchField';
import OrderBy from '../components/OrderBy';
import ContactListItem from './ContactListItem';
import { SearchFields } from '../store/config';

export default class ContactList extends Component {
  state = {
    searchRegex: null,
    orderByField: 'name',
    orderByReverse: false
  }

  
  onSearch = (searchTerm) => {
    const regex = searchTerm ? new RegExp(searchTerm, 'gi') : null;
    this.setState({
      searchRegex: regex
    });
  }

  onOrder = (field, reverse) => {
    this.setState({
      orderByField: field,
      orderByReverse: reverse
    });
  }

  doSearch = (contact) => {
    const { searchRegex } = this.state;
    if (!searchRegex) return true;

    for (const field of SearchFields) {
      if (searchRegex.test(contact[field])) {
        return true;
      }
    }

    return false;
  }

  doOrder = (a, b) => {
    const { orderByField, orderByReverse } = this.state;

    if (!orderByField) return 0;

    if (!orderByReverse)
      return (a[orderByField] > b[orderByField]) ? 1 : ((b[orderByField] > a[orderByField]) ? -1 : 0);
    else
      return (a[orderByField] > b[orderByField]) ? -1 : ((b[orderByField] > a[orderByField]) ? 1 : 0);
  }


  render() {
    const { contacts } = this.props;
    const { searchRegex, orderByField, orderByReverse } = this.state;

    return (
      <div className="contact-list">
        <section className="top-section">
          <SearchField placeholder="Search contacts..." onSearch={this.onSearch}/>
          <OrderBy field={orderByField} reverse={orderByReverse} onOrder={this.onOrder}/>
        </section>
        {
          <ul>
            {
              contacts.filter(this.doSearch).sort(this.doOrder).map(contact => {
                return (
                  <li key={contact.identifier}>
                    <ContactListItem contact={contact} highlightRegex={searchRegex}/>
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
