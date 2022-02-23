import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
// import Modal from '../Modal/Modal'
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
//         <div className='card'>Password Generator<img src={coverImage5} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Personal Portfolio_<img src={coverImage6} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
//         <div className='card'>Weather Dashboard<img src={coverImage7} className="my-2 projectPictures" style={{wnameth: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" /></div>
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
      atl: "Barber's Chair",
      imgSrc: coverImage1,
      url:"https://barbers-chair.herokuapp.com/"
    },
    {
      atl:"Budget Tracker",
      imgSrc: coverImage2,
    },
    {
      atl:"Note Taker",
      imgSrc: coverImage3,
    },
    {
      atl:"Horiseon",
      imgSrc: coverImage4,
    },
    {
      atl:"Password Generator",
      imgSrc: coverImage5,
    },
    {
      atl:"Personal Portfolio",
      imgSrc: coverImage6,
    },
    {
      atl:"Weather Dashboard",
      imgSrc: coverImage7,
    },
    {
      atl:"SYNTH Doctrina",
      imgSrc: coverImage8,
    },
    {
      atl:"Tech Blog",
      url:"https://barbers-chair.herokuapp.com/",
      imgSrc: coverImage9,
    }
    


  ];
  const [Modal, setModal] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg=(imgSrc,url)=>{
    setTempImgSrc(imgSrc,url);
    setModal(true )
     
  }
        console.warn(data)
 
  return(
   <> <>
   <div className={Modal? 'Modal open':'Modal'}>
     <img src={tempimgSrc}/>
     
     <button  className='closeBtn' CloseIcon onClick={()=>setModal(false)}>Close</button>
     < CloseIcon onClick={()=>setModal(false)}/>
     <button>
       <a src={data.url}/>Visit
     </button>
   </div>
   </>
   
   <div className=' gallery'>

      {data.map((item, index) => {
        return (
          <div className='pictures' key={index} onClick={() => getImg(item.imgSrc)}>
            
            <img src={item.imgSrc} style={{ width: "100%" }} />
            <div>hi</div>
          
          </div>
        )
      })}
    </div></>

  )
};




export default Projects