import React from 'react'
import { Box, Typography } from '@mui/material'
import { operationsmainBg } from '../assets'

const OperationsHero = () => {
  return (
    <>
      <Box sx={{height:'76vh', backgroundImage:`url(${operationsmainBg})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',zIndex:1}}
        display='flex' flexDirection='row' justifyContent='flex-end' alignItems='flex-end'
      >
        <Typography paddingY={{xs:'25px', sm:'30px',md:'80px'}} paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'42px',sm:'42px',md:'72px',lg:'86px'}} fontWeight={700} textAlign='center' color='#E5E5E5' lineHeight='100.5px'>
          Our Operations
        </Typography>    
      </Box>
    </>
  )
}

export default OperationsHero