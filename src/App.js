import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends Component {
  state = { images: [] }

  formSubmit = async (search) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: search },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    })
    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.formSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
