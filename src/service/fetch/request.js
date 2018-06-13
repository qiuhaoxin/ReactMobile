


export default function request(url,options){
   const defaultOptions={
   	  //credentials:'include',
   };
   const newOptions={...defaultOptions,...options};
   if(newOptions.method=='POST'||newOptions.method=='PUT'){
   	  newOptions.headers={
   	  	 Accept:'application/json',
   	  	 'Content-Type':'application/x-www-url-encoded;charset=utf-8',
   	  	 ...newOptions.headers
   	  };
   	  newOptions.body=JSON.stringify(newOptions.body);
   };
   return fetch(url,newOptions)
          .then((response)=>{
          	if(newOptions.method=='DELETE'||response.status==204){
          		return response.text();
          	}
          	return response.json();
    })
}