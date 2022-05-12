import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styled from 'styled-components';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{ backgroundColor: '#FDD827', display: 'flex', justifyContent: 'center' }}>
        <img src="./swipe/1714824551.jpg" />
      </SwiperSlide>
      <SwiperSlide>안녕</SwiperSlide>
    </Swiper>
  );
};
