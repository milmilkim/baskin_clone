import React, { useCallback, useState } from "react";
import styled from "styled-components";

const SiteListContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const SiteList = ({ visible }) => {
  const [sites] = useState([
    {
      name: "배스킨스쿨",
      url: "https://baskinschool.hunet.co.kr/Login/LoginGate",
    },
    {
      name: "SPC그룹사이트",
      url: "https://www.spc.co.kr/",
    },
    {
      name: "SPC MAGAZINE",
      url: "https://www.spcmagazine.com/",
    },
    {
      name: "BR코리아",
      url: "http://www.brkorea.co.kr/main/main.php",
    },
    {
      name: "해피포인트카드",
      url: "https://www.happypointcard.com/page/main/index.spc",
    },
    {
      name: "파스쿠찌",
      url: "https://www.caffe-pascucci.co.kr/index.asp",
    },
    {
      name: "삼립",
      url: "https://spcsamlip.co.kr/",
    },
    {
      name: "파리바게트",
      url: "https://www.paris.co.kr/",
    },
    {
      name: "던킨도너츠",
      url: "http://www.dunkindonuts.co.kr/",
    },
  ]);

  return (
    <SiteListContainer isVisible={visible} className="btn-siteList">
      <ul className="sites">
        {sites.map((v, i) => {
          return (
            <li key={i}>
              <a href={v.url}>{v.name}</a>
            </li>
          );
        })}
      </ul>
    </SiteListContainer>
  );
};

export default SiteList;
