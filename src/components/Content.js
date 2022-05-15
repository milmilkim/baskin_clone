import React from 'react';
import TopBanner from './TopBanner';
import Swipe from './Swipe';
import Store from './Store';
import Instagram from './Instagram';
import BrMenu from './BrMenu';

function Content() {
  return (
    <div style={{ marginTop: '6px' }}>
      <TopBanner />
      <Swipe />
      <BrMenu />
      <Store />
      <Instagram />
    </div>
  );
}

export default Content;
