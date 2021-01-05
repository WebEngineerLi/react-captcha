var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, Component } from 'react';
// import { ICaptchaProps } from './captcha';
function withRef(WrappedComponent) {
    // const HOC: React.FC<T & { forwardedRef: any }> = ({ forwardedRef, ...restProps }) => {
    //   return (
    //     <WrappedComponent ref={forwardedRef} {...restProps as T}/>
    //   )
    // }
    // return forwardRef((props, ref: any) => {
    //   console.log('props:', props);
    //   return (
    //     <HOC {...props as T} forwardedRef={ref} />
    //   )
    // })
    var HOC = /** @class */ (function (_super) {
        __extends(HOC, _super);
        function HOC() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HOC.prototype.render = function () {
            var _a = this.props, forwardedRef = _a.forwardedRef, restProps = __rest(_a, ["forwardedRef"]);
            return (React.createElement(WrappedComponent, __assign({ ref: forwardedRef }, restProps)));
        };
        return HOC;
    }(Component));
    return forwardRef(function (props, ref) {
        return (React.createElement(HOC, __assign({}, props, { forwardedRef: ref })));
    });
}
export default withRef;
