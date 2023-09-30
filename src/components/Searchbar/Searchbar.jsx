import React, { Component } from 'react';
import {
  StyledSearchbar,
  StyledForm,
  StyledButton,
  StyledButtonLabel,
  StyledInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledButton type="submit">
            <StyledButtonLabel>Search</StyledButtonLabel>
          </StyledButton>
          <StyledInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </StyledForm>
      </StyledSearchbar>
    );
  }
}

export default Searchbar;
