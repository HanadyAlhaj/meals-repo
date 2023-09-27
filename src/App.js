
import { useState } from 'react';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Meal from './components/Meal';
import Search from './components/Search';
import { useGlobalContext } from "./context";
import Modal from './components/Modal';
import Favorite from './components/Favorite';

    
function App() {
  const { showModal,favmeals } = useGlobalContext()
  
  
  
  return (
    <div>
     <Search/>
    {favmeals.length >0  && <Favorite/>}
    <Meal/>
    {showModal && <Modal/>}

    </div>
  );
}

export default App;
