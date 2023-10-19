import { Modal } from 'bootstrap';
import FormLogin from 'components/FormLogin/FormLogin';
import Header from 'components/Header/Header';
import { nanoid } from 'nanoid';
import React, { Suspense, useState } from 'react';
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
      <Header showModal={showModal} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>{' '}
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <FormLogin getData={getData} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
