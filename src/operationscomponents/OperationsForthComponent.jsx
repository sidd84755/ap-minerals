import React from 'react'
import { Box, Typography } from '@mui/material'
import { cardBg } from '../assets'

const OperationsForthSection = () => {
  return (
    <>
      <Box sx={{zIndex:1}} paddingY={{xs:'25px', sm:'30px',md:'80px'}} bgcolor='#E5E5E5'
        display='flex' flexDirection='column' alignItems='center'
      >
        <Box textAlign='center'>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'20px',sm:'22px',md:'52px'}} fontWeight={700} textAlign='center' color='#1A1A1A' lineHeight='60.94px'>
                Our Strategy
            </Typography> 
            <Typography paddingX={{xs:'25px', sm:'30px',md:'150px'}} fontSize={{xs:'20px',sm:'22px',md:'24px'}} fontWeight={400} textAlign='center' color='#A17337' lineHeight='28px' fontStyle='italic'>
                The growth and sustainability of the company will rely on
            </Typography>  
        </Box> 
        <Box display='flex' flexDirection='row' gap='1rem' paddingY={{xs:'25px', sm:'30px',md:'50px'}}>
            <Box display='flex' flexDirection='column' gap='0.8rem' paddingY={{xs:'25px', sm:'30px',md:'50px'}} paddingX={{xs:'10px', sm:'15px',md:'40px'}} sx={{backgroundImage:`url(${cardBg})`}}>
                <Typography fontSize={{xs:'20px',sm:'22px',md:'24px'}} fontWeight={600} color='#E5E5E5' lineHeight='28px'>
                    In The Short Term
                </Typography> 
                <Typography fontSize={{xs:'20px',sm:'22px',md:'18px'}} fontWeight={400} color='#E5E5E5' lineHeight='28px'>
                    We focus on
                    reducing costs and increasing
                    production<br/> the mine assets that
                    we are jointly operating with.
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='0.8rem' paddingY={{xs:'25px', sm:'30px',md:'50px'}} paddingX={{xs:'10px', sm:'15px',md:'40px'}} sx={{backgroundImage:`url(${cardBg})`}}>
                <Typography fontSize={{xs:'20px',sm:'22px',md:'24px'}} fontWeight={600} color='#E5E5E5' lineHeight='28px'>
                    In The Medium Term
                </Typography> 
                <Typography fontSize={{xs:'20px',sm:'22px',md:'18px'}} fontWeight={400} color='#E5E5E5' lineHeight='28px'>
                    Continuing
                    exploration with the existing mine
                    assets to<br/>expand resources, extend
                    mine lives, and construct and<br/>place
                    new mine assets into production.

                </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='0.8rem' paddingY={{xs:'25px', sm:'30px',md:'50px'}} paddingX={{xs:'10px', sm:'15px',md:'40px'}} sx={{backgroundImage:`url(${cardBg})`}}>
                <Typography fontSize={{xs:'20px',sm:'22px',md:'24px'}} fontWeight={600} color='#E5E5E5' lineHeight='28px'>
                    In The Medium To Long Term
                </Typography> 
                <Typography fontSize={{xs:'20px',sm:'22px',md:'18px'}} fontWeight={400} color='#E5E5E5' lineHeight='28px'>
                    Position AP Minerals as consolidation vehicle for<br/>Indonesian coal and other commodity assets.
                </Typography>
            </Box>
        </Box>  
      </Box>
    </>
  )
}

export default OperationsForthSection