import { Component } from 'react';
// import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import ToDoList from './ToDoList/ToDoList';

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <ToDoList />
        {/* <Counter /> */}
        {isShowModal && <Modal closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;
