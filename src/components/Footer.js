import React, { useState } from "react";
import styled from "styled-components";
const FooterContainer = styled.footer``;

function Footer() {
  const [list] = useState([
    {
      name: "점포개설문의",
      url: "",
    },
    {
      name: "채용문의",
      url: "",
    },
    {
      name: "윤리신고센터",
      url: "",
    },
    {
      name: "이용약관",
      url: "",
    },
    {
      name: "개인정보처리방침",
      url: "",
    },
    {
      name: "영상정보처리기기운영관리방침",
      url: "",
    },
    {
      name: "거래희망회사 사전등록",
      url: "",
    },
  ]);
  return (
    <FooterContainer>
      <div className="inner">
        <ul className="">
          {list.map((v) => {
            return (
              <li>
                <a href={v.url}>{v.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </FooterContainer>
  );
}

export default Footer;
