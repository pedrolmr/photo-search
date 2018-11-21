import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends Component {

  formSubmit(search){
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: search },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    })
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
