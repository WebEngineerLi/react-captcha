import React from 'react';
export interface ICaptchaProps {
    /**
     * 高度
     */
    height?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 背景颜色
     */
    bgColor?: string;
    /**
     * 字符个数
     */
    charNum?: number;
    /**
     * 字体大小
     */
    fontSize?: number;
    /**
     * 改变验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用）
     * @memberof ICaptchaProps
     */
    onChange?: (captcha: string) => void;
    /**
     * 点击验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用）
     * @memberof ICaptchaProps
     */
    onClick?: () => void;
    /**
     * 数组类型，传入用来展示的验证码
     */
    code?: string;
    /**
     * 样式名
     */
    className?: string;
    /**
     * 用来获取组件的props
     */
    onRef?: (ref: any) => void;
}
export interface canvasRefProps {
    /**
     * 主动刷新验证码接口
     */
    refresh(): void;
}
declare const Captcha: React.ForwardRefExoticComponent<ICaptchaProps & React.RefAttributes<canvasRefProps>>;
export default Captcha;
//# sourceMappingURL=captcha.d.ts.map