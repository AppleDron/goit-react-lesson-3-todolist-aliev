import { Component } from 'react';
import todos from '../../todo.json';
import ToDo from 'components/ToDo/ToDo';

class ToDoList extends Component {
  state = {
    todoList: todos,
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

  render() {
    return (
      <>
        <h1>My To-Do List</h1>
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
