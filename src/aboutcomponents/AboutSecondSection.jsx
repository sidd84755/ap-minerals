import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'

const AboutSecondSection = () => {
  return (
    <Box paddingY={{xs:'25px', sm:'30px',md:'80px'}} display='flex' flexDirection='column' alignItems='center'>
    <Box>
    <Typography fontSize={{xs:'12px',sm:'14px',md:'16px',lg:'20px'}} fontWeight={400} fontStyle='italic' color='#A17337'>
        Who We Are
    </Typography>
      <Box display='flex' flexDirection='row' gap={{xs:'1rem',sm:'1rem',md:'2rem',lg:'1.3rem',xl:'9rem'}}>
        
        <Box >
            
            <Typography lineHeight='60.94px' fontSize={{xs:'16px',sm:'22px',md:'30px',lg:'48px'}} fontWeight={700} color='#1A1A1A'>
                Your Long-Term<br/>Mining Partner
            </Typography>
        </Box>
        <Box >
            <Typography fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={400} color='#2E2E2E'>
              We are Joint Operation Partners with the mines, assets we
              have acquired and associated<br/>within the Kalimantan region
              of Indonesia for our coal mining and exploration avenues
              as an<br/>investor and in operations of mining activities by
              providing our team of geologists,<br/>contractors, operators,
              partners, collaborators on mining and providing
              equipment, for<br/>hauling, jetty, barges and other activities.
              We supply the coal on FOB and CFR/CIF terms and<br/>also
              stand for the enforcing law of ICC – International Chamber
              of Commerce.
            </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default AboutSecondSection
