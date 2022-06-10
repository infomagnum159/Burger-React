import React, {useState} from "react";
import Ingredient from "./Components/Ingredients/Ingredient";
import Burger from "./Components/Burger/Burger";
import './App.css';
import baconImage from './Components/assets/bacon.png';
import cheeseImage from './Components/assets/cheese.png';
import saladImage from './Components/assets/salad.png';
import meatImage from './Components/assets/meat.png';

const INGREDIENTS = [
  {name: 'Meat', price: 5, image: baconImage},
  {name: 'Cheese', price: 20, image: cheeseImage},
  {name: 'Salad', price: 50, image: saladImage},
  {name: 'Bacon', price: 30, image: meatImage},
];
const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, },
        {name: 'Cheese', count: 0, },
        {name: 'Salad', count: 0, },
        {name: 'Bacon', count: 0,}
    ]);
    const increaseCount = name => {
    const ingredCopy = ingredients.map(ingred => {
        if (ingred.name === name) {
            return {
                ...ingred,
                count: ingred.count + 1,
            }
        }
        return ingred;
    });
    setIngredients(ingredCopy)
}
const decreaseCount = name => {
    const ingredCopy = ingredients.map(ingred => {
        if(ingred.name === name && ingred.count > 0) {
            return{
                ...ingred,
                count: ingred.count -1,
            }
        }
        return ingred;
    })
    setIngredients(ingredCopy)
}
    const ingredComponents = INGREDIENTS.map(ingred => (
        <Ingredient
            key={ingred.name}
            name={ingred.name}
            count={ingredients.find(item => item.name === ingred.name).count}
            price={ingred.price}
            onIncreaseClick={() => increaseCount(ingred.name)}
            onDecrease={() => decreaseCount(ingred.name)}
            image={ingred.image}
        >
        </Ingredient>
    ))
    const burgerDraw = ingredients.map(ingred =>
        <Burger
            key={ingred.name}
            ingredients={ingred}
        />
    );
    const getTotal = () => {
        let totalPrice = 20;
        INGREDIENTS.forEach(ingredient =>
            {
                const price = ingredient.price;
                let itemPrice = 0;
                const count = ingredients.find(ing => ing.name === ingredient.name).count;
                if(count){
                    itemPrice = price * count;
                }
                totalPrice += itemPrice;
            }
        );
        return totalPrice;
    }
return (
        <div className="Component">
            <div className="Ingred" style={{width: '250px'}}>
                <h1 style={{textAlign: "center", color: "green"}}>&#127828; Ingredients</h1>
                {ingredComponents}
            </div>
            <div className="Burger">
                <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
                {burgerDraw}
                <div className="BreadBottom"></div>
            </div>
            <p className="Total">Total price: {getTotal()}</p>
        </div>
)
};
export default App;
