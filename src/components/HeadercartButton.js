import react, { Fragment } from "react";
import CartIcon from "./CartIcon";
import Headercartbutton  from './HeadercartButton';
const HeadercartButton=(props)=>
{
  return
   <button className={classes.button}>
    <span className={classes.icon}>
        <CartIcon> </CartIcon>
    </span>
    <span>your cart</span>
    <span className={classes.badge}>3</span>
   </button>
   
 
    
  
}
export default HeadercartButton