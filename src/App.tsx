import React, { Component } from 'react';
import { Editor } from 'src/components/editor';
import logo from './logo.svg';
import './App.scss';

class App extends Component<{}, {}> {
  public render() {
    return (
      <div className='App'>
        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header> */}
        <main className='main'>
          <Editor />
        </main>
      </div>
    );
  }
}

export default App;
