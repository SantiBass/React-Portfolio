import React, {useState} from 'react'
// import Modal from '../Modal/Modal'
import CloseIcon   from @material-ui/icons/Close
import coverImage1 from '../../assets/Projects-Images/Barbers-Chair-ScreenShot.png'
import coverImage2 from '../../assets/Projects-Images/BudgetTracker.png'
import coverImage3 from '../../assets/Projects-Images/noteTaker.png'
import coverImage4 from '../../assets/Projects-Images/santibass.github.io_Horiseon_.png'
import coverImage5 from '../../assets/Projects-Images/santibass.github.io_Password-Generator_.png'
import coverImage6 from '../../assets/Projects-Images/santibass.github.io_Personal-Portfolio_.png'
import coverImage7 from '../../assets/Projects-Images/santibass.github.io_Weather-Dashboard_.png'
import coverImage8 from '../../assets/Projects-Images/SytnDoctrina.png'
import coverImage9 from '../../assets/Projects-Images/The-Tech-Blog.png'


// function Business() {

//   var projectBox = {
//     display: "flex",
//     flexWrap: "wrap",
//     maxWnameth: "90vw",
//     // backgroundColor: "black",
//     // opacity:"90%",
//     color:"black",
//     fontSize:"20px",
//     borderRadius:"20px"
//   }


//   return (
//     <section className='pageHeight Projects' >
//       <div style={projectBox} className='projectSection ' >

//         <div className='card'>Barbers Chair<img src={coverImage1} className="my-2 projectPictures card-title" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}}alt="cover" /></div>
//         <div className='card'>Budget Tracker<img src={coverImage2} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}}alt="cover"  /></div>
//         <div className='card'>Note Taker<img src={coverImage3} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Horiseon<img src={coverImage4} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Pawssword Generator<img src={coverImage5} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Personal Portfolio_<img src={coverImage6} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Weather Dashoard<img src={coverImage7} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>SYNTH Doctrina<img src={coverImage8} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Tech Blog<img src={coverImage9} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>

{/* ===================================== */}





        {/* <div className="columns is-mobile is-two-thirds-tablet is-half-desktop is-one-third-wnameescreen is-one-quarter-fullhd fondo">
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div>
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div>
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div>
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div>
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div>
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div>
          <div className="column" className='card'><img src={coverImage9} className="my-2 projectPictures" style={{ wnameth: "auto", borderRadius: "8px", margin: "10px", }} alt="cover" /><p>Teck Blog</p></div> */}
          {/* <div className= "column" >2</div>
  <div className= "column">2</div>
  <div className= "column">3</div>
  <div className= "column">4</div> */}
        {/* </div> */}

      // </div>

    // </section>
  // )
// }

// export default Business

const Projects = ()=> {
  let data= [
    {
      name:1,
      imgSrc: coverImage1,
    },
    {
      name:2,
      imgSrc: coverImage2,
    },
    {
      name:3,
      imgSrc: coverImage3,
    },
    {
      name:4,
      imgSrc: coverImage4,
    },
    {
      name:5,
      imgSrc: coverImage5,
    },
    {
      name:6,
      imgSrc: coverImage6,
    },
    {
      name:7,
      imgSrc: coverImage7,
    },
    {
      name:8,
      imgSrc: coverImage8,
    },
    {
      name:9,
      imgSrc: coverImage9,
    }
    


  ];
  const [modal, setModal] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg=(imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModal(true )
     
  }
        console.warn(data)
 
  return(
   <> <>
   <div className={modal? 'modal open':'modal'}>
     <img src={tempimgSrc}
      onClick= {()=>setModal(false)}/>
   </div>
   </>
   
   <div className=' gallery'>

      {data.map((item, index) => {
        return (
          <div className='pictures' key={index} onClick={() => getImg(item.imgSrc)}>
            
            <img src={item.imgSrc} style={{ width: "100%" }} />
            
          
          </div>
        )
      })}
    </div></>

  )
};




export default Projects