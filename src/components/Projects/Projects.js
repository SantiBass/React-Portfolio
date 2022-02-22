import React from 'react'
import coverImage1 from '../../assets/Projects-Images/Barbers-Chair-ScreenShot.png'
import coverImage2 from '../../assets/Projects-Images/BudgetTracker.png'
import coverImage3 from '../../assets/Projects-Images/noteTaker.png'
import coverImage4 from '../../assets/Projects-Images/santibass.github.io_Horiseon_.png'
import coverImage5 from '../../assets/Projects-Images/santibass.github.io_Password-Generator_.png'
import coverImage6 from '../../assets/Projects-Images/santibass.github.io_Personal-Portfolio_.png'
import coverImage7 from '../../assets/Projects-Images/santibass.github.io_Weather-Dashboard_.png'
import coverImage8 from '../../assets/Projects-Images/SytnDoctrina.png'
import coverImage9 from '../../assets/Projects-Images/The Tech Blog1.png'

function Business() {
  return (
    <section>
        <h1>
            Name:Projects
        </h1>
        <p>
            Description
        </p>
        <div className='projectSection'>

        <img src={coverImage1} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage2} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage3} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage4} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage5} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage6} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage7} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage8} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />
        <img src={coverImage9} className="my-2 projectPictures" style={{width: "200px",borderRadius:"8px", margin:"10px"}} alt="cover" />


        </div>
    </section>
  )
}

export default Business
