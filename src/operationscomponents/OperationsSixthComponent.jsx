import React from 'react'
import { Box, Typography } from '@mui/material'
import { operationsmainBg } from '../assets'

const OperationsSixthSection = () => {
  return (
    <>
      <Box
        display='flex' flexDirection='row' justifyContent='center'
      >
        <Typography paddingY={{xs:'25px', sm:'30px',md:'80px'}} paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'20px',sm:'22px',md:'22px',lg:'24px'}} fontWeight={500} textAlign='center' color='#fff' lineHeight='34px'>
            “Our foremost goal is to cater the requirements of our nationwide<br/>
            as well as global customers by rendering high quality coal and<br/>
            ensure utmost client satisfaction.”
        </Typography>    
      </Box>
    </>
  )
}

export default OperationsSixthSection