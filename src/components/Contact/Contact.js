import React from 'react'
// import coverImage from "../../assets/cover/3.jpg"
function Contact() {
  return (
      <section className='Contact'>
        <h1>Contact me</h1>
        <form id="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" />
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
//   <section className='Contact pageHeight'>
//       {/* <img src={coverImage} className="my-2" style={{width: "25%",borderRadius:"8px"}} alt="cover" /> */}
//       <div></div>
//     <h1>
//         Contact
//     </h1>
  

    
// </section>
export default Contact