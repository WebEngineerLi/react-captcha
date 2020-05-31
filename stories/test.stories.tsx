import React, { useCallback, useRef } from 'react';
import Captcha from 'react-captcha-code';

export default { title: 'Basic' };

export const Basic = () => {

  const handleChange = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, [])

  const captchaRef = useRef<HTMLCanvasElement>();

  const handleRef = (ref: any) => {
    captchaRef.current = ref.current;
    
  }

  const handleClick = () => {
    (captchaRef as any).current.click();
  }

  return (
    <>
      <Captcha
        onRef={handleRef}
        charNum={6}
        onChange={handleChange}
      />
      <div>
        <button onClick={handleClick}>更换验证码</button>
      </div>
    </>
  )
}

Basic.story = {
  name: 'Basic',
}