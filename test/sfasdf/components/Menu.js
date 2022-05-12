import styled from 'styled-components';

const MenuContainer = styled.nav``;
const Menu = () => {
  return (
    <MenuContainer>
      <div className="inner">
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

        <nav id="gnb">
          <div className="gnb_wrap">
            <ul>
              <li className="gnb_depth1"></li>

              <li className="gnb_depth1 gnb_flavor">
                <div className="gnb_main">
                  <span>FLAVOR OF THE MONTH</span>
                </div>
                <div className="gnb_sub"></div>
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
                    <a href="/menu/nutrition_new.php?top=C">
                      <span>음료</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/menu/nutrition_new.php?top=D">
                      <span>커피</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_event">
                <div className="gnb_main">
                  <a href="/event/list.php">
                    <span>EVENT</span>
                  </a>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <a href="/event/list.php">
                      <span>진행중이벤트</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/event/winner.php">
                      <span>당첨자발표</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_store">
                <div className="gnb_main">
                  <a href="/store/map.php">
                    <span>STORE</span>
                  </a>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <a href="/store/map.php">
                      <span>매장찾기</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/customer/ccm.php">
                      <span>고객센터</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/store/catering2.php">
                      <span>단체주문</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="gnb_depth1 gnb_about">
                <div className="gnb_main">
                  <a href="/about/notice_list.php">
                    <span>ABOUT</span>
                  </a>
                </div>
                <ul className="gnb_sub">
                  <li className="gnb_depth2">
                    <a href="/about/notice_list.php">
                      <span>공지사항</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/about/press_list.php">
                      <span>보도자료</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/about/jobs.php">
                      <span>채용정보</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/about/br_system.php">
                      <span>점포개설문의</span>
                    </a>
                  </li>
                  <li className="gnb_depth2">
                    <a href="/about/contact_us.php">
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="gnb_bg">
            <div></div>
          </div>
        </nav>
      </div>
    </MenuContainer>
  );
};

export default Menu;
