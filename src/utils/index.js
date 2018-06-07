import React,{Component} from 'react';

export function asyncComponent(importComponent){
    class MyComponent extends Component{
    	constructor(props){

    	}
    	state={
    		component:null,
    	}
    	async componentDidMount(){
           const component=await importComponent();
           this.setState({
           	  component
           })
    	}
    	render(){
    		const MyComponent=this.state.component;
    		return (
               {
               	  MyComponent ? <MyComponent /> :null
               }
    		)
    	}
    }
    return MyComponent;
}

