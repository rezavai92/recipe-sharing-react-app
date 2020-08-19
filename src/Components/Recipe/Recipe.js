import React,{useState,useEffect} from 'react'
import Info from './Info'

import axios from 'axios'

export default ({id,title,image,show,showHandler,itemIdHandler,searchHandlerP,infoHandler})=>{



   
    
   const style = {
        backgroundImage : `url(${image})`,
        backgroundSize : "cover",
        
    }

/*
<div class="ui card">
  <div class="image">
    <img src="/images/avatar2/large/kristy.png">
  </div>
  <div class="content">
    <a class="header">Kristy</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
  </div>
</div> 
*/

 return (


  <div  className=" column ">
        
          <div>  <img src={image}/> </div>
         <a  onClick={()=>{infoHandler(true);searchHandlerP(false);showHandler(!show) ;itemIdHandler(id)}} href="#"> {title} </a> 
         
     
 
 </div>

 )

}