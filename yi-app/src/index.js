import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppStore from './mbox';
import registerServiceWorker from './registerServiceWorker';
const store = new AppStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
