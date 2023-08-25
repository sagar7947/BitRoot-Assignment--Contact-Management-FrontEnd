import React,{useState,useEffect} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import axios from "axios";

const initialState = {
  name :"",
  email: "",
  contact:""

} 


const AddEdit = () => {
  const [state, setState] = useState(initialState);
  
  const {name, email, contact } = initialState;
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const handleInputChange = (e)=>
  {
    let {name, value} =e.target;
    setState({...state, [name]:value})

  }
  return (
  <div style={{marginTop: "100px"}}>
  <form style={{margin: "auto", padding:"15px",maxWidth: "400px", alignContent: "center"}}>

    onSubmit={handleSubmit};

  <label htmlFor='name'>Name</label>
  <input type="text" id='name' placeholder='Enter Name' onChange={handleInputChange} value={name}/> 


  <label htmlFor='name'>Email</label>
  <input type="text" id='email' placeholder='Enter Email' onChange={handleInputChange} value={email}/> 
  <label htmlFor='contact'>Contact</label>
  <input type="number" id='contact' placeholder='Enter contact' onChange={handleInputChange} value={contact}/> 

  </form>

  </div>

  )
}

export default AddEdit;