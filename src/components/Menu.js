import styled from 'styled-components';
import gnbMenu from '../assets/img/gnb_menu.png';
import happyPoint from '../assets/img/img_happypoint_app.jpg';
import monthly from '../assets/img/img_monthly_fom_220429.png';
import { useCallback, useState } from 'react';

const MenuContainer = styled.nav`
  height: 46px;
  border-top: 1px solid #e2d9d6;
  .menu__inner {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .gnb_bg {
      overflow: hidden;
      position: absolute;
      top: 185px;
      max-height: 0;
      left: 0;
      height: 275px;
      z-index: 99;
      min-width: 100%;
      background-color: #fff;
      transition: all 500ms ease;
      border-bottom: 1px solid #3f291a;

      &.open {
        max-height: 275px;
        border-top: 1px solid #3f291a;
      }

      div {
        max-width: 1200px;
        height: 204px;
        margin: 0 auto;
        background: url(${happyPoint}) no-repeat 0 65px;
      }
    }

    ul li {
      float: left;
      line-height: 46px;
    }

    .member {
      float: left;

      span {
        display: block;
        height: 46px;
        background: url(${gnbMenu}) no-repeat;
        text-indent: -9999em;
      }

      .login {
        padding-right: 40px;
        span {
          width: 35px;
          background-position: 0px -1px;
          cursor: pointer;
        }
      }

      .join span {
        width: 27px;
        background-position: -97px -1px;
        cursor: pointer;
      }
    }

    .gnb {
      float: right;
      z-index: 1000;
      position: relative;

      &.open .gnb_sub {
        height: auto;
        span {
          opacity: 1;
        }
        img {
          display: block;
          animation: fadeIn 500ms ease 300ms;
          animation-fill-mode: forwards;
        }
      }

      .gnb_main span {
        display: block;
        font-size: 11px;
        background: url(${gnbMenu}) no-repeat;
        line-height: 46px;
        height: 46px;
        text-indent: -9999em;
        cursor: pointer;
      }

      .gnb_flavor span {
        background-position: -133px -3px;
        width: 164px;
        margin: 0 60px;
      }

      .gnb_menu .gnb_main span {
        width: 42px;
        background-position: -415px -3px;
        margin: 0 60px;
      }

      .gnb_nutrition .gnb_main span {
        width: 105px;
        background-position: -545px -3px;
        margin: 0 28px;
      }

      .gnb_event .gnb_main span {
        width: 42px;
        background-position: -737px -3px;
        margin: 0 60px;
      }

      .gnb_store .gnb_main span {
        width: 49px;
        background-position: -897px -3px;
        margin: 0 60px;
      }

      .gnb_about {
        .gnb_main span {
          width: 49px;
          background-position: -1057px -3px;
          margin-left: 60px;
        }

        .gnb_sub {
          margin-left: 50px;
        }
      }
    }

    .gnb_sub {
      font-size: 14px;
      overflow: hidden;
      height: 0px;

      li {
        float: none;

        &:first-child {
          margin-top: 30px;
        }
      }
      span {
        display: block;
        text-align: center;
        color: #948780;
        cursor: pointer;
        z-index: 100 !important;
        opacity: 0;
        transition: all 400ms ease-in;
        &:hover {
          color: #ff75ac;
        }
      }

      img {
        display: none;
        opacity: 0;
      }
    }
  }
`;
const Menu = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleOpacity = useCallback(() => {
    setIsMouseOver((value) => !value);
  }, []);

  return (
    <MenuContainer>
      <div className="menu__inner">
        <nav className="member">
          <ul>
            <li className="login">
              <span>LOGIN</span>
            </li>
            <li className="join">
              <span>JOIN</span>
            </li>
          </ul>
        </nav>

        <nav className={`gnb ${isMouseOver ? 'open' : ''}`}>
          <div className="gnb_wrap" onMouseOver={handleOpacity} onMouseOut={handleOpacity}>
            <ul>
              <li className="gnb_depth1"></li>

              <li className="gnb_depth1 gnb_flavor">
                <div className="gnb_main">
                  <span>FLAVOR OF THE MONTH</span>
                </div>
                <div className="gnb_sub">
                  <img src={monthly} alt="이달의 맛" style={{ marginLeft: '40px', cursor: 'pointer' }} />
                </div>
              </li>

              <li className="gnb_depth1 gnb_menu">
                <div className="gnb_main">
                  <span>MENU</span>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <span>아이스크림</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>아이스크림케이크</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>음료</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>커피</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>디저트</span>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_nutrition">
                <div className="gnb_main">
                  <span>영양성분 및 알레르기</span>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <span>아이스크림</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>음료</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>커피</span>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_event">
                <div className="gnb_main">
                  <span>EVENT</span>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <span>진행중이벤트</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>당첨자발표</span>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_store">
                <div className="gnb_main">
                  <span>STORE</span>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <span>매장찾기</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>고객센터</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>단체주문</span>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_about">
                <div className="gnb_main">
                  <span>ABOUT</span>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <span>공지사항</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>보도자료</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>채용정보</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>점포개설문의</span>
                  </li>
                  <li className="gnb_depth2">
                    <span>Contact Us</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`gnb_bg ${isMouseOver ? 'open' : ''}`}>
          <div></div>
        </div>
      </div>
    </MenuContainer>
  );
};

export default Menu;
