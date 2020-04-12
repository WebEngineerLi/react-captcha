# react-captcha

基于 React 和 canvas 画出的一个验证码组件

## 安装

```
npm install react-captcha --save
```

## 需要用户自己安装的依赖

同级依赖:

| 依赖名称       |     版本      |
| :------------- | :-----------: |
| ｜ `react`     | `^16.13.1` ｜ |
| ｜ `react-dom` | `^16.13.1` ｜ |

## APIS

|    名称     |            类型             | 是否必填 | 默认值    | 描述                                                                       |
| :---------: | :-------------------------: | :------: | --------- | -------------------------------------------------------------------------- |
|  `height`   |          `number`           |   `否`   | `40`      | 验证码的高度                                                               |
|   `width`   |          `number`           |   `否`   | `100`     | 验证码的宽度                                                               |
|  `bgColor`  |          `string`           |   `否`   | `#DFF0D8` | 背景颜色                                                                   |
|  `charNum`  |          `number`           |   `否`   | `4`       | 字符个数                                                                   |
| `fontSize`  |          `number`           |   `否`   | `25`      | 字体大小                                                                   |
| `onChange`  | `(captcha: string) => void` |   `是`   |           | 点击验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用） |
| `className` |          `string`           |   `否`   |           | 样式名                                                                     |

基本用法

```jsx
import React, { useCallback } from 'react';
import Captcha from 'react-captcha';

export default { title: 'Basic' };

export const Basic = () => {
  const handleClick = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, []);

  return <Captcha charNum={4} onChange={handleClick} />;
};

export default Basic;
```
