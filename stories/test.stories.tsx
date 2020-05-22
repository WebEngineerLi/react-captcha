import React, { useCallback } from 'react';
import Captcha from 'react-captcha-code';

export default { title: 'Basic' };

export const Basic = () => {

  const handleClick = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, [])

  return (
    <Captcha charNum={6} onChange={handleClick} />
  )
}

Basic.story = {
  name: 'Basic',
}