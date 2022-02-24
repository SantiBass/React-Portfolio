import React, {useState} from 'react'
import {validateEmail} from "../../utils/helpers"
// import coverImage from "../../assets/cover/3.jpg"
function Contact() {

  const[state, setState] = useState({
    email:""
  })
  const handleInput = (event)=>{
    let name= event.target.name
    let value = event.target.value
    setState({...state, [name]:value})
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(validateEmail(state.email)){
      alert("Email is correct")
    }else{
      alert("Invalid email")
    }
  }
  return (
      <section className='Contact'>
        <h1 >Contact me</h1>
        <form id="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input placeholder='Enter your name' type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email" >Email address:</label>
          
            <input  onChange= {handleInput} placeholder='Enter your email' type='email' name='email' value={state.email} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      );


}

export default Contact