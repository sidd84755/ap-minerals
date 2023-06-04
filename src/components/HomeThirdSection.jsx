import React from 'react'
import { Box, Typography } from '@mui/material'

const HomeThirdSection = () => {
  return (
    <>
      <Box  paddingY={{xs:'25px', sm:'30px',md:'10px'}} display='flex' flexDirection={{xs:'column-reverse', sm:'column-reverse', md:'row'}}
        
      >
        <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}}>
            <Typography fontSize={{xs:'18px',sm:'22px',md:'22px',lg:'24px'}} fontWeight={700} color='#fff' textTransform='uppercase'>
                Our foremost goal is to cater the<br/>requirements of our nationwide
                as<br/>well as global customers by<br/>rendering high quality coal and<br/>
                ensure utmost client satisfaction
            </Typography>
        </Box>
        <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}}>

        </Box>
      </Box>
    </>
  )
}

export default HomeThirdSection
