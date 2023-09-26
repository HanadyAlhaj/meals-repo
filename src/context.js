import React, {useContext, useEffect, useState} from "react"


const allMealsURL= "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const random = "https://www.themealdb.com/api/json/v1/1/random.php";
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
  const [meals,setMeals] = useState([]);
  const [loading,setLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [selectedMeal,setSelectedMeal] = useState(null);
  const [favmeals,setFavMeals] = useState([]);
  const fetchData = async (url) => {
    setLoading(true)
    try{
    const response = await fetch(url)
    const data= await response.json(response);
    setMeals(data.meals)}
    catch(err){
      console.log('error',err)
      setMeals([])
    }
   setLoading(false)
  }
  const fetchRandomMeal = ()=>{
    fetchData(random)
  }
   const selectMeal=(idMeal)=>{
   
    let meal
   meal= meals.find((meal)=> meal.idMeal=== idMeal);
   setSelectedMeal(meal);
   
   setShowModal(true);
   }
   const addMeal = (idMeal) =>{
   
    const meal= meals.find((meal)=> meal.idMeal=== idMeal);
    const found = favmeals.find((meal)=> meal.idMeal=== idMeal)
    if(found) return
    const updatefav =[...favmeals,meal];
    setFavMeals(updatefav)
   
   }
   const removeMeal = (idMeal) =>{
   
    const meal= favmeals.filter((meal)=> meal.idMeal!== idMeal);
    setFavMeals(meal)
   
   }
  useEffect(()=> {
        fetchData(`${allMealsURL}${searchTerm}`);
    }
       ,[searchTerm]);

return(
 <AppContext.Provider value={{loading,meals,setSearchTerm,fetchRandomMeal,showModal,selectMeal,selectedMeal,setShowModal,favmeals,addMeal,removeMeal}}>
  {children}

</AppContext.Provider>)
}

const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}