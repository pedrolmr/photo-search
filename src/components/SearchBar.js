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
            <div className='form'>
            
                <form onSubmit={this.formSubmit}>
                <label>Search images</label>
                    <input
                        type='text'
                        name="search"
                        value={this.state.search}
                        placeholder='search...'
                        onChange={this.changeHandler}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;