import { Component } from 'react';
// import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import ToDoList from './ToDoList/ToDoList';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';

class App extends Component {
  state = {
    isShowModal: false,
    searchText: '',
  };

  componentDidMount = () => {};

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

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { isShowModal, searchText } = this.state;
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Search onSubmit={this.handleSearch} />
        <ContentInfo searchText={searchText} />
        {/* <ToDoList /> */}
        {/* {isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin getData={this.getData} closeModal={this.closeModal} />
          </Modal>
        )} */}
      </div>
    );
  }
}

export default App;
