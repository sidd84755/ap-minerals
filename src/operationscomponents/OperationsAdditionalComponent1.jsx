import React from 'react'
import { Box, Typography } from '@mui/material'
import { cardBg } from '../assets'
import { crown } from '../assets'

const OperationsAdditionalComponent = () => {
  return (
    <>
      <Box sx={{zIndex:1}} paddingY={{xs:'25px', sm:'30px',md:'80px'}} bgcolor='#A17337'
        display='flex' flexDirection='column' alignItems='center'
      >
        <Box textAlign='center'>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'18px',sm:'18px',md:'2px',lg:'20px'}} fontWeight={400} textAlign='center' color='#fff' lineHeight={{xs:'23px',sm:'23px',md:'23px'}} fontStyle='italic'>
                Our Products
            </Typography> 
            <Typography marginTop='10px' paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'24px',sm:'24px',md:'42px',lg:'42px'}} fontWeight={700} textAlign='center' color='#fff' lineHeight='49px'>
                Coal Grades Available
            </Typography>  
        </Box> 
        <Box display='flex' flexDirection={{xs:'column',sm:'column',md:'row'}} gap='1rem' paddingY={{xs:'25px', sm:'30px',md:'50px'}} paddingX={{xs:'30px', sm:'30px',md:'150px'}}>
            <Box display='flex' flexDirection='row' gap='1rem'>
                <img src={crown} alt="" />
                <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    Coal is a natural element, specifications would vary depending on weather conditions.
                </Typography>
            </Box>
        </Box>  
      </Box>
    </>
  )
}

export default OperationsAdditionalComponent