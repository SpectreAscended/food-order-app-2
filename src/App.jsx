import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(open => (open = !open));
  };

  return (
    <>
      {modalOpen && <Cart onOpenCart={modalHandler} />}
      <Header onOpenCart={modalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
