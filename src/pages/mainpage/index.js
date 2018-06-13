import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

import {getConfig} from '../../service/fetch/api';

import {Switch,TabPage,Image,Loading} from '@haoxin_qiu/reactwebcomponent';

const personImg=require('../../images/haoxin_qiu.jpg');
class MainPage extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
        this.initConfig();
	}
    initConfig=async ()=>{
       const response=await getConfig({
       	  action:'config',
       })
       console.log("response is "+JSON.stringify(response));
	}
    handleRenderSlavePage=()=>{
    	return (
           <div className={Styles.slavePage}>
               <Image imgSrc={personImg} imgStyle={{width:'60px',height:'60px','borderRadius':'50%'}}/>
           </div>
    	)
    }

	render(){
       return (
         <div className={Styles.wrapper}>
             <TabPage
                slavePage={this.handleRenderSlavePage}
             >
                 <Loading visible={true} desc={'加载中 ...'}/>
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