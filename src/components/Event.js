import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import EventItem from "./EventItem";

import eventTit from "../assets/img/h_event.png";
import online from "../assets/img/stit_online.gif";
import store from "../assets/img/stit_store.gif";
import happyorder from "../assets/img/banner_delivery.png";
import deliveryBm from "../assets/img/banner_delivery_bm.png";
import deliveryYgy from "../assets/img/banner_delivery_ygy.png";
import deliveryKakao from "../assets/img/banner_delivery_kakao.png";
import event1 from "../assets/img/1670146074.png";
import event2 from "../assets/img/1667538956.png";
import event3 from "../assets/img/1659436130.png";
import event4 from "../assets/img/1643869329.png";
import event5 from "../assets/img/1667382917.png";
import event6 from "../assets/img/1639297260.png";
import event7 from "../assets/img/1570702843.png";
import event8 from "../assets/img/1578277305.png";
import event9 from "../assets/img/banner_praise_2022-1.png";

const EventContainer = styled.section`
  .inner {
    width: 1200px;
    margin: 0 auto;
    padding: 70px 0 50px;
  }

  h3 {
    text-align: center;
  }
`;

const Event = () => {
  // const [EventList] = useState([
  //   {
  //     thumbnail: happyorder,
  //     alt: "해피오더",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "해피오더 딜리버리로 간편하게 주문하세요!",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: deliveryBm,
  //     alt: "배달의민족 주문",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "배달의 민족에서 빠르게 주문하세요!",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: deliveryYgy,
  //     alt: "요기요 주문",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "요기요에서 손쉽게 주문하세요!",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: deliveryKakao,
  //     alt: "카카오톡 주문",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "카카오톡 주문하기에서 편리하게 주문하세요!",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event1,
  //     alt: "기아멤버스 제휴",
  //     category: online,
  //     alt2: "온라인 이벤트",
  //     title: "기아 멤버스 최대 50% 제휴 혜택",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event2,
  //     alt: "특별 제휴",
  //     category: online,
  //     alt2: "온라인 이벤트",
  //     title: "2022 배스킨라빈스 특별한 제휴혜택",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event3,
  //     alt: "콜드브루 오트라떼",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "고소한 오트밀크와 깔끔한 콜드브루의 만남, 콜드브루 오트라떼 출시!",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event4,
  //     alt: "KT 파인트 할인",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "KT 멤버십 고객이라면 누구나 파인트 30% 할인!",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event5,
  //     alt: "M포인트",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "현대카드 M포인트 50% 사용",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event6,
  //     alt: "제휴할인카드 안내",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "제휴 할인 카드 혜택 안내",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event7,
  //     alt: "2018 한글날 기념 글꼴",
  //     category: online,
  //     alt2: "온라인 이벤트",
  //     title: "2018 한글날 기념 무료 글꼴 공개! 배스킨라빈스체",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event8,
  //     alt: "텀블러 사용 시 할인",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "1회용 컵 사용 줄이기 안내",
  //     etc: "상시진행",
  //   },
  //   {
  //     thumbnail: event9,
  //     alt: "Best 점포",
  //     category: store,
  //     alt2: "스토어 이벤트",
  //     title: "2022년 1분기 고객 BEST 칭찬점포 안내",
  //   },
  // ]);
  const [eventList, setEventList] = useState([]);

  // 페이지 로딩 직후 리스트 생성
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/json/eventList.json");
        console.log(res.data);
        setEventList(res.data);
      } catch (e) {
        alert("Ajax 연동 실패");
      }
    })();
  }, []);

  return (
    <EventContainer>
      <div className="inner">
        <h3>
          <img src={eventTit} />
        </h3>
        <div className="event-container">
          {eventList.map((v, i) => {
            console.log("hello");
            return (
              <EventItem
                key={i}
                thumbnail={v.thumbnail}
                alt1={v.alt1}
                category={v.category}
                alt2={v.alt2}
                etc={v.etc}
              >
                {v.title}
              </EventItem>
            );
          })}

          {/* <EventItem thumbnail="" alt1="" category="" alt2="" etc=""></EventItem> */}
        </div>
      </div>
    </EventContainer>
  );
};

export default Event;
