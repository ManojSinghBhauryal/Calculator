import React, {Component} from 'react';
 class Result extends Component{
    render(){
        let {res} = this.props;
        return(
            <div className = "result">
            <p>{res}</p>
            </div>
        )
    }
 }
export default Result;