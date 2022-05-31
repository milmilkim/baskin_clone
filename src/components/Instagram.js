import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import title from '../assets/img/tit_sns.png';

const InstagramContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  position: relative;

  .title {
    width: 100%;
    text-align: center;

    &::before {
      position: absolute;
      top: 7px;
      left: 0;
      display: inline-block;
      text-align: center;
      content: '';
      width: 100%;
      height: 1px;
      background: #dcd7d1;
    }

    a {
      position: relative;
      width: 298px;
      z-index: 9;
    }
  }

  .instagram__wrapper {
    margin-top: 50px;
    margin-bottom: 200px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 20%;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }

      .inner {
        position: relative;
        width: 100%;
        height: 100%;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding: 1.5px;
        }
      }
    }
  }
`;

const Instagram = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('./json/instagram.json');
        setData(() => res.data.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <InstagramContainer>
      <div className="title">
        <a href="https://www.instagram.com/baskinrobbinskorea/" target="_blank" rel="noreferrer">
          <img src={title} alt="instagram" />
        </a>
      </div>
      <div className="instagram__wrapper">
        {data.map(({ id, url }) => (
          <div className="item" key={id}>
            <div className="inner">
              <img src={url} alt={'post' + { id }} />
            </div>
          </div>
        ))}
      </div>
    </InstagramContainer>
  );
};

export default Instagram;
