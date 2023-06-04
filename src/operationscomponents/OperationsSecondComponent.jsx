import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'

const OperationSecondSection = () => {
  return (
    <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} display='flex' flexDirection='column' alignItems='center'>
    <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}}>
    <Typography fontSize={{xs:'12px',sm:'14px',md:'16px',lg:'20px'}} fontWeight={400} fontStyle='italic' color='#A17337'>
        What We Do
    </Typography>
      <Box display='flex' flexDirection='row' gap={{xs:'1rem',sm:'1rem',md:'2rem',lg:'1.3rem',xl:'9rem'}}>
        
        <Box >
            
            <Typography lineHeight='49px' fontSize={{xs:'16px',sm:'22px',md:'30px',lg:'42px'}} fontWeight={700} color='#1A1A1A'>
                Start-to-Finish<br/>
                Mining Services
            </Typography>
        </Box>
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Typography fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={400} color='#2E2E2E'>
                We endure to supply and deliver our coal reliably,
                efficiently, and responsibly to countries where coal<br/>
                continues to play a leading role in power generation given
                its reliability and affordability. We intend to<br/>add value to
                the global trade in natural resources with exceptional
                service and performance across<br/>the supply chain.
            </Typography>
            <Typography fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={400} color='#2E2E2E'>
                Each of the concessions is strategically located with the
                best possible lower end cost stipulating to<br/>minimum
                logistics, and coal grades ranging from GAR (ARB) 3400
                Kcal/kg to GAR (ARB) 6500 kcal/kg<br/>with collective
                reserves of over 100 million metric Tons of mineable
                reserves.
            </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default OperationSecondSection
