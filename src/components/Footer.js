import React, { useState } from "react";
import styled, { css } from "styled-components";

import SiteList from "./SiteList";

import ccm from "../assets/img/footer/btn_ccm_2.png";
import happymarket from "../assets/img/footer/btn_happymarket.png";
import happypoint from "../assets/img/footer/btn_happypoint.png";
import ksa from "../assets/img/footer/btn_ksa.png";
import norton from "../assets/img/footer/btn_norton.gif";
import spc_story from "../assets/img/footer/btn_spc_story.png";
import drop_down from "../assets/img/footer/family_size_off.png";
import footer_logo from "../assets/img/footer/footer_logo.png";

const mixinBtn = css`
  width: 150px;
  border: 1px solid #d1cecc;
  text-align: left;
  a {
    display: block;
    padding-left: 11px;
    color: inherit;
  }
`;

const FooterContainer = styled.footer`
  border-top: 1px solid #feaf2b;
  padding: 15px;

  .inner {
    position: relative;
    width: 1200px;
    padding-top: 21px;
    padding-bottom: 35px;
    margin: 0 auto;

    & * {
      margin: 0 auto;
    }

    ul.footer-nav {
      width: 1000px;
      font-size: 14px;
      align-items: center;

      a {
        color: #726454;
      }

      li.highlight a {
        font-weight: bold;
        color: #ff7c98;
      }
    }

    div.footer-title {
      text-align: center;
      margin: 25px 0 35px;
    }

    address {
      font-size: 11px;
      color: #635b56;

      .text-box {
        text-align: center;
      }

      p {
        display: inline-block;
        padding-right: 15px;
        padding-bottom: 7px;

        &:last-of-type {
          padding-right: 0;
        }
      }
    }

    .copyright {
      padding: 12px 0 20px;
      font-size: 11px;
      text-align: center;
      color: #b1adab;
    }
  }

  .family-site {
    width: 100%;
    background-color: #f9f8f7;

    .inner {
      padding: 20px 0;
    }

    ul.logos {
      width: 750px;
      & > li:nth-of-type(4),
      & > li:nth-of-type(5),
      & > li:nth-of-type(6) {
        margin: 0 5px;
      }
      & > li:last-of-type {
        margin-left: 70px;
      }

      .logo {
        max-height: 31px;
      }

      button {
        ${mixinBtn};
        height: 32px;
        background: #fff url(${drop_down}) no-repeat 100%;
        border-radius: 5px;
        font-size: 11px;
        color: #b1ab9f;
        line-height: 2;
        box-shadow: 2px 2px 2px 0px #635b5610;
        position: relative;
      }

      .btn-siteList {
        ${mixinBtn};
        padding: 5px 0;
        background: #fff;
        border-radius: 5px 5px 0 0;
        font-size: 13px;
        color: #726454;
        line-height: 2;
        position: absolute;
        z-index: 100;
        bottom: 50px;
        li:hover {
          background-color: #efefef;
        }
      }
    }
  }
`;

function Footer() {
  // 하단 메뉴 리스트
  const [footerMenu] = useState([
    {
      name: "점포개설문의",
      url: "http://www.baskinrobbins.co.kr/about/br_system.php",
    },
    {
      name: "채용문의",
      url: "http://www.baskinrobbins.co.kr/about/jobs.php",
    },
    {
      name: "윤리신고센터",
      url: "https://www.spc.co.kr/share/right-mng/spc-operation/",
    },
    {
      name: "이용약관",
      url: "https://www.happypointcard.com/page/customer/term.spc",
    },
    {
      name: "개인정보처리방침",
      url: "http://www.baskinrobbins.co.kr/customer/policy.php",
    },
    {
      name: "영상정보처리기기운영관리방침",
      url: "http://www.baskinrobbins.co.kr/customer/policy_cctv.php",
    },
    {
      name: "거래희망회사 사전등록",
      url: "http://happy.spc.co.kr/indexframe.jsp",
    },
  ]);

  // 패밀리 사이트 리스트
  const [familySite] = useState([
    {
      logo: happypoint,
      url: "https://www.happypointcard.com/page/main/index.spc",
      alt: "해피포인트",
    },
    {
      logo: happymarket,
      url: "http://m.celectory.com/mobile/gift/recommend;jsessionid=b1u3EyZlWUboVCDk3Tp4wwXRsdcP3X27IXnlwT9C-oCizT08xoti!1679465537!-991451080?",
      alt: "해피마켓",
    },
    {
      logo: spc_story,
      url: "http://www.spc.co.kr/contributionAll",
      alt: "SPC스토리",
    },
    {
      logo: norton,
      url: "https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=WWW.BASKINROBBINS.CO.KR&lang=ko",
      alt: "노튼",
    },
    {
      logo: ccm,
      url: "https://www.kca.go.kr/ccm/",
      alt: "소비자중심경영인증",
    },
    {
      logo: ksa,
      url: "https://knqa.ksa.or.kr/knqa/2276/subview.do",
      alt: "품질경쟁력우수기업",
    },
  ]);

  const [menuOn, setMenuOn] = useState(false);
  const onDropDown = () => {
    setMenuOn(!menuOn);
  };

  return (
    <FooterContainer>
      <div className="inner">
        {/* 하단 메뉴 */}
        <ul className="footer-nav flex-row">
          {footerMenu.map((v, i) => {
            return (
              <li key={i} className={v.name === "개인정보처리방침" ? "highlight" : ""}>
                <a href={v.url}>{v.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 패밀리 사이트 */}
      <div className="family-site">
        <div className="inner">
          <ul className="logos flex-row">
            {familySite.map((v, i) => {
              return (
                <li key={i}>
                  <a href={v.url} target="_blank" rel="noreferrer">
                    <img src={v.logo} alt={v.alt} className="logo" />
                  </a>
                </li>
              );
            })}
            <li>
              <button onClick={onDropDown}>FAMILY SITE</button>
              <SiteList visible={menuOn} />
            </li>
          </ul>
        </div>
      </div>

      <div className="inner">
        {/* BR logo */}
        <div className="footer-title">
          <img src={footer_logo} alt="배스킨라빈스 타이틀" />
        </div>

        {/* address */}
        <address>
          <div className="text-box">
            <p>사업자 등록번호 : 303-81-09535</p>
            <p>비알코리아(주) 대표이사 도세호</p>
            <p>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</p>
          </div>
          <div className="text-box">
            <p>TEL : 080-555-3131</p>
            <p>개인정보관리책임자 : 김경우</p>
          </div>
        </address>

        {/* copyright */}
        <div className="copyright">
          <p>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
