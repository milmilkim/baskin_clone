import styled from 'styled-components';
import banner from '../assets/img/1714824579.jpg';
const TopBannerContainer = styled.div`
  background: #ffd825 url(${banner}) 50% 0 no-repeat;
  height: 150px;
  margin-bottom: 3px;
`;

const TopBanner = () => {
  return <TopBannerContainer />;
};

export default TopBanner;
