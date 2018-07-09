import React from 'react';
import Particles from 'react-particles-js';
import { particleParams } from '../particles';

class App extends React.Component {
  render() {
    return (
      <div id="particles">
        <Particles params={particleParams} />
        <div className="landing">
          <h1>Let's get started! 😄</h1>
        </div>
      </div>
    )
  }
}

export default App;
