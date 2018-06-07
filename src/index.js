import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './routes'

function render(component){
   return ReactDOM.render(
       <div>
          <Router />
       </div>,
       document.getElementById('root')
   	)
}
render(Router);



