import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { homefifthBg, homefifthImg } from '../assets'
import ContactForm from './ContactForm'
import classes from './Home.module.css'

const HomeFifthSection = () => {
  return (
    <>
      <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} paddingX={{xs:'25px', sm:'30px',md:'100px'}} display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} justifyContent='space-evenly'
        sx={{background:'rgba(0, 0, 0, 0.8)'}}
        
      >
        <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center' gap='1rem'>
            <Typography fontSize={{xs:'24px',sm:'24px',md:'24px',lg:'20px'}} fontWeight={400} color='#A17337' fontStyle='italic'>
                Contact Us
            </Typography>
            <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center' gap='2rem'>
              <Typography fontSize={{xs:'30px',sm:'30px',md:'30px',lg:'36px'}} fontWeight={700} color='#fff' lineHeight={{xs:'35px',sm:'35px',md:'35px',lg:'42px'}}>
                  We’re Looking Forward to<br/>Hearing From You
              </Typography>
              <ContactForm/>
            </Box>
            
        </Box>
        <Box>
            <img className={classes.contactimg} src={homefifthImg} alt="banner" />
        </Box>
      </Box>
    </>
  )
}

export default HomeFifthSection
