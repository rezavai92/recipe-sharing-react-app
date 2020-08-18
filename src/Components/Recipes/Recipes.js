import React ,{useState,useEffect} from 'react'
import Recipe from '../Recipe/Recipe'
import Info from '../Recipe/Info'
import './recipes.css'
import axios from 'axios'

export default ({results,search,searchHandler})=>{
    
    const [recipeInfo , setRecipeInfo]= useState({});
    const [itemId,setItemId] =useState(null);
    const [showInfo,setShowInfo] = useState(false);
    const [show,setShow] = useState(false);
    const [ingredients,setIngredients] = useState([]);

    useEffect(
     ()=>{
      if (showInfo ){ 
          
        
        axios.get(`https://api.spoonacular.com/recipes/${itemId}/information?apiKey=a8a1fce5a19144e1a856a2b8f0c5088a`).then((res)=>{
  
             console.log(res.data);
             setRecipeInfo(res.data);
             setIngredients(res.data.extendedIngredients);
             
             
           
     }) }  },[showInfo,show] )

   
    const recipes = (results.map((r)=>{ return  (<div key={r.id}> <Recipe 
        infoHandler={setShowInfo} 
        id={r.id} title={r.title}
        searchHandlerP={searchHandler}
        itemIdHandler={setItemId}
        showHandler ={setShow}
        show ={show}
         image={r.image} ></Recipe> 
        </div>
         ) }));

    return (<div className="c">
        
        {showInfo && !search ?
        <Info ingredients={ingredients} info={recipeInfo}></Info>
        
        : 
        
        <div style={{marginTop:"2vh"}} className="ui stackable grid ">
            {recipes}
            
        </div> 
        }

       



    </div>)
}