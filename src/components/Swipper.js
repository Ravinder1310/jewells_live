import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipper() {
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
        className="mySwiper1"
      >
        <SwiperSlide><img src="/images/catBannerSlider.gif" /></SwiperSlide>
        <SwiperSlide><img src="/images/catBannerSlider2.gif" /></SwiperSlide>
        <SwiperSlide><img src="/images/catBannerSlider3.gif" /></SwiperSlide>
      </Swiper>
    </>
  );
}
