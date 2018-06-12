import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

import {Switch,TabPage} from '@haoxin_qiu/reactwebcomponent';

class MainPage extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
    handleRenderSlavePage=()=>{
    	return (
           <div>
               slavePage
           </div>
    	)
    }
	render(){
       return (
         <div className={Styles.wrapper}>
             <TabPage
                slavePage={this.handleRenderSlavePage}
             >

             </TabPage>
         </div>
       )
	}
}
MainPage.defaultProps={

}
MainPage.propTypes={

}
export default MainPage;