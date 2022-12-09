import { Fragment,useState} from 'react';
import Header from './header'
import Cart from './components/Cart.js';
import CartProvider from './components/CartProvider.js';
function App() {
  const[cartIsShown,setCartIsShown]=usestate(false);
  const showCartHandler=()=>
  {
    setCartIsShown(true);
  };
  const hideCartHandler=()=>
  {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals />
      </main>

      
      </CartProvider>
  );
}

export default App;
