import React from 'react'
import { Box, Typography } from '@mui/material'
import { contactmainBg } from '../assets'

const ContactHero = () => {
  return (
    <>
      <Box sx={{height:'76vh', backgroundImage:`url(${contactmainBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100%',zIndex:1}}
        display='flex' flexDirection='row' justifyContent='flex-start' alignItems='flex-end'
      >
        <Typography paddingY={{xs:'25px', sm:'30px',md:'80px'}} paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'20px',sm:'22px',md:'72px',lg:'86px'}} fontWeight={700} textAlign='center' color='#E5E5E5' lineHeight='100px'>
            Contact Us
        </Typography>    
      </Box>
    </>
  )
}

export default ContactHero