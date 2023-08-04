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
        <Box display='flex' flexDirection={{xs:'column', sm:'column',md:'row'}} gap={{xs:'1rem', sm:'1rem',md:'2rem'}} paddingX={{xs:'25px', sm:'30px',md:'80px'}} marginTop='30px'>
          <Box display='flex' flexDirection='column' gap='1rem' >
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                      Coal is a natural element, specifications would vary depending on weather conditions.
                  </Typography>
              </Box>
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    Payments are based on 100% LC at sight, OR on Cash purchases.
                  </Typography>
              </Box>
          </Box>
          <Box display='flex' flexDirection='column' gap='1rem'>
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    Minimum order quantity of 50,000Mt i.e. a vessel load is acceptable. Can supply on Panamax, Ultramax and Cape size vessels.
                  </Typography>
              </Box>
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    All cargo is considered with 90% sizes of 0mm-50mm.
                  </Typography>
              </Box>
          </Box>
          <Box display='flex' flexDirection='column' gap='1rem'>
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    Sulphur content for higher grades could be reduced to rejection > 1% by providing a new pit for the consumers.
                  </Typography>
              </Box>
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    Supply on FOB MV basis only.
                  </Typography>
              </Box>
          </Box>
          <Box display='flex' flexDirection='column' gap='1rem'>
              <Box display='flex' flexDirection='row' gap='0.5rem' alignItems='flex-start'>
                  <img src={crown} alt="" />
                  <Typography fontSize={{xs:'14px',sm:'14px',md:'14px',lg:'14px'}}  fontWeight={400} color='#fff' lineHeight='20px'>
                    The quantities mentioned are on capacity to be supplied on monthly basis.
                  </Typography>
              </Box>
              
          </Box>
        </Box>     
      </Box>
    </>
  )
}

export default OperationsAdditionalComponent