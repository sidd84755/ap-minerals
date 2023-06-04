import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'

const OperationSecondSection = () => {
  return (
    <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} display='flex' flexDirection='column' alignItems='center'>
    <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}}>
    <Typography fontSize={{xs:'12px',sm:'16px',md:'24px'}} fontWeight={400} fontStyle='italic' color='#A17337'>
        What We Do
    </Typography>
      <Box display='flex' flexDirection='row' flexWrap='wrap'  gap='8rem'>
        
        <Box >
            
            <Typography lineHeight='60.94px' fontSize={{xs:'16px',sm:'22px',md:'52px'}} fontWeight={700} color='#1A1A1A'>
                Start-to-Finish<br/>
                Mining Services
            </Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Typography fontSize={{xs:'12px',sm:'14px',md:'18px'}} fontWeight={400} color='#2E2E2E'>
                We endure to supply and deliver our coal reliably,
                efficiently, and responsibly to countries where coal
                continues to play a<br/>leading role in power generation given
                its reliability and affordability. We intend to add value to
                the global trade in natural<br/>resources with exceptional
                service and performance across the supply chain.
            </Typography>
            <Typography fontSize={{xs:'12px',sm:'14px',md:'18px'}} fontWeight={400} color='#2E2E2E'>
                Each of the concessions is strategically located with the
                best possible lower end cost stipulating to minimum
                logistics, <br/>and coal grades ranging from GAR (ARB) 3400
                Kcal/kg to GAR (ARB) 6500 kcal/kg with collective
                reserves of over 100<br/>million metric Tons of mineable
                reserves.
            </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default OperationSecondSection
