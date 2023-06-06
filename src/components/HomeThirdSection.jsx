import React from 'react'
import { Box, Typography } from '@mui/material'

const HomeThirdSection = () => {
  return (
    <>
      <Box  paddingY={{xs:'25px', sm:'30px',md:'10px'}} display='flex' flexDirection={{xs:'column-reverse', sm:'column-reverse', md:'row'}}
        
      >
        <Box paddingY={{xs:'50px', sm:'50px',md:'50px'}}>
            <Typography fontSize={{xs:'28px',sm:'28px',md:'28px',lg:'24px'}} fontWeight={700} color='#fff' textTransform='uppercase'>
                Our foremost goal is to cater the<br/>requirements of our nationwide
                as<br/>well as global customers by<br/>rendering high quality coal and<br/>
                ensure utmost client satisfaction
            </Typography>
        </Box>
        <Box paddingY={{xs:'150px', sm:'150px',md:'50px'}}>

        </Box>
      </Box>
    </>
  )
}

export default HomeThirdSection
