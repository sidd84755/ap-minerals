import React from 'react'
import { Box, Typography } from '@mui/material'
import { contactmainBg } from '../assets'
import classes from './Contact.module.css'

const ContactHero = () => {
  return (
    <>
      <Box className={classes.bg2} sx={{height:'76vh', backgroundImage:`url(${contactmainBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',zIndex:1}}
        display='flex' flexDirection='row' justifyContent='flex-start' alignItems='flex-end'
      >
        <Typography paddingY={{xs:'40px', sm:'40px',md:'80px'}} paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'52px',sm:'52px',md:'72px',lg:'86px'}} fontWeight={700} textAlign='center' color='#E5E5E5' lineHeight={{xs:'61px',sm:'61px',md:'100px'}}>
            Contact Us
        </Typography>    
      </Box>
    </>
  )
}

export default ContactHero