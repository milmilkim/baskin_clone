import styled from 'styled-components';

import icon_facebook from '../assets/img/icon_facebook.png';
import icon_twitter from '../assets/img/icon_twitter.png';
import icon_blog from '../assets/img/icon_blog.png';
import icon_youtube from '../assets/img/icon_youtube.png';
import icon_instagram from '../assets/img/icon_instgram.png';

import sns_facebook from '../assets/img/sns_facebook.png';
import sns_twitter from '../assets/img/sns_twitter.png';
import sns_blog from '../assets/img/sns_blog.png';
import sns_youtube from '../assets/img/sns_youtube.png';
import sns_instagram from '../assets/img/sns_instagram.png';

const SNSContainer = styled.nav`
  ul li {
    float: left;
    padding-right: 10px;
  }
`;

const SNS = ({ style, size }) => {
  const images = {
    facebook: {
      small: icon_facebook,
      big: sns_facebook,
    },
    twitter: {
      small: icon_twitter,
      big: sns_twitter,
    },
    youtube: {
      small: icon_youtube,
      big: sns_youtube,
    },
    blog: {
      small: icon_blog,
      big: sns_blog,
    },
    instagram: {
      small: icon_instagram,
      big: sns_instagram,
    },
  };
  return (
    <SNSContainer style={style} size={size}>
      <ul>
        <li>
          <a href="https://www.facebook.com/baskinrobbins.kr/" rel="noreferrer" target="_blank">
            <img src={images['facebook'][size]} alt="FACEBOOK" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/BaskinrobbinsKR" rel="noreferrer" target="_blank">
            <img src={images['twitter'][size]} alt="TWITTER" />
          </a>
        </li>
        <li>
          <a href="http://blog.naver.com/brgirl31" rel="noreferrer" target="_blank">
            <img src={images['blog'][size]} alt="BLOG" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/baskinrobbinskorea/" rel="noreferrer" target="_blank">
            <img src={images['instagram'][size]} alt="INSTAGRAM" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/baskinrobbinskorea" rel="noreferrer" target="_blank">
            <img src={images['youtube'][size]} alt="YOUTUBE" />
          </a>
        </li>
      </ul>
    </SNSContainer>
  );
};

SNS.defaultProps = {
  size: 'small',
};
export default SNS;
