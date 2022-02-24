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
      url:"https://budget-tracker1-pwa.herokuapp.com/",
      imgSrc: coverImage2,
      
    },
    {
      atl:"Note Taker",
      url: "https://notetaker2021-1.herokuapp.com/",
      imgSrc: coverImage3,
    },
    {
      atl:"Horiseon",
      url:"https://santibass.github.io/Horiseon/",
      imgSrc: coverImage4,
    },
    {
      atl:"Password Generator",
      url: "https://santibass.github.io/Password-Generator/",
      imgSrc: coverImage5,
    },
    {
      atl:"Personal Portfolio",
      url: "https://santibass.github.io/Personal-Portfolio/",
      imgSrc: coverImage6,
      
    },
    {
      atl:"Weather Dashboard",
      url: "https://santibass.github.io/Weather-Dashboard/",
      imgSrc: coverImage7,
    },
    {
      atl:"SYNTH Doctrina",
      url:"https://itsjustpeachy.github.io/SYNT-Doctrina/",
      imgSrc: coverImage8,
    },
    { 
      
      atl:"Tech Blog",
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
   <> <>
   <div className={Modal? 'Modal open':'Modal'}>
     <img src={tempimgSrc}/>
     {/* <a href={}/> */}
     
     <button  className='closeBtn' CloseIcon onClick={()=>setModal(false)}>Close</button>
     < CloseIcon onClick={()=>setModal(false)}/>
   </div>
   </>
   
   <div className=' gallery'>

      {data.map((item, index) => {
          return (
          <>
   
          <button className='visitProject'><a href={data[index].url}>Visit</a> </button>

          <div className='pictures' key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: "100%" }}/>
              
{/* <button className='url1' onClick={()=>getUrl(item.url)}>
            </button> */}
          {/* </div> */}
          {/* <div className='url2' key={index} onClick={()=> getUrl(item.url)}>
          <a href={data.url}/>Visit */}

          </div>
         
            </>
        )
      })}
    </div></>

  )
};




export default Projects