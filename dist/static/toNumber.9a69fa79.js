import{a as e,i as t}from"./isSymbol.e0656e6b.js";var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;function n(n){if("number"==typeof n)return n;if(e(n))return NaN;if(t(n)){var o="function"==typeof n.valueOf?n.valueOf():n;n=t(o)?o+"":o}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var u=i.test(n);return u||f.test(n)?s(n.slice(2),u?2:8):a.test(n)?NaN:+n}export{n as t};
