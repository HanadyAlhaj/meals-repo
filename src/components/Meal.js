import React from "react";
import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs"

export default function Meal(){
    const { loading , meals ,selectMeal,addMeal} = useGlobalContext()
  
   if(loading){
   return (
    <h1 className="text-center">Loading..............</h1>
   )}
   if(meals.length === 0){
    return(
     <h1>NO Items</h1>
    )}
    return (
        <section className="cards container-fluid bg-light"> 
            { meals.map((me)=>{
            return (
                <div key={me.idMeal} className="row justify-content-center ">
                 <div className="col" > 
                <article key={me.idMeal} className=' m-5 shadow rounded bg-light border-0 ' >
                 <img src={me.strMealThumb} alt="meal im" className="img-fluid rounded max-auto d-block " onClick={()=>selectMeal(me.idMeal)}/>
                <footer className='p-2 d-flex align-content-center justify-content-between'>
                 <h5>{ me.strMeal}</h5> 
                 <button className='like-btn border-0 bg-transparent ' onClick={()=>addMeal(me.idMeal)}><BsHandThumbsUp/></button>
                 </footer>
                 </article>
                 </div>
                 </div> 
                
            )
        })}
       </section> 

    )
}