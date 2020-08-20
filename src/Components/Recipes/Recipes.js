import React ,{useState,useEffect} from 'react'
import Recipe from '../Recipe/Recipe'
import Info from '../Recipe/Info'
import './recipes.css'
import axios from 'axios'

export default ({results,search,searchHandler})=>{
    

    
    const [recipeInfo , setRecipeInfo]= useState( {} );
    const [itemId,setItemId] =useState(null);
    const [showInfo,setShowInfo] = useState(false);
    const [show,setShow] = useState(false);
    

    useEffect(
     ()=>{
      if (showInfo ){ 
          
        
        axios.get(`https://api.spoonacular.com/recipes/${itemId}/information/?apiKey=484cd288ccd84a5fbf323cf176310e5a`).then((res)=>{
  
             console.log(res.data);
             setRecipeInfo(res.data);
             
             
             
           
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
        <Info  info={recipeInfo}></Info>
        
        : 
        
        <div style={{marginTop:"2vh",color:"white"}} className="flex">
            {recipes}
            
        </div> 
        }

       



    </div>)
}