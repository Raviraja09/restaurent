import { Fragment } from "react"
const header=(props)=>
{
 return <Fragment>
    <header className={classes.header}>
        <h1>Reactmeals</h1>
        <button>Cart</button>
    </header>
    <div className={classes[main-image]}>
        <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt='A table full of delicious food'></img>
    </div>
 </Fragment>
}
export default header