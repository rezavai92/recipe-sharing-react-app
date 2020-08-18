import React from 'react'
import './info.css'

export default (props)=>{
let info =props.info;
console.log(info);
const dishType= info.dishTypes +"";
const cuisines = info.cuisines +"";
//let  ingr = info.extendedIngredients.map((i)=>{return i});

const ingredients = props.ingredients.map((i)=>{return i});
//console.log(ingr.toString())
return (<div className="flex"  >
    <div className="image-title">
        
        <img src={info.image}/>
        <h2> {info.title} </h2>
<p> Dish type :{dishType}</p>
<p> Cuisines : {cuisines}</p>

        <p> Vegan : {info.vegan?"yes":"no"} </p>
        <p> Gluten free : {info.glutenFree? "yes":"no"} </p>
        <p> Dairy free : {info.dairyFree?"yes" : "no"}</p>
        <p>Health Score : {info.healthScore}</p>
        <p>Cooking Minutes : {info.cookingMinutes}</p>
        <p> Preparation Minutes : {info.preparationMinutes} </p>
        <p>Serving :{info.servings}</p>
        <p>Source :{ info.sourceName} </p>
        <p> URL : {info.sourceUrl} {console.log(info.sourceUrl)} </p>
        <p>Weight watcher smart point : {info.weightWatcherSmartPoints}</p>
        

    </div>
   
    <div className="ingredients">
{console.log(ingredients) }
  
        
    </div>

    <div className="instruction">
        <h2>Instrcutions</h2>
        <p>
            {info.instructions}
        </p>

    </div>
</div>)



}