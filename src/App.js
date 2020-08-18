import React,{useEffect,useState} from 'react'
import Recipes from './Components/Recipes/Recipes'
import axios from 'axios'
import './App.css'

const App = ()=>{

  const [recipeName,setRecipeName]= useState("");
  const [result,setResult] = useState([]);
  const [showStatus,setShowStatus] = useState(false);
  const [search,setSearch]= useState(false);
  
  
  
  

  const showResultHandler =()=>{
    setSearch(true);
    setShowStatus(true);
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a8a1fce5a19144e1a856a2b8f0c5088a&query=${recipeName}`,).then((res)=>{
        console.log(res.data.results)
        //setPercentage(res);
        setResult(res.data.results);
        
        document.body.style="background : black ; overflow-x:hidden"
      });
    

  }


//const backStyle ={backgroundColor:"black"};

return(


<div >

   { !showStatus? 
   <div>
   <div className="laha" > 
     <p className="font" > You don't need a silver fork<br/> to eat good food </p> 
   
  </div> 
  </div>
  :null }  
  
  <div style= { showStatus? {margin:0,marginTop:"5%", marginBottom :"3%"} : null} className="search" >
  <div className="ui action input" >
  
  <input  style={{maxWidth:"100%"}} value ={recipeName} onChange={(e)=>{setRecipeName(e.target.value)}} placeholder="search recipe...(e.g. pasta)" type="text"/>
  <button onClick={showResultHandler} class="ui button">Search </button>
</div>

 
  </div>
  {showStatus ?  
 
  
  
    <Recipes searchHandler={setSearch}  search={search} results={result} ></Recipes>
    
    : null 
 }
 

  </div>
)

}

export default App;