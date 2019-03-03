import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faPhone, faEnvelope, faAngleRight, faAngleLeft,
  faTag, faSortAlphaDown, faSortAlphaUp, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import Loader from './components/Loader';

library.add(faMobileAlt, faPhone, faEnvelope, faAngleRight, faAngleLeft,
  faTag, faSortAlphaDown, faSortAlphaUp, faMapMarkerAlt, faQuestionCircle);

const Contacts = withRouter(
  lazy(() => import('./contacts/Contacts'))
);

class App extends Component {
  render() {
    return (
      <section className="content">
        <Suspense fallback={<div></div>}>
          <Switch>
            <Redirect from="/" exact to="/contacts" />
            <Route path='/contacts' component={Contacts}></Route>
          </Switch>
        </Suspense>
      </section>
    );
  }
}

export default App;
