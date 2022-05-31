import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import EventItem from './EventItem';

import eventTit from '../assets/img/h_event.png';

import 'swiper/css';

const EventContainer = styled.section`
  .inner {
    width: 1200px;
    margin: 0 auto;
    padding: 70px 30px;

    h3 {
      text-align: center;
      padding-bottom: 50px;
    }
  }

  .event-container {
    li {
      /* display: flex; */
      text-align: left;
      height: 500px;
    }

    .thumbnail {
      margin-bottom: 20px;
    }

    .category {
      margin-bottom: 5px;
    }

    p {
      font-size: 17px;
    }

    p.etc {
      margin: 15px 0 11px;
      font-size: 13px;
      color: #948780;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    vertical-align: middle;
    margin: 0 15px !important;
    &:hover {
      transition: all 0.1s;
      background: #301d17;
      transform: scale(1.3);
    }
  }

  .swiper-pagination-bullet-active {
    width: 8px;
    height: 8px;
    background-color: #301d17;
    &:hover {
      transition: none;
      transform: none;
    }
  }
`;

const Event = () => {
  /** 이벤트 리스트 가져오기 */
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('./json/event.json');
        setEventList(res.data.event);
      } catch (e) {
        alert('Ajax 연동 실패');
      }
    })();
  }, []);

  return (
    <EventContainer>
      <div className="inner">
        <h3>
          <img src={eventTit} alt="이벤트" />
        </h3>
        <div className="event-container">
          <StyledSwiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {eventList.map((v, i) => {
              let count = 1;
              return (
                <SwiperSlide>
                  <EventItem key={i} thumbnail={v.thumbnail} alt1={v.alt1} category={v.category} alt2={v.alt2} etc={v.etc}>
                    {v.title}
                  </EventItem>
                </SwiperSlide>
              );
            })}
          </StyledSwiper>
        </div>
      </div>
    </EventContainer>
  );
};

export default Event;
