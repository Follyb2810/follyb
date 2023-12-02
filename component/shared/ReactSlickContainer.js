'use client'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReactSlickContainer = ({children}) => {
    let settings = {
      // dots: true,
      // infinite: true,
      // slidesToShow: 2,
      // slidesToScroll: 1,
      // autoplay: true,
      // speed: 1000,
      // autoplaySpeed: 1000,
      // cssEase: "linear"
        dots: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        centerPadding: "60px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
        ]
      };
    return (
        
        <Slider {...settings}>
         {children}
      </Slider>
        
    )
}

export default ReactSlickContainer
