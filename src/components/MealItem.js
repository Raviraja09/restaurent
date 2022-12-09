
import MealItem from './MealItem.css';
const MealItem=props=>
{
    const price='$${props.pricetobefixed(2)}'
    return <li className={classes.meal}>
        <div><h3>{props.name}</h3>
        <div className={props.description}></div>
        <div className={props.price}></div>
        </div>
    </li>
}
export default MealItem;