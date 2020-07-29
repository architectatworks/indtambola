import React, { Component } from 'react';

import './App.css';
import TambolaGameManager from './containers/TambolaGameManager/TambolaGameManager';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderSplashscreen: false
    };
  }
  beginGame = async () => {
    // alert('Hi' + this.state.isToggleOn)
    this.setState(prevState => ({
      renderSplashscreen: !prevState.v
    }));

  }
  render() {
    return (
        <div className='App'>
        {!this.state.renderSplashscreen && (<div ><label style={{ margin: "250px" }}>Welcome to Employee Event. Click start to begin</label></div>)}
        {!this.state.renderSplashscreen && <img src="https://snowleo208.github.io/100-Days-of-Code/9.%20Quiz/assets/coffee-cup.svg" alt="Logo" class="header--logo__large"></img>}
        {!this.state.renderSplashscreen && (<div><button className="button" style={{ marginLeft: "350px" }} onClick={this.beginGame}><span>Start</span></button></div>)}
        {this.state.renderSplashscreen && <TambolaGameManager maxNumbers={20} />}
        </div>
    );
  }
}

export default App;
