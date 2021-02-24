import React, { useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import * as S from './style';
import { originalCharacter, randomColor, randomNum } from './utils';
import { isFunction } from 'lodash';
import cs from 'classnames';
var Captcha = forwardRef(function (_a, ref) {
    var _b = _a.height, height = _b === void 0 ? 40 : _b, _c = _a.width, width = _c === void 0 ? 100 : _c, _d = _a.bgColor, bgColor = _d === void 0 ? '#DFF0D8' : _d, _e = _a.charNum, charNum = _e === void 0 ? 4 : _e, _f = _a.fontSize, fontSize = _f === void 0 ? 25 : _f, onChange = _a.onChange, onClick = _a.onClick, className = _a.className, onRef = _a.onRef, _g = _a.code, code = _g === void 0 ? '' : _g;
    var canvas = useRef(null);
    useEffect(function () {
        onRef && onRef(canvas);
    }, []);
    useImperativeHandle(ref, function () { return ({
        refresh: function () {
            canvas.current.click();
        },
    }); });
    // 生成原始的数据
    var generateSourceCode = useCallback(function () {
        var array = [];
        if (code) {
            return code.split('');
        }
        for (var i = 0; i < charNum; i++) {
            var temp = originalCharacter[randomNum(0, originalCharacter.length - 1)];
            array.push(temp);
        }
        return array;
    }, [code, charNum]);
    var generateCaptcha = useCallback(function () {
        var checkCode = '';
        if (canvas.current) {
            var ctx = canvas.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, width, height);
                ctx.beginPath();
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);
                var sourceCode = generateSourceCode();
                for (var i = 0; i < sourceCode.length; i++) {
                    var charGap = Math.round(width / charNum);
                    var offset = Math.round(charGap / 2) - 6;
                    var code_1 = sourceCode[i];
                    checkCode += code_1;
                    ctx.save();
                    ctx.beginPath();
                    ctx.fillStyle = 'white';
                    ctx.strokeStyle = randomColor();
                    ctx.font = fontSize + "px serif";
                    ctx.rotate((Math.PI / 180) * randomNum(-5, 5));
                    ctx.strokeText(code_1, offset + i * charGap, height / 2 + 8);
                    ctx.beginPath();
                    ctx.moveTo(randomNum(0, width), randomNum(0, height));
                    ctx.lineTo(randomNum(0, width), randomNum(0, height));
                    ctx.stroke();
                    ctx.restore();
                }
                return checkCode;
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }, [code]);
    var handleClick = useCallback(function () {
        if (isFunction(onChange) && !code) {
            var captcha = generateCaptcha();
            onChange(captcha);
        }
        if (isFunction(onClick)) {
            onClick();
        }
    }, [onChange, code]);
    useEffect(function () {
        var captcha = generateCaptcha();
        if (isFunction(onChange) && !code) {
            onChange(captcha);
        }
    }, [code]);
    return (React.createElement(S.SCaptcha, { className: cs('react-captcha', className), onClick: handleClick, height: height, width: width, ref: canvas }));
});
export default Captcha;
