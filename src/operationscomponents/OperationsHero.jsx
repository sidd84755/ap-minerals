import React from 'react'
import { Box, Typography } from '@mui/material'
import { operationsmainBg } from '../assets'
import classes from './Operations.module.css'

const OperationsHero = () => {
  return (
    <>
      <Box className={classes.bg1} sx={{height:'76vh', backgroundImage:`url(${operationsmainBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',zIndex:1}}
        display='flex' flexDirection='row' justifyContent='flex-end' alignItems='flex-end'
      >
        <Typography paddingY={{xs:'50px', sm:'50px',md:'80px'}} paddingX={{xs:'15px', sm:'15px',md:'130px',lg:'150px'}} fontSize={{xs:'48px',sm:'48px',md:'52px',lg:'86px'}} fontWeight={700} textAlign='center' color='#E5E5E5' lineHeight={{xs:'60px',sm:'60px',md:'100px'}}>
          Our Operations
        </Typography>    
      </Box>
    </>
  )
}

export default OperationsHero