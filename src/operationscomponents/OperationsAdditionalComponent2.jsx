import React from 'react'
import { Box, Typography } from '@mui/material'
import { opmbg } from '../assets'
import { opm1, opm2, opm3, opm4, opm5, opm6, opm7, opm8, opm9 } from '../assets'
import classes from './Operations.module.css'

const OperationsAdditionalComponent2 = () => {
  return (
    <>
      <Box sx={{zIndex:1, backgroundImage: `url(${opmbg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}} paddingY={{xs:'25px', sm:'30px',md:'80px'}}
        display='flex' flexDirection={{xs:'column', sm:'column',md:'row'}} flexWrap='wrap' alignContent='center' alignItems='center' justifyContent='center' gap='1rem'
      >
        <Box>
            <img className={classes.opmsize} src={opm1} alt="" />  
        </Box>
        <Box>
            <img className={classes.opmsize} src={opm2} alt="" />  
        </Box>
        <Box>
            <img className={classes.opmsize} src={opm3} alt="" />  
        </Box> 
        <Box>
            <img className={classes.opmsize} src={opm4} alt="" />  
        </Box> 
        <Box>
            <img className={classes.opmsize} src={opm5} alt="" />  
        </Box> 
        <Box>
            <img className={classes.opmsize} src={opm6} alt="" />  
        </Box> 
        <Box>
            <img className={classes.opmsize} src={opm7} alt="" />  
        </Box> 
        <Box>
            <img className={classes.opmsize} src={opm8} alt="" />  
        </Box> 
        <Box>
            <img className={classes.opmsize} src={opm9} alt="" />  
        </Box>       
      </Box>
    </>
  )
}

export default OperationsAdditionalComponent2