import React  from "react";
import { useGlobalContext } from "../context";


export default function Modal(){
    const { selectedMeal } = useGlobalContext();
    const { setShowModal} = useGlobalContext();
    const closeModal = (event) => {
        setShowModal(false)
    }
    
    return (

        <aside className="modal-overlay">
        <div className="modal-container">
        
                 <img src={selectedMeal.strMealThumb} alt="meal im" className="img-fluid rounded max-auto d-block " />
                <footer className='p-2  align-content-center justify-content-between'>
                 <h5>{ selectedMeal.strMeal}</h5> 
                 <p>{selectedMeal.strInstructions}</p>
                 <button className='like-btn border-0 bg-transparent ' onClick={()=> closeModal()}> close</button>
                 </footer>
                 
        </div>
          
        </aside>
    )
}