import React from 'react'
import  GitHubIcon  from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material'
import { Button } from '@material-ui/core'





function Footer() {
    const links = {
        gitHub: `https://github.com/SantiBass`,
        linkedIn: `https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/`,

    };
const styles={
    footer1:{
        backgroundColor: "black",
        color:"white",
        with: '100%',
        height: 'auto',
        fontSize: "10px",
        position:'bottom'


    },
    list:{
        displayType: 'none',
        display: 'flex',
        justifyContent: "center",
        justifyContent: 'space-around',
         fontSize: "100px"
       

    },
    links:{
        textDecoration: "none",
        color:"white"
    },
    button:{
        backgroundColor: "green",
        width: "5vw",
        height: ""

    }
    
    }
    
  return (
    


    <div className='footer1'  >
       
        <ul style={styles.list}>
        <li>
        <button className='button large  is-rounded'  href={links.gitHub}without rel="noopener noreferrer" target="_blank">GitHub
            <GitHubIcon style={{width:'100px',height:"50px"}} />
        </button>
        <></>
        </li>
        <li>
        <button className='button large  is-rounded' href={links.linkedIn}without rel="noopener noreferrer" target="_blank">
            LinkedIn
            <LinkedIn  style={{width:'100px',height:"50px"}}/>
        </button>
        </li>

        {/* <li>
            <button style={styles.button}></button>
        </li> */}
        <li  >
            <button className='button large  is-rounded'  href="mailto:sibarraryan@gmail.com">sibarraryan@gmail.com</button> 
        </li>
        


        </ul>
        
   </div>
  )
}

export default Footer