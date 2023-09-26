import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './App.css';

import Meal from './components/Meal';
import Search from './components/Search';
import { useGlobalContext } from "./context";
import Modal from './components/Modal';
import Favorite from './components/Favorite';

    
function App() {
  const { showModal,favmeals } = useGlobalContext()
  
  
  
  return (
    <>
     <Search/>
    {favmeals.length >0  && <Favorite/>}
    <Meal/>
    {showModal && <Modal/>}

    </>
  );
}

export default App;
