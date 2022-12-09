import {fragment} from 'react'
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
const Meals=()=>
{
    return 
    <fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals></AvailableMeals>
    </fragment>
}