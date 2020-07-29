import React,{Component} from 'react';

import './TambolaBoardCoin.css';

    class tambolaBoardCoin extends Component {
        constructor(props) {
            super(props);
            this.state = { isToggleOn: false };
        }
        beginGameHandler1 = async () => {
            // alert('Hi' + this.state.isToggleOn)
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));

        }
        render() {
            let button;
            const allowedtoedit = this.props.allowedtoedit
            if (allowedtoedit)
                button = <button className={this.state.isToggleOn ? 'TambolaBoardCoinInter' : 'TambolaBoardCoin'} onClick={this.beginGameHandler1}>{this.props.value}</button>;
            else
                button = <button className='TambolaBoardCoinSel' disabled>{this.props.value}</button>;

           return (
        <div >
                   {button}
                    {/* <button className={this.state.isToggleOn ? 'TambolaBoardCoinInter' : 'TambolaBoardCoin'} onClick={this.beginGameHandler1}>{this.props.value}</button> */}

    </div>
    );
        }
    }

export default tambolaBoardCoin;
