import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import {connect} from 'react-redux';
import {getConfig} from '../../service/fetch/api';

import {changeLoading,fetchAppData} from '../../action/mainpage';

import {Switch,TabPage,Image,Loading} from '@haoxin_qiu/reactwebcomponent';

const personImg=require('../../images/haoxin_qiu.jpg');
class MainPage extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
      const {changeLoading,showLoading,getAppDatas}=this.props;
      //changeLoading(true);
      //this.initConfig();
      //console.log("getAppDatas is "+getAppDatas);
     getAppDatas(true);
	}
  initConfig=async ()=>{
       const {changeLoading}=this.props;
       const response=await getConfig({
       	  action:'config',
       })
       changeLoading(false)();
	}
  handleRenderSlavePage=()=>{
    	return (
           <div className={Styles.slavePage}>
               <Image imgSrc={personImg} imgStyle={{width:'60px',height:'60px','borderRadius':'50%'}}/>
           </div>
    	)
    }

	render(){
       const {showLoading,LightApps}=this.props;
       console.log("LightApps is "+JSON.stringify(LightApps));
       console.log("showLoading is "+showLoading);
       return (
         <div className={Styles.wrapper}>
             <TabPage
                slavePage={this.handleRenderSlavePage}
             >
                 <div>

                 </div>
                 <Loading visible={showLoading} desc={'加载中 ...'}/>
             </TabPage>
         </div>
       )
	}
}
MainPage.defaultProps={

}
MainPage.propTypes={

}
const mapStateToProps=state=>({
   showLoading:state.mainpage.showLoading,
   DBList:state.mainpage.DBList,
   LightApps:state.mainpage.LightApps,
})
//  changeLoading:flag=>dispatch(changeLoading(flag))
const mapDispatchToProps=dispatch=>({
    changeLoading:flag=>dispatch(changeLoading(flag)),
    getAppDatas:(showLoading)=>fetchAppData(showLoading)(dispatch),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);