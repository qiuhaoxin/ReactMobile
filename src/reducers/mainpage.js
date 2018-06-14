import {CHANGELOADING,MAIN_PAGE} from '../action/actionType';
console.log("showLoading is "+CHANGELOADING);

let initState={
	showLoading:false,
    DBList:[

    ],
    content:{},
    LightApps:[],
}

const mainpage=(state=initState,action)=>{
	//console.log("action is "+JSON.stringify(action));
    switch(action.type){
    	case CHANGELOADING:
           return {
                ...state,
                showLoading:action.showLoading,
           }
    	break;
        case MAIN_PAGE.REQUESTDATA:
           //console.log("data is "+JSON.stringify(action.data));
           return {
           	  ...state,
           	  showLoading:false,
           	  ...action.data,
           }
        break;
    	default:
           return state;
    	break;
    }
}

export default mainpage;