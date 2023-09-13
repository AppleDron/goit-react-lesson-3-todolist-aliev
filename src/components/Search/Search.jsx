import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <form
          className="d-flex mt-2"
          role="search"
          onSubmit={this.handleSubmit}
        >
          <input
            type="search"
            name=""
            id=""
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
            value={value}
          />
          <button type="submit" className="btn btn-outline-success">
            Search
          </button>
        </form>
      </>
    );
  }
}
