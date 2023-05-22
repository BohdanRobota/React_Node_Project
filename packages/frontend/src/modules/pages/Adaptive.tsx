import React from 'react';
import { useMatchMedia } from '../common/hooks/useMatchMedia';

const Adaptive = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {isMobile && <h2>Hello from mobile</h2>}
      {isTablet && <h2>Hello from tablet</h2>}
      {isDesktop && <h2>Hello from desktop</h2>}
    </div>
  );
};

export default Adaptive;
