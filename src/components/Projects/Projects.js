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

const Projects = ()=> {
  
  let data= [
    {
      alt: "Barber's Chair",
      imgSrc: coverImage1,
      url:"https://barbers-chair.herokuapp.com/"
    },
    {
      alt:"Budget Tracker",
      url:"https://budget-tracker1-pwa.herokuapp.com/",
      imgSrc: coverImage2,
      
    },
    {
      alt:"Note Taker",
      url: "https://notetaker2021-1.herokuapp.com/",
      imgSrc: coverImage3,
    },
    {
      alt:"Horiseon",
      url:"https://santibass.github.io/Horiseon/",
      imgSrc: coverImage4,
    },
    {
      alt:"Password Generator",
      url: "https://santibass.github.io/Password-Generator/",
      imgSrc: coverImage5,
    },
    {
      alt:"Personal Portfolio",
      url: "https://santibass.github.io/Personal-Portfolio/",
      imgSrc: coverImage6,
      
    },
    {
      alt:"Weather Dashboard",
      url: "https://santibass.github.io/Weather-Dashboard/",
      imgSrc: coverImage7,
    },
    {
      alt:"SYNTH Doctrina",
      url:"https://itsjustpeachy.github.io/SYNT-Doctrina/",
      imgSrc: coverImage8,
    },
    { 
      
      alt:"Tech Blog",
      url:"https://teckblog.herokuapp.com/",
      imgSrc: coverImage9,
    }
  ];
  const [Modal, setModal] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState(0);
  const getImg=(imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModal(true )
  }
  // console.warn(data)
  return(
    <>
   <div className='Projects'>
     <div className='title'>
       <span className='span'>Pro</span>jects
     </div>
   <div className={Modal? 'Modal open':'Modal'}>
     <img src={tempimgSrc} alt="projects" />
     {/* <a href={}/> */}
     
     <button  className='closeBtn' CloseIcon onClick={()=>setModal(false)}>Close</button>
     < CloseIcon onClick={()=>setModal(false)}/>
   </div>
   
   
   <div className=' gallery'>

      {data.map((item, index) => {
          return (
          <>
          <button className='visitProject'><a href={data[index].url} alt="">Visit</a> </button>

          <div className='pictures' key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} alt="Project " style={{ width: "100%" }}/>
          </div>
         </> 
        ) 
      })}
    </div>
   </div>
    </>

  )
};




export default Projects