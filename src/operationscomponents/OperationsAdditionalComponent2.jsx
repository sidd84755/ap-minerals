import React from 'react'
import { Box, Typography } from '@mui/material'
import { opmbg } from '../assets'
import { opm1, opm2, opm3, opm4, opm5, opm6, opm7, opm8, opm9 } from '../assets'

const OperationsAdditionalComponent2 = () => {
  return (
    <>
      <Box sx={{zIndex:1, backgroundImage: `url(${opmbg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}} paddingY={{xs:'25px', sm:'30px',md:'80px'}}
        display='flex' flexDirection={{xs:'column', sm:'column',md:'row'}} flexWrap='wrap' alignItems='center' justifyContent='center' gap='1rem'
      >
        <Box>
            <img src={opm1} alt="" />  
        </Box>
        <Box>
            <img src={opm2} alt="" />  
        </Box>
        <Box>
            <img src={opm3} alt="" />  
        </Box> 
        <Box>
            <img src={opm4} alt="" />  
        </Box> 
        <Box>
            <img src={opm5} alt="" />  
        </Box> 
        <Box>
            <img src={opm6} alt="" />  
        </Box> 
        <Box>
            <img src={opm7} alt="" />  
        </Box> 
        <Box>
            <img src={opm8} alt="" />  
        </Box> 
        <Box>
            <img src={opm9} alt="" />  
        </Box>       
      </Box>
    </>
  )
}

export default OperationsAdditionalComponent2