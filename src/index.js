import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import Main from './components/Main';
import rootReducer from './redux/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {HashRouter} from 'react-router-dom';

//const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(<HashRouter><Provider store={store}><Main/></Provider></HashRouter>, document.getElementById("root"));
