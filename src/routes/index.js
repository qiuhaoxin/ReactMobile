import React,{Component} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';

const MainPage from '../pages/mainpage';


class Router extends Component{
	render(){
		return (
           <HashRouter>
               <Route exact path="/mainpage" component={MainPage} />

           </HashRouter>
		)
	}
}