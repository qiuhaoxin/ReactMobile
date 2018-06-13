import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import reducer from './reducers';
import {connect} from 'react-redux';
import {createStore} from 'redux';

const store=createStore(reducer);

function render(component){
   return ReactDOM.render(
       <div>
          <Router />
       </div>,
       document.getElementById('root')
   	)
}
render(Router);



