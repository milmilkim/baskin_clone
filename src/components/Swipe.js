import styled, { css } from 'styled-components';

import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import axios from 'axios';

import { useState, useEffect } from 'react';

import arrow from '../assets/img/btn_banner_prev.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)`
  position: relative;
  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    text-indent: -999em;
    background: #fff;
    transition: background 300ms ease;
    margin-right: 20px;

    &.swiper-pagination-bullet-active,
    &:hover {
      background: #000;
      width: 14px;
      height: 14px;
      margin-right: 16px;
      transform: translateY(-4px);
    }
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  margin: -54px 20px;
  background: url(${arrow});
  width: 109px;
  height: 109px;
  text-indent: -99em;
  cursor: pointer;
  ${(props) =>
    props.direction === 'next' &&
    css`
      right: 0px;
      transform: rotate(180deg);
    `}
`;
const Swipe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/json/banners.json');
        setData(() => res.data.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <StyledSwiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
      }}
      pagination={{
        clickable: true,
        bulletClass: 'bullet',
        renderBullet: (index, className) => '<span class="' + className + '">' + (index + 1) + '</span>',
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {data.map(({ id, url, backgroundColor }, index) => (
        <SwiperSlide key={id} style={{ backgroundColor, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
          <img src={url} alt={`banner+${id}`} />
        </SwiperSlide>
      ))}
      <NavigationButton direction="prev" className="prev">
        이전버튼
      </NavigationButton>
      <NavigationButton direction="next" className="next">
        다음버튼
      </NavigationButton>
    </StyledSwiper>
  );
};

export default Swipe;
