import React from "react";
import styled from "styled-components";
import SNS from "./SNS";
import StoreItem from "./StoreItem";

import storeTit from "../assets/img/h_store.png";
import happyOrderTit from "../assets/img/h_happyorder_delivery.png";
import store from "../assets/img/img_store.jpg";
import happyOrder from "../assets/img/img_happyorder_delivery.png";
import snsTit from "../assets/img/h_sns.png";

const StoreContainer = styled.section`
  .inner {
    position: relative;
    width: 1200px;
    padding-top: 21px;
    padding-bottom: 35px;
    margin: 0 auto;

    & > article {
      display: inline-block;
      width: 600px;

      h3.sec-title {
        padding: 50px 0;
        text-align: center;
      }
    }

    & > article.sns {
      width: 100%;
      text-align: center;
      margin-bottom: 35px;

      h3 {
        margin-top: 120px;
        padding-bottom: 26px;
      }

      ul {
        width: 400px;
        height: 40px;
        margin: 0 auto;

        &::after {
          display: block;
          content: "";
          float: none;
          clear: both;
        }

        li {
          padding: 9px;
        }
      }
    }
  }
`;

const Store = () => {
  return (
    <StoreContainer>
      <div className="inner">
        <StoreItem
          classname="sec-title"
          titleimg={storeTit}
          titlealt="매장"
          contimg={store}
          contalt="주변매장찾기"
        />
        <StoreItem
          classname="sec-title"
          titleimg={happyOrderTit}
          titlealt="해피오더"
          contimg={happyOrder}
          contalt="모바일주문배달"
        />
        <StoreItem articlename="sns" titleimg={snsTit} titlealt="sns">
          <SNS size="big" />
        </StoreItem>
      </div>
    </StoreContainer>
  );
};

export default Store;
