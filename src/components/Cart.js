import classes from './Cart.css'
import Modal from './Modal'
const Cart=props=>
{
    const cartItems=
    <ul className={classes['cart-items']}>{[
        {id:c1,name:'sushi',amount:2,price:12.99},].map((item)=><li>{item.name}</li>)}</ul>
return (
    <Modal onClose={props.props.onClose}>
        {cartItems}
        <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>order</button>
</div>
</Modal>
);
}
export default Cart