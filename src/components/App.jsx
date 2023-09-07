import { Component } from 'react';
// import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import ToDoList from './ToDoList/ToDoList';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';

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

  getData = data => {
    const newuser = {
      ...data,
      id: nanoid(),
    };

    console.log(newuser);
  };

  render() {
    const { isShowModal } = this.state;
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <ToDoList />
        {isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin getData={this.getData} closeModal={this.closeModal} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
