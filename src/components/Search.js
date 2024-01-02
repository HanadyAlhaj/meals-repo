import React ,{useState} from "react";
import { useGlobalContext } from "../context";


export default function Search(){
    const { setSearchTerm } = useGlobalContext()
    const { fetchRandomMeal} = useGlobalContext()
    const [searchValue,setSearchValue] = useState('')
    const handleChange = (event)=> {
        setSearchValue(event.target.value)
       }
    const handleSubmit = (e )=> 
    {    if(searchValue){
         setSearchTerm (searchValue)}
       e.preventDefault()
    }  
    const handleSurprise = (e) =>
    {  
        setSearchValue('')
        fetchRandomMeal()
    }

    return (
        <header className='d-flex flex-row align-items-center'>

           <form onSubmit={handleSubmit}>
            <div className="search-container p-2 d-inline-flex flex-row ml-20">
            <input type="text" className="form-control-sm mx-2" placeholder ="Search a Meal" onChange={handleChange} value={searchValue}/> 
            <button type="submit" className="btn btn-primary mx-2" >search</button>
            <button type="submit" className="btn btn-success mx-2" onClick={handleSurprise}>Surprise Me !</button>
            </div>
            </form> 
        </header>
    )
}