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
            <Box height='7rem'>

            </Box>
        </Box>
        <Box bgcolor='#A17337' paddingY={{xs:'25px', sm:'30px',md:'150px'}} display='flex' flexDirection='column' gap='1rem'>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={400} color='#E5E5E5' lineHeight='20px'>
                AP Minerals is one of the very few coal companies that are quality conscious and thus, deliver only quality coal complying to
                international standards. Our excellent process and commitment to
                meet our clients' expectations by rendering finest products is
                responsible for our unparalleled growth in the last few years.
            </Typography>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={400} color='#E5E5E5' lineHeight='20px'>
                Our professionals adhere to strict quality
                standards and carry out careful testing of
                the products on various parameters prior to
                the final dispatching process. The sampling
                and analysis we appoint are well qualified
                representatives of inspection agencies as per international standards at stockpile,
                jetty and load ports. This way it
                accommodates us in maintaining the quality
                of the coal to meet and as per the desired
                needs and specifications of our clients.
                Since our client satisfaction is our success
                mantra; we leave no stone unturned in
                ensuring that all the goods supplied by us
                fall under the highest quality range.
            </Typography>
            <Typography paddingX={{xs:'25px', sm:'30px',md:'50px'}} fontSize={{xs:'12px',sm:'12px',md:'14px',lg:'14px'}} fontWeight={400} color='#E5E5E5' lineHeight='20px'>
                We mine and process the products under strict examination and scrutiny
                by our team of experts. Our quality coal products have been highly
                appreciated by the clients for its minimal ash content, great carbon
                content and user specified calorific value.
            </Typography>
        </Box>  
      </Box>
    </>
  )
}

export default OperationsFifthSection