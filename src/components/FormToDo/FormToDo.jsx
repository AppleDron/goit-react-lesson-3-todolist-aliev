import React, { Component } from 'react';

export default class FormToDo extends Component {
  state = {
    todo: '',
  };

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addToDo(this.state.todo);

    this.setState({ todo: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Create todo
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="exampleInput"
            onChange={this.handleChangeInput}
            value={this.state.todo}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </form>
    );
  }
}
