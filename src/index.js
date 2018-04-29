import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundry from './components/ErrorBoundy'
import App from './App';


ReactDOM.render(<ErrorBoundry><App/></ErrorBoundry>, document.getElementById("root"));