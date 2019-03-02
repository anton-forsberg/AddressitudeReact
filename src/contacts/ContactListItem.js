import React, { Component } from 'react'
import Highlight from '../components/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';

class ContactListItem extends Component {
  stopPropagation = e => {
    e.stopPropagation();
  }

  goToContactDetails = () => {
    this.props.history.push('/contacts/' + this.props.contact.identifier);
  }

  render() {
    const { contact, highlightRegex } = this.props;

    return (
      <div className="contact-list-item" onClick={this.goToContactDetails}>
        <img src={contact.picture} style={{borderColor: contact.color}} alt=""></img>
        <div className="text">
          <h2><Highlight text={contact.name} regex={highlightRegex}/></h2>
          <div className="layout row column-lt-xs">
            <div className="flex">
              <p className="email">
                <a href={'mailto:' + contact.email} onClick={this.stopPropagation}>
                  <FontAwesomeIcon className="mail-icon" icon="envelope"/>
                  <Highlight text={contact.email} regex={highlightRegex} />
                </a>
              </p>
              <p className="city">
                <a href={contact.mapUrl} onClick={this.stopPropagation}>
                  <FontAwesomeIcon className="location-icon" icon="map-marker-alt"/>
                  <Highlight text={contact.city} regex={highlightRegex} />
                </a>
              </p>
            </div>
            <div className="flex">
              <p className="phone">
                <a href={'tel:' + contact.phone} onClick={this.stopPropagation}>
                  <FontAwesomeIcon className="phone-icon" icon="phone"/>
                  <Highlight text={contact.phone} regex={highlightRegex} />
                </a>
              </p>
              <p className="mobile">
                <a href={'tel:' + contact.cell} onClick={this.stopPropagation}>
                  <FontAwesomeIcon className="mobile-icon" icon="mobile-alt"/>
                  <Highlight text={contact.cell} regex={highlightRegex} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ContactListItem);