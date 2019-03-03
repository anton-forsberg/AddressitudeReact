import React, { PureComponent } from 'react'
import Highlight from '../components/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';
import posed from 'react-pose';

const Container = posed.div({
  expanded: { 
    width: 'auto',
    delayChildren: ({ i }) => ( 100 + (i * 100)),
    transition: ({ i }) => ({ delay: i * 100 })
  },
  minimized: { width: '148px' },
  props: { i : 0 }
});

const Text = posed.div({
  expanded: { 
    opacity: 1,
    maxHeight: 'none'
  },
  minimized: {
    opacity: 0
   }
})

class ContactListItem extends PureComponent {
  state = { expanded: false }

  componentDidMount() {
    this.setState({ expanded: true });
  }

  stopPropagation = e => {
    e.stopPropagation();
  }

  goToContactDetails = () => {
    this.props.history.push('/contacts/' + this.props.contact.identifier);
  }

  render() {
    const { expanded } = this.state;
    const { contact, highlightRegex, index } = this.props;

    return (
      <Container className="contact-list-item" onClick={this.goToContactDetails} i={index + 1} pose={expanded ? 'expanded' : 'minimized'}>
        <img src={contact.picture} style={{borderColor: contact.color, backgroundColor: contact.color}} alt=""></img>
        <Text className="text">
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
        </Text>
      </Container>
    )
  }
}

export default withRouter(ContactListItem);