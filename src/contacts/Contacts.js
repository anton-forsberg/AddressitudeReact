import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import { connect } from 'react-redux';
import { loadContactsAction } from '../store';
import './Contacts.scss';

class Contacts extends Component {
  componentDidMount() {
      this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <>
        <Switch>
            <Route path="/contacts" exact render={() => (
                <ContactList contacts={contacts} />
            )}></Route>
            <Route path="/contacts/:contactId" exact component={() => (
                <ContactDetails contacts={contacts} />
            )}></Route>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts: () => {
            dispatch(loadContactsAction());
        }
    }
};

const ContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);

export default ContactsContainer;