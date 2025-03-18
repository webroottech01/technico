import { useEffect, useState } from 'react';

const CheckOs = () => {
  const [os, setOS] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Mac OS') !== -1) {
      setOS('mac');
    } else if (userAgent.indexOf('Windows') !== -1) {
      setOS('windows');
    } else {
      setOS('other');
    }
  }, []);

  return os;
};

export default CheckOs; 