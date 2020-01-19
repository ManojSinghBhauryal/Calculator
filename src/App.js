import React, { Component } from 'react';
import './App.css';
import Result from './components/result';
import Keypad from './components/keypad';

class App extends Component{
  constructor(){
    super();
    this.state = {
      res:""
    }
  }

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            res: this.state.res + button
        })
    }
};

  calculate=()=>{
    try{
      this.setState({
        // eslint-disable-next-line
        res:(eval(this.state.res)|| "")+""
      })
    }catch(e){
      this.setState({
        res:"error"
      })
    }
  }

  reset=()=>{
    this.setState({
      res:""
    })
  }

  backspace = () => {
    this.setState({
        res: this.state.res.slice(0, -1)
    })
};
  render(){
    return (
      <div className="main"> 
        <center><h1>Simple Calculator</h1></center><br></br><br></br>
        <center><Result res = {this.state.res}/></center>
        <center><Keypad onClick = {this.onClick}/></center>
      </div>
    )
  }
}
export default App;
