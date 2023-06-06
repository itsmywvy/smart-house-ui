import React from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 1000);
    return () => clearTimeout(timer);
  });

  return debouncedValue;
}
