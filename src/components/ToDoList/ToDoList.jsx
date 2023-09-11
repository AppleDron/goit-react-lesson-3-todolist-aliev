import { Component } from 'react';
import todos from '../../todo.json';
import ToDo from 'components/ToDo/ToDo';
import FormToDo from 'components/FormToDo/FormToDo';
import { nanoid } from 'nanoid';

class ToDoList extends Component {
  state = {
    todoList: todos,
    isDelete: false,
    isCreate: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.todoList.length > this.state.todoList.length) {
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
    if (prevState.todoList.length < this.state.todoList.length) {
      this.setState({ isCreate: true });
      setTimeout(() => {
        this.setState({ isCreate: false });
      }, 1500);
    }
  };

  todoCheckCompleted = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));
  };

  handleAddToDo = value => {
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        { id: nanoid(), title: value, completed: false },
      ],
    }));
  };

  render() {
    return (
      <>
        <h1>My To-Do List</h1>
        <FormToDo addToDo={this.handleAddToDo} />
        {this.state.isDelete && (
          <div className="alert alert-danger" role="alert">
            ToDo deleted successfully!
          </div>
        )}
        {this.state.isCreate && (
          <div className="alert alert-success" role="alert">
            ToDo created successfully!
          </div>
        )}
        <ul className="list-group list-group-flush">
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              todoCheckCompleted={this.todoCheckCompleted}
              handleDelete={this.handleDelete}
            ></ToDo>
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
