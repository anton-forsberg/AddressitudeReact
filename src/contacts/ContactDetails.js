import React, { Component } from 'react'
import BackButton from '../components/BackButton';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactDetails extends Component {
  state = {
    contact: {}
  }
  componentDidMount() {
    const contact = this.props.contacts.find(c => c.identifier === this.props.match.params.contactId);
    if (!contact)
      return;

    this.setState({
      contact: contact
    });
  }

  render() {
    const { contact } = this.state;
    return (
      <section className="contact-details">
        <BackButton />
        {
          !!contact && 
          <div className="contact layout row column-lt-xs">
            <img style={{borderColor: contact.color}} src={contact.picture} alt="" />
            <div className="flex">
              <h2>{contact.firstname} {contact.lastname}</h2>
              <div className="layout row column-lt-xs">
                <div className="flex information">
                  <p className="email">
                    <a href={'mailto:' + contact.email}>
                      <span className="information-header"><FontAwesomeIcon className="mail-icon" icon="envelope"/> Email</span>
                      {contact.email}
                    </a>
                  </p>
                  <p className="phone">
                    <a href={'tel:' + contact.phone}>
                      <span className="information-header"><FontAwesomeIcon className="phone-icon" icon="phone"/> Phone</span>
                      {contact.phone}
                    </a>
                  </p>
                  <p className="mobile">
                    <a href={'tel:' + contact.cell}>
                      <span className="information-header"><FontAwesomeIcon className="mobile-icon" icon="mobile-alt"/> Cell</span>
                      {contact.cell}
                    </a>
                  </p>
                  <p className="location">
                    <a href={contact.mapUrl}>
                      <span className="information-header"><FontAwesomeIcon className="location-icon" icon="map-marker-alt"/> Address</span>
                      {contact.street} <br/>
                      {contact.postcode} <br/>
                      {contact.city} <br/>
                    </a>
                  </p>
                </div>
                <div className="flex">
                  <p>
                    <span className="information-header"><FontAwesomeIcon className="question-icon" icon="question-circle"/> Did you know?</span>
                    {contact.firstname}'s birthday is {contact.daysUntilBirthday} ({contact.birthday}) <br/>
                    {contact.firstname} has been an employee since {contact.registered}
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default withRouter(ContactDetails);
