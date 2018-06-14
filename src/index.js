import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store=createStore(reducer,applyMiddleware(thunk));

function render(component){
   return ReactDOM.render(
        <Provider store={store}>
          <Router />
        </Provider>,
       document.getElementById('root')
   	)
}
render(Router);



