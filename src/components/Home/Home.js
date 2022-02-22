import React from 'react'
import coverImage from '../../assets/cover/logo.jpg'
function Home() {
  return (
    <>
    <div className='welcome'>Welcome
    <div>
          <img src={coverImage} className="my-2 mx-2" style={{backgroundImage: "cover" , width: "100%", borderRadius: "8px"  }} alt="cover" />
      </div>
      <div></div>
      </div>
    </>

  )
}

export default Home