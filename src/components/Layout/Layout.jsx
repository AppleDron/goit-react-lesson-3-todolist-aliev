import { Modal } from 'bootstrap';
import FormLogin from 'components/FormLogin/FormLogin';
import Header from 'components/Header/Header';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => setIsShowModal(true);

  const closeModal = () => setIsShowModal(false);

  const getData = data => {
    const newuser = {
      ...data,
      id: nanoid(),
    };

    console.log(newuser);
  };

  return (
    <div className="container">
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Header showModal={showModal} />
      <Outlet />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin getData={getData} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
