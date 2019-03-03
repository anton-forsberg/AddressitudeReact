import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import { loadContactsApi } from '../store/contact.api';
import './Contacts.scss';
import Loader from '../components/Loader';

class Contacts extends Component {
  state = {
      contacts: [],
      searchTerm: '',
      orderBy: {
          field: 'name',
          reverse: false
      }
  }

  handleSearch = term => {
      this.setState({ searchTerm: term });
  }

  handleOrderBy = (field, reverse) => {
      this.setState({ orderBy: { field: field, reverse: reverse } });
  }

  componentDidMount() {
      loadContactsApi().then(contacts => {
          this.setState({ contacts: contacts });
      });
  }

  render() {
    const { searchTerm, orderBy, contacts } = this.state;

    return (
      <>
        <Loader loading={!contacts.length}/>
        <Switch>
            <Route path="/contacts" exact render={() => (
                <ContactList 
                    contacts={contacts} 
                    orderByField={orderBy.field} 
                    orderByReverse={orderBy.reverse} 
                    searchTerm={searchTerm} 
                    handleSearch={this.handleSearch} 
                    handleOrderBy={this.handleOrderBy}/>
            )}></Route>
            <Route path="/contacts/:contactId" exact component={() => (
                <ContactDetails contacts={contacts} />
            )}></Route>
        </Switch>
      </>
    )
  }
}

export default Contacts;