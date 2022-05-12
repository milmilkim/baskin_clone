import React from 'react';
import styled from 'styled-components';
import background from '../assets/img/bg_header.gif';
import logo from '../assets/img/logo_baskinrobbins.png';
import search from '../assets/img/icon_search.png';
import close from '../assets/img/btn_search_close.gif';

import SNS from './SNS';
import Menu from './Menu';
import Search from './Search';

import { useState, useCallback } from 'react';

const HeaderContainer = styled.header`
  border-top: 3px solid #ff7c98;
  position: relative;

  background: url(${background}) 50% 0 repeat-x;
  height: 182px;
  z-index: 90;

  .header__inner {
    position: relative;
    max-width: 1200px;
    height: 135px;
    padding-top: 21px;
    margin: 0 auto;

    h1 {
      width: 92px;
      height: 92px;
      margin: 0 auto;
      background: url(${logo}) no-repeat;
      text-indent: -999em;
    }

    .etc {
      top: 39px;
      position: absolute;
      right: 0;
      line-height: 54px;

      ul li {
        display: inline-block;
        font-size: 11px;
        margin-left: 20px;
        cursor: pointer;
      }

      .search {
        position: relative;
        width: 54px;
        height: 54px;

        text-indent: -9999em;
        z-index: 99999;
        cursor: pointer;

        &.close {
          background: url(${search}) no-repeat;
        }

        &.open {
          background: url(${close}) no-repeat;
        }
      }
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <HeaderContainer>
      <div className="header__inner">
        <h1 className="logo">배스킨라빈스</h1>
        <SNS style={{ position: 'absolute', top: '50px' }} />
        <nav className="etc">
          <ul>
            <li className="customer">고객센터</li>
            <li>CONTACT US</li>
            <li className={`search ${isOpen ? 'open' : 'close'}`} onClick={handleClick}>
              search
            </li>
          </ul>
        </nav>
      </div>
      <Menu />
      {isOpen ? <Search /> : null}
    </HeaderContainer>
  );
}

export default Header;
