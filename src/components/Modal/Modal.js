import React from 'react'


const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;







// import "./App.css"
// function Modal() {
//   return (
    
//     <>
//     <div className='modalBackground'>
//         <div className='modalContainer'>
//             <div className='title'> 
//                 <h1> title</h1>
//             </div>
//             <div className='body'>
//                 <h1>Image here </h1>
//             </div>
//             <div className='footer'> 
//                 <button>Close</button>
//                 <button>Go to Page</button>
//             </div>
//         </div>

//     </div>
//     </>

//     )
// }

// export default Modal