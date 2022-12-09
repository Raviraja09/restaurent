import CartContext from "./CartContext";
const CartProvider=props=>
{
    const addItemToCartHandler=(item)=>
    {

    };
    const removeItemfromCartHandler=(id)=>{};
    const CartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemfromCartHandler,
    }

    return <CartContext.provider value={CartContext}>
        {props.children}
    </CartContext.provider>
}
export default CartProvider