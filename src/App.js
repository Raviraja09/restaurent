import { Fragment,useState} from 'react';
import Header from './header.js'
import Header from './header.css'
import cart from './cart'
import Cart from './components/Cart.js';
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
    <Fragment>
      {cartsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals />
      </main>

      
      </Fragment>
  );
}

export default App;
