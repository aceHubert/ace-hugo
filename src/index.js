import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import './assets/styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
  <App/>
</Router>, document.getElementById('root'));
registerServiceWorker();
