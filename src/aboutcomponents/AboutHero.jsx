import React from 'react'
import { Box, Typography } from '@mui/material'
import { aboutmainBg } from '../assets'
import classes from './About.module.css'

const AboutHero = () => {
  return (
    <>
      <Box className={classes.bg1} sx={{height:'80vh', backgroundImage:`url(${aboutmainBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',zIndex:1}}
        display='flex' flexDirection='row' justifyContent={{xs:'flex-start',sm:'flex-start',md:'flex-end'}} alignItems='flex-end'
      >
        <Typography paddingY={{xs:'50px', sm:'50px',md:'80px'}} paddingX={{xs:'25px', sm:'30px',md:'130px',lg:'150px'}} fontSize={{xs:'52px',sm:'52px',md:'52px',lg:'86px'}} fontWeight={700} textAlign='center' color='#E5E5E5' lineHeight={{xs:'60px',sm:'60px',md:'100px'}}>
            About Us
        </Typography>    
      </Box>
    </>
  )
}

export default AboutHero