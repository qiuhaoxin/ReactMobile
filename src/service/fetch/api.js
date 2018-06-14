require('isomorphic-fetch');
import request from './request.js';

//172.20.71.86
//const urlPath="http://192.168.206.72/LightApp/data/";
const urlPath="http://172.20.71.86/LightApp/data/";

//获取轻应用
export function getConfig(params){
	return request(urlPath+"platformServiceNewEntrance.ashx?action=getconfig&openid=11&eid=3&acctid=2",{
		method:'POST',
		body:params,
	}) 
}