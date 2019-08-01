import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import {appstate} from './Redux/mappings/componentMappings' 
import { ReviewAction } from './Redux/actions/reviewaction';

const store=createStore(appstate,applyMiddleware(thunk));

store.dispatch(ReviewAction());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
