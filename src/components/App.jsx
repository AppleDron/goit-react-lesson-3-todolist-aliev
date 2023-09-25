import { useState } from 'react';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import ToDoList from './ToDoList/ToDoList';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Counter from './Counter/Counter';
import TestUseMemo from './TestUseMemo/TestUseMemo';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const showModal = () => setIsShowModal(true);

  const closeModal = () => setIsShowModal(false);

  const getData = data => {
    const newuser = {
      ...data,
      id: nanoid(),
    };

    console.log(newuser);
  };

  const handleSearch = text => searchText(text);

  return (
    <div className="container">
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Header showModal={showModal} />
      <Search onSubmit={handleSearch} />
      <ContentInfo searchText={searchText} />
      <ToDoList />
      <TestUseMemo />
      {/* <Counter /> */}
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin getData={getData} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
