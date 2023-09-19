"use strict";
// Sample leftpad implementation taken from npm 'left-pad'
const leftPad = (str, len, ch) => {
    let i = -1;
    ch !== null && ch !== void 0 ? ch : ' ';
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    // Return mutated string
    return str;
};
// leftpad integration using generics
const genericLeftPad = (padObj, len, char) => {
    return String(padObj).padStart(len, char ? String(String) : undefined); // Using ES6 padStart built in function
};
// Sample performance checker
const run = (fn, count, ...args // Using strict pattern definition like this is not recommended when using rest parameters
) => {
    const startTime = performance.now();
    for (let i = 0; i < count; i++) {
        fn.apply(null, args);
    }
    return performance.now() - startTime;
};
// Running performance check
const perfCount = [100, 1000, 10000];
perfCount.forEach((count) => {
    console.log(`=====================\nTesting performance count: ${count}\n=====================`);
    perfCount.forEach((len) => {
        console.log(`Testing string length: ${len}`);
        // Run npm package function
        console.log(`Running NPM ${run(leftPad, count, 'string', len, '*')}`);
        // Run ES6 built-in function
        console.log(`Running ES6 ${run((genericLeftPad), count, 'string', len, '*')} \n`);
    });
});
// Sample Class definition of a StringObject
class PadObject {
    constructor(s) {
        this.str = String(s);
    }
    leftPadNpm(len, char) {
        return leftPad(this.str, len, char);
    }
    leftPadJs(len, char) {
        return genericLeftPad(this.str, len, char);
    }
}
