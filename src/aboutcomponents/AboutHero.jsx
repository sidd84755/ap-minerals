import React from 'react'
import { Box, Typography } from '@mui/material'
import { aboutmainBg } from '../assets'

const AboutHero = () => {
  return (
    <>
      <Box sx={{height:'80vh', backgroundImage:`url(${aboutmainBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',zIndex:1}}
        display='flex' flexDirection='row' justifyContent='flex-end' alignItems='flex-end'
      >
        <Typography paddingY={{xs:'25px', sm:'30px',md:'80px'}} paddingX={{xs:'25px', sm:'30px',md:'130px',lg:'150px'}} fontSize={{xs:'20px',sm:'22px',md:'72px',lg:'86px'}} fontWeight={700} textAlign='center' color='#E5E5E5' lineHeight='100px'>
            About Us
        </Typography>    
      </Box>
    </>
  )
}

export default AboutHero