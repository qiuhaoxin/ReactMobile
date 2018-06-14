import {getConfig} from '../service/fetch/api';
import {MAIN_PAGE} from './actionType.js';
export const changeLoading=flag=>{
   console.log("flag value is "+flag);	
   return ({
		type:'changeLoading',
		showLoading:flag,
   })
}
const getAppsData=async function(cb){
   const response=await getConfig();
   if(cb)cb();
}

export const fetchAppData=(showLoading)=>{
	return async dispatch=>{
		dispatch(changeLoading(showLoading));
        try{
            let response=await getConfig();
            if(response){
            	response=response.Data[0];
            }
            //console.log("response is "+JSON.stringify(response));
            dispatch({type:MAIN_PAGE.REQUESTDATA,data:response});
        }catch(e){

        }
	}
}