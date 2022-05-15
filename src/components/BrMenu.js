import styled from 'styled-components';

import bgMenu from '../assets/img/bg_menu.jpg';
import menu from '../assets/img/h_menu.png';
import menuList from '../assets/img/img_menu_list_220429.png';

const BrMenuContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 1157px;
  background: url(${bgMenu}) 50% 0 no-repeat;

  .title {
    text-align: center;
    padding-top: 78px;
  }

  .menuList {
    height: 1066px;
    width: 1200px;
    margin: auto;
    background: url(${menuList}) 50% 0 no-repeat;
    margin-top: 50px;
    position: relative;

    .item {
      position: absolute;
      cursor: pointer;
      text-indent: -999em;
    }

    .icecream {
      width: 395px;
      height: 302px;
      top: 50px;
      left: 319px;
    }

    .icecreamCake {
      width: 276px;
      height: 472px;
      top: 50px;
      left: 752px;
    }

    .beverage {
      width: 230px;
      height: 366px;
      top: 390px;
      left: 117px;
    }

    .coffee {
      width: 329px;
      height: 292px;
      top: 390px;
      left: 385px;
    }

    .gift {
      width: 276px;
      height: 183px;
      top: 560px;
      left: 752px;
    }

    .dessert {
      width: 329px;
      height: 177px;
      top: 721px;
      left: 385px;
    }
  }
`;

const BrMenu = () => {
  return (
    <BrMenuContainer>
      <div className="title">
        <img src={menu} alt="br menu" />
      </div>

      <div className="menuList">
        <div className="item icecream">
          <h4>ICECREAM</h4>
          <p>프리미엄 아이스크림의 기준, 배스킨라빈스</p>
        </div>
        <div className="item icecreamCake">
          <h4>ICECREAM CAKE</h4>
          <p>아이와 어른이 좋아하는 아이스크림을 하나의 케이크에서 모두 즐기세요!</p>
        </div>
        <div className="item beverage">
          <h4>BAVERAGE</h4>
          <p>아이스크림으로 즐기는 배스킨라빈스만의 음료!</p>
        </div>
        <div className="item coffee">
          <h4>COFFEE</h4>
          <p>배스킨라빈스만의 부드러운 촉감과 달콤한 풍미</p>
        </div>
        <div className="item gift">
          <h4>GIFT</h4>
        </div>
        <div className="item dessert">
          <h4>DESSERT</h4>
          <p>아이스크림을 더욱 재미있게! 간편하게 즐기는 방법!</p>
        </div>
      </div>
    </BrMenuContainer>
  );
};

export default BrMenu;
