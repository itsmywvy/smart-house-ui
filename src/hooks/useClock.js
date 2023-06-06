import React from 'react';

export default function useClock() {
  const [time, setTime] = React.useState(null);

  React.useLayoutEffect(() => {
    let timer = setInterval(() => {
      setTime(
        new Date()
          .toLocaleString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            hourCycle: 'h12',
          })
          .toLowerCase(),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return [time];
}
