import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash';

class App extends Component {
  state = { images: [] }

  formSubmit = async search => {
    const response = await unsplash.get('/search/photos', {
      params: { query: search }
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
