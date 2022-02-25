import React, { useState } from 'react'
import { validateEmail } from "../../utils/helpers"
// import coverImage from "../../assets/cover/3.jpg"
function Contact() {

  const [state, setState] = useState({
    email: ""
  })
  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value
    setState({ ...state, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(state.email)) {
      alert("Email is correct")
    } else {
      alert("Invalid email")
    }
  }
  return (
    <section className='Contact'>
      <h1 className=''>Contact me</h1>
      <form onSubmit={handleSubmit} id="contact-form">
        <li>Name:
          <div>
            <label htmlFor="name"></label>
            <input placeholder='Enter your name' type="text" name="name" />
          </div>
        </li>
        <li>Email:
          <div>
            <label htmlFor="email" ></label>

            <input onChange={handleInput} placeholder='Enter your email' type='email' name='email' value={state.email} />
          </div>
        </li>
        <li> Message:
          <div>
            <label htmlFor="message"></label>
            <textarea placeholder='Enter our text here' name="message" rows="5" />
          </div>
        </li>
        <button className='button2 is-normal ' type="submit">Submit</button>
      </form>
    </section>
  );


}

export default Contact