import React from 'react'
import { Box, Typography } from '@mui/material'
import { operationsixthBg } from '../assets'

const OperationsFifthSection = () => {
  return (
    <>
      <Box
        display='flex' flexDirection='row' justifyContent='center'
      >
        <Box sx={{ backgroundImage:`url(${operationsixthBg})`, backgroundSize:'cover', backgroundPosition:'center'}} paddingY={{xs:'25px', sm:'30px',md:'100px'}} display='flex' flexDirection='column' justifyContent='flex-start'>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'20px',sm:'22px',md:'72px',lg:'80px'}} fontWeight={700} textAlign='center' color='#A17337' lineHeight='94px'>
                QUALITY
            </Typography>
            <Box height='10rem'>

            </Box>
        </Box>
        <Box bgcolor='#A17337' paddingY={{xs:'25px', sm:'30px',md:'150px'}} display='flex' flexDirection='column' gap='1rem'>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'20px',sm:'22px',md:'18px'}} fontWeight={400} color='#E5E5E5' lineHeight='28px'>
                AP Minerals is one of the very few coal companies that are quality conscious and thus,<br/>deliver only quality coal complying to
                international standards. Our excellent process and<br/>commitment to
                meet our clients' expectations by rendering finest products is
                responsible<br/>for our unparalleled growth in the last few years.
            </Typography>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'20px',sm:'22px',md:'18px'}} fontWeight={400} color='#E5E5E5' lineHeight='28px'>
                Our professionals adhere to strict quality
                standards and carry out careful testing of
                the<br/>products on various parameters prior to
                the final dispatching process. The sampling
                and<br/>analysis we appoint are well qualified
                representatives of inspection agencies as per<br/>international standards at stockpile,
                jetty and load ports. This way it
                accommodates us in<br/>maintaining the quality
                of the coal to meet and as per the desired
                needs and specifications<br/>of our clients.
                Since our client satisfaction is our success
                mantra; we leave no stone<br/>unturned in
                ensuring that all the goods supplied by us
                fall under the highest quality range.
            </Typography>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'20px',sm:'22px',md:'18px'}} fontWeight={400} color='#E5E5E5' lineHeight='28px'>
                We mine and process the products under strict examination and scrutiny
                by our team of<br/>experts. Our quality coal products have been highly
                appreciated by the clients for its<br/>minimal ash content, great carbon
                content and user specified calorific value.
            </Typography>
        </Box>  
      </Box>
    </>
  )
}

export default OperationsFifthSection