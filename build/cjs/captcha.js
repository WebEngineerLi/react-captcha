"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var S = __importStar(require("./style"));
var utils_1 = require("./utils");
var lodash_1 = require("lodash");
var classnames_1 = __importDefault(require("classnames"));
var Captcha = react_1.forwardRef(function (_a, ref) {
    var _b = _a.height, height = _b === void 0 ? 40 : _b, _c = _a.width, width = _c === void 0 ? 100 : _c, _d = _a.bgColor, bgColor = _d === void 0 ? '#DFF0D8' : _d, _e = _a.charNum, charNum = _e === void 0 ? 4 : _e, _f = _a.fontSize, fontSize = _f === void 0 ? 25 : _f, onChange = _a.onChange, className = _a.className, onRef = _a.onRef;
    var canvas = react_1.useRef(null);
    react_1.useEffect(function () {
        onRef && onRef(canvas);
    }, []);
    react_1.useImperativeHandle(ref, function () { return ({
        refresh: function () {
            canvas.current.click();
        },
    }); });
    var generateCaptcha = react_1.useCallback(function () {
        var checkCode = '';
        if (canvas.current) {
            var ctx = canvas.current.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, width, height);
                ctx.beginPath();
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, width, height);
                for (var i = 0; i < charNum; i++) {
                    var charGap = Math.round(width / charNum);
                    var offset = Math.round(charGap / 2) - 6;
                    var code = utils_1.originalCharacter[utils_1.randomNum(0, utils_1.originalCharacter.length - 1)];
                    checkCode += code;
                    ctx.save();
                    ctx.beginPath();
                    ctx.fillStyle = 'white';
                    ctx.strokeStyle = utils_1.randomColor();
                    ctx.font = fontSize + "px serif";
                    ctx.rotate((Math.PI / 180) * utils_1.randomNum(-5, 5));
                    ctx.strokeText(code, offset + i * charGap, height / 2 + 8);
                    ctx.beginPath();
                    ctx.moveTo(utils_1.randomNum(0, width), utils_1.randomNum(0, height));
                    ctx.lineTo(utils_1.randomNum(0, width), utils_1.randomNum(0, height));
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
    }, []);
    var handleClick = react_1.useCallback(function () {
        if (lodash_1.isFunction(onChange)) {
            var captcha = generateCaptcha();
            onChange(captcha);
        }
    }, [onChange]);
    react_1.useEffect(function () {
        if (lodash_1.isFunction(onChange)) {
            var captcha = generateCaptcha();
            onChange(captcha);
        }
    }, []);
    return (react_1.default.createElement(S.SCaptcha, { className: classnames_1.default('react-captcha', className), onClick: handleClick, height: height, width: width, ref: canvas }));
});
exports.default = Captcha;
