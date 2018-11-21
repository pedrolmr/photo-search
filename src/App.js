import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {

  formSubmit(search){
    console.log(search);
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.formSubmit}/>
      </div>
    );
  }
}

export default App;
