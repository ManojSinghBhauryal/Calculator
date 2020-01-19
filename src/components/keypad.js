import React, {Component} from 'react';
class Keypad extends Component{
    render(){
        return(
            <div className="button">
            <table>
            <tr>
                <td><button className="button1" name="CE"onClick={e => this.props.onClick(e.target.name)}>CE</button></td>
                <td><button className="button1" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button></td>
                <td><button className="button1" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button></td>
                <td><button className="button1" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button></td>
            </tr>
            <tr>
                <td><button className="button1" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button></td>
                <td><button className="button1" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button></td>
                <td><button className="button1" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button></td>
                <td><button className="button1" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button></td>
            </tr>
            <tr>
                <td><button className="button1" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button></td>
                <td><button className="button1" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button></td>
                <td><button className="button1" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button></td>
                <td><button className="button1" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button></td>
            </tr>
            <tr>
                <td><button className="button1" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button></td>
                <td><button className="button1" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button></td>
                <td><button className="button1" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button></td>
                <td><button className="button1" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button></td>
            </tr>
            <tr>
                <td><button className="button1" name="." onClick={e => this.props.onClick(e.target.name)}>.</button></td>
                <td><button className="button1" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button></td>
                <td><button className="button1" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button></td>
                <td><button className="button1" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button></td>
                
                </tr></table>
                </div>
        );
    }
}
export default Keypad;