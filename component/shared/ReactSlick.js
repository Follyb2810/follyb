import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ReactSlick({children}){
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      //!first
      // dots: true,
      // initialSlide: 0,
      // infinite: true,
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // autoplay: true,
      // speed: 5000,
      // autoplaySpeed: 2000,
      // cssEase: "linear",
      // pauseOnHover: true,
      // centerPadding: "60px",
      // rtl: true,
      //!second
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   rtl: true
    // !fisrt
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
    };
    return (
      
        <Slider {...settings}>
        {children}
        </Slider>
    );
  
}