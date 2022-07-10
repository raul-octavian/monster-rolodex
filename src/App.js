import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Raul',
    };
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello {this.state.name}
          </p>

          {/* setState primeste doi parametri, ambii functii, prima seteaza state si primeste optional ca si parametrii state si props, iar a  doua obtionala este un callback care ruleaza cand state este updatat. are access la cea mai noua versiune de state care se updateaza async.  */}
          <button onClick={() => {
            this.setState(() => {
              return {
                name: 'Raul-Octavian'
              };
            },
              () => {
                console.log(this.state.name)
              });
          }
          }>Complete name</button>
        </header>
      </div >
    );

  }

}

export default App;
