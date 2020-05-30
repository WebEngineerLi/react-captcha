import React, { useCallback, useRef } from 'react';
import Captcha from 'react-captcha-code';

export default { title: 'Ref' };

export const Ref = () => {

  const handleClick = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, [])

  const captchaRef = useRef<HTMLCanvasElement>();

  const getRef = (ref: any) => {
    console.log('ref:', ref);
    captchaRef.current = ref.current;
  }

  return (
    <>
      <Captcha
        onRef={getRef}
        charNum={6}
        onChange={handleClick}
      />
      <button onClick={() => {
        captchaRef.current.click();
      }}>111</button>
    </>
  )
}

Ref.story = {
  name: 'Basic',
}