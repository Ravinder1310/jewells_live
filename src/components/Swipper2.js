import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./style2.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipper2() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/userModel.png" /></SwiperSlide>
        <SwiperSlide><img src="/images/userModel2.gif" /></SwiperSlide>
        <SwiperSlide><img src="/images/userModel3.png" /></SwiperSlide>
        <SwiperSlide><img src="/images/userModel4.png" /></SwiperSlide>
      </Swiper>
    </>
  );
}
