import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartHandler = () => {
    setCartIsShown(open => (open = !open));
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onToggleCart={cartHandler} />}
      <Header onToggleCart={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
