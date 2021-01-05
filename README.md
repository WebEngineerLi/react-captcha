# react-captcha-code

基于 `React` 和 `canvas` 的一个验证码组件

## 安装

```
npm install react-captcha-code --save
```

## 需要用户自己安装的依赖

同级依赖:

| 依赖名称       |     版本      |
| :------------- | :-----------: |
| ｜ `react`     | `^16.13.1` ｜ |
| ｜ `react-dom` | `^16.13.1` ｜ |

## APIS

|    名称     |            类型             | 是否必填 | 默认值    | 描述                                                                                  |
| :---------: | :-------------------------: | :------: | --------- | ------------------------------------------------------------------------------------- |
|  `height`   |          `number`           |   `否`   | `40`      | 验证码的高度                                                                          |
|   `width`   |          `number`           |   `否`   | `100`     | 验证码的宽度                                                                          |
|  `bgColor`  |          `string`           |   `否`   | `#DFF0D8` | 背景颜色                                                                              |
|  `charNum`  |          `number`           |   `否`   | `4`       | 字符个数                                                                              |
| `fontSize`  |          `number`           |   `否`   | `25`      | 字体大小                                                                              |
| `onChange`  | `(captcha: string) => void` |   `是`   |           | 点击验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用）            |
|   `onRef`   |    `(ref: any) => void`     |   `否`   |           | 在验证码组件初次挂载时调用，返回 canvas DOM（可主动调用 canvas.click() 来刷新验证码） |
| `className` |          `string`           |   `否`   |           | 样式名                                                                                |

## 基本用法

### 代码示例

```jsx
import React, { useCallback, useRef } from 'react';
import Captcha from 'react-captcha-code';

export default { title: 'Basic' };

export const Basic = () => {

  const captchaRef = useRef<HTMLCanvasElement>();

  const handleChange = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, []);

  const handleRef = (ref: any) => {
    captchaRef.current = ref.current;
  };

  const handleClick = () => {
    // 主动调用click，用于更换验证码
    captchaRef.current?.click();
  };

  return (
    <>
      <Captcha charNum={4} onChange={handleChange} onRef={handleRef}  />
      <div>
        <button onClick={handleClick}>更换验证码</button>
      </div>
    </>
  );
};

export default Basic;
```

### 效果

[![Edit zen-paper-9yish](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zen-paper-9yish?fontsize=14&hidenavigation=1&theme=dark)
