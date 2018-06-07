import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';


class MainPage extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}

	render(){
       return (
         <div className={Styles.wrapper}>
             MainPage
         </div>
       )
	}
}
MainPage.defaultProps={

}
MainPage.propTypes={

}
export default MainPage;