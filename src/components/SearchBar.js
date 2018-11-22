import React, { Component } from 'react';

class SearchBar extends Component{
    state = { search: '' }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    formSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.search)
    }

    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <input 
                    type='text'
                    name="search"
                    value={this.state.search} 
                    onChange={this.changeHandler}
                />
            </form>
        );
    }
}

export default SearchBar;