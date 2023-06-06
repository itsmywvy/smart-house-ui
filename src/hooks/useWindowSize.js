import React, { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// function onWindowSizeChange(onChange: () => void) {
//   window.addEventListener('resize', onChange);

//   return () => window.removeEventListener('resize', onChange);
// }

// const getWindowWidthSnapshot = () => window.innerWidth;

// function useWindowSize({ widthSelector, heightSelector }) {
//   const windowWidth = React.useSyncExternalStore(onWindowSizeChange, getWindowWidthSnapshot);

//   return windowWidth;
// }

export default useWindowSize;
