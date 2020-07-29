import React, { Component } from 'react';

import './TambolaBoardBox.css';
import TambolaBoardCoin from '../TambolaBoardCoin/TambolaBoardCoin';
import TambolaBoardEmptyCoin from '../TambolaBoardEmptyCoin/TambolaBoardEmptyCoin'

class tambolaBoardBox extends Component{
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
    }
    beginGameHandler1 = async () => {
        // alert('Hi' + this.state.isToggleOn)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

    }
// const tambolaBoardBox = (props) => (
render() {
    return (
        <div className="TambolaBoardBoxDiv">
            {/* <TambolaBoardCoin>{this.props.value}</TambolaBoardCoin> */}
            
            {this.props.value === -1
                ? <TambolaBoardEmptyCoin></TambolaBoardEmptyCoin>
                : <TambolaBoardCoin value={this.props.value} allowedtoedit={this.props.active}></TambolaBoardCoin>}
    </div>
    );
}
}

export default tambolaBoardBox;
