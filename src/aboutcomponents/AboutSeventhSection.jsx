import React,{ Component } from 'react'
import { Box,Typography,Button } from '@mui/material'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { sL1,
    sL2,
    sL3,
    sL4,
    sL5,
    sL6,
    sL7,
    sL8,
    sL9 } from '../assets'

import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1386,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
        <Box paddingY={{xs:'25px', sm:'30px',md:'50px'}} paddingLeft={{xs:'5px', sm:'10px',md:'20px'}}>
        <div >
            <Slider {...settings} >
            <div >
                <img src={sL1} alt="" style={{width:'350px'}}/>
            </div>
            <div >
                <img src={sL2} alt="" style={{width:'350px'}}/>
            </div>
            <div >
                <img src={sL3} alt="" style={{width:'350px',marginTop:'90px'}}/>
            </div>
            <div >
                <img src={sL4} alt="" style={{width:'350px',marginTop:'90px'}}/>
            </div>
            <div >
                <img src={sL5} alt="" style={{width:'350px',marginTop:'90px'}}/>
            </div>
            <div >
                <img src={sL6} alt="" style={{width:'350px',marginTop:'90px'}}/>
            </div>
            <div >
                <img src={sL7} alt="" style={{width:'350px'}}/>
            </div>
            <div >
                <img src={sL8} alt="" style={{width:'350px',marginTop:'50px'}}/>
            </div>
            <div >
                <img src={sL9} alt="" style={{width:'350px',marginTop:'90px'}}/>
            </div>
            </Slider>
        </div>
      </Box>
    );
  }
}
