import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function componentDidUpdate(prevProps) {
    // NOTE: in order to have access to this information, you will need
    // to wrap this component in the `withRouter` HOC

    const { location: { pathname } } = this.props;
    const previousLocation = prevProps.location.pathname;

    if (pathname !== previousLocation) {
      window.Appcues.page();
    }
  }

window.Appcues.identify("John Doe", { // Unique identifier for current user
  name: "John Doe", // current user's name
  email: "john.doe@example.com", // Current user's email
  createdAt: 1234567890, // Unix timestamp of user signup date
  companyName: "Acme Corp", // Current user’s company
  planType: "Trial", // Current user’s plan type
  planTier: "Standard", // Current user’s plan tier
  role: "Admin" // Current user’s role or permissions

  // additional recommended user properties:

  // team: "Marketing" // or any other way you segment your users
  // location: "02141" // a zipcode, state, or country enables location-based targeting
  // version: "2.0" // users on different versions may need to see different content
  // featureFlag: "beta” // to communicate with users who have different features
  // language: "spanish" // for multi-language applications
  // renewalDate: "06-16-2019" // to remind users to renew
});

// window.Appcues.track("Event Name");
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
