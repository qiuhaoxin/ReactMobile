import React,{Component} from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';

import MainPage from '../pages/mainpage';


class Router extends Component{
	render(){
		return (
           <HashRouter>
              <Switch>
	               <Route exact path="/mainpage" component={MainPage} />

	               <Redirect to="/mainpage" />
              </Switch>

           </HashRouter>
		)
	}
}
export default Router;