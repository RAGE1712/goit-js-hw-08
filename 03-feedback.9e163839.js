function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}function o(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}var r,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function y(e){return l=e,f=setTimeout(j,t),c?d(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function j(){var e=p();if(h(e))return S(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?g(n,i-(e-l)):n}(e))}function S(e){return f=void 0,m&&o?d(e):(o=r=void 0,a)}function w(){var e=p(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return y(u);if(s)return f=setTimeout(j,t),d(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=E(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?v(E(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:S(p())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function E(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=f.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const h={formElem:document.querySelector(".feedback-form")};h.formElem.addEventListener("input",e(r)((function(e){const t=e.target.name,o=e.target.value;n(t,o)}),500)),h.formElem.addEventListener("submit",(function(e){e.preventDefault();const t=h.formElem.elements.email.value,n=h.formElem.elements.message.value,o={email:t,message:n};console.log(o),e.target.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),function(){const e=o("email"),t=o("message");h.formElem.elements.email.value=e||"",h.formElem.elements.message.value=t||""}();
//# sourceMappingURL=03-feedback.9e163839.js.map