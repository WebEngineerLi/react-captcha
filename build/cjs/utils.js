"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.originalCharacter = exports.randomColor = exports.randomNum = void 0;
// 随机数字
function randomNum(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}
exports.randomNum = randomNum;
// 随机颜色
function randomColor() {
    return "rgb(" + randomNum(0, 255) + ", " + randomNum(0, 255) + ", " + randomNum(0, 255) + ")";
}
exports.randomColor = randomColor;
exports.originalCharacter = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
