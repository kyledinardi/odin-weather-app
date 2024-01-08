(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,":root {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #37c8b7;\n}\n\nbody {\n  position: relative;\n}\n\nform {\n  margin: 0 auto 10px auto;\n  width: max-content;\n  position: relative;\n  display: grid;\n}\n\ninput {\n  border-radius: 20px;\n  border: 2px solid #444;\n  padding-left: 10px;\n  height: 30px;\n}\n\n.submit-btn {\n  border: none;\n  padding: 0;\n  height: 20px;\n  position: absolute;\n  top: 5px;\n  right: 7px;\n  cursor: pointer;\n}\n\nsvg {\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n}\n\n.error-handler {\n  background-color: #93e1d8;\n  border-radius: 20px;\n  width: max-content;\n  padding: 10px 20px;\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: 35px;\n}\n\n.measurement-toggle {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.content {\n  margin: 50px auto 0 auto;\n}\n\n.content-card {\n  background-color: #93e1d8;\n  border-radius: 10px;\n  padding: 10px 20px;\n  width: max-content;\n  margin: auto;\n}\n.heading {\n  text-align: center;\n}\n\n.location {\n  font-size: 1.2rem;\n}\n\n.current-weather {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  justify-content: center;\n  margin: 30px auto;\n  gap: 30px;\n}\n\n.current-main {\n  font-size: 1.2rem;\n  width: 200px;\n  text-align: center;\n}\n\n.current-temp {\n  font-size: 2rem;\n  margin: 20px;\n}\n\n.current-extra {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 30px;\n  width: 400px;\n  justify-content: center;\n}\n\n.extra-head {\n  color: #555;\n  display: grid;\n  grid-template-columns: max-content max-content;\n  align-items: center;\n  column-gap: 10px;\n}\n\n.extra-head svg {\n  background-color: transparent;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(3, 300px);\n  gap: 30px;\n  justify-content: center;\n}\n\n.forecast svg {\n  background-color: transparent;\n}\n\n.day-card {\n  display: grid;\n  justify-items: center;\n  text-align: center;\n  width: 200px;\n  height: 290px;\n}\n\n.day {\n  font-size: 1.2rem;\n}\n\n.forecast-rain-chance {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  justify-content: space-evenly;\n  align-items: center;\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var h=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),u=n(216),d=n.n(u),l=n(589),f=n.n(l),m=n(426),h={};function g(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function p(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=g(t);return!isNaN(Number(n))}h.styleTagTransform=f(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const b={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},x={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function v(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const M={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:v({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:v({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:v({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:v({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:v({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function C(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let u;return u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const k={ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(S.matchPattern);if(!n)return null;const r=n[0],a=t.match(S.parsePattern);if(!a)return null;let o=S.valueCallback?S.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:C({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:C({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:C({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:C({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var S;const P={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=y[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:b,formatRelative:(t,e,n,r)=>x[t],localize:M,match:k,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function T(){return D}Math.pow(10,8);const W=6048e5,_=864e5;function q(t){const e=g(t);return e.setHours(0,0,0,0),e}function $(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function A(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function F(t){const e=g(t);return function(t,e){const n=q(t),r=q(e),a=n.getTime()-$(n),o=r.getTime()-$(r);return Math.round((a-o)/_)}(e,function(t){const e=g(t),n=A(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function N(t,e){const n=T(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=g(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function O(t){return N(t,{weekStartsOn:1})}function Y(t){const e=g(t),n=e.getFullYear(),r=A(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=O(r),o=A(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=O(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function E(t){const e=g(t),n=O(e).getTime()-function(t){const e=Y(t),n=A(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),O(n)}(e).getTime();return Math.round(n/W)+1}function j(t,e){const n=g(t),r=n.getFullYear(),a=T(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=A(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const c=N(i,e),s=A(t,0);s.setFullYear(r,0,o),s.setHours(0,0,0,0);const u=N(s,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function H(t,e){const n=g(t),r=N(n,e).getTime()-function(t,e){const n=T(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=j(t,e),o=A(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),N(o,e)}(n,e).getTime();return Math.round(r/W)+1}function L(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const z={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return L("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):L(n+1,2)},d:(t,e)=>L(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>L(t.getHours()%12||12,e.length),H:(t,e)=>L(t.getHours(),e.length),m:(t,e)=>L(t.getMinutes(),e.length),s:(t,e)=>L(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return L(Math.floor(r*Math.pow(10,n-3)),e.length)}},Q={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return z.y(t,e)},Y:function(t,e,n,r){const a=j(t,r),o=a>0?a:1-a;return"YY"===e?L(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):L(o,e.length)},R:function(t,e){return L(Y(t),e.length)},u:function(t,e){return L(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return L(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return L(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return z.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return L(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=H(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):L(a,e.length)},I:function(t,e,n){const r=E(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):L(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):z.d(t,e)},D:function(t,e,n){const r=F(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):L(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return L(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return L(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return L(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return z.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):z.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):L(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):L(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):z.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):z.s(t,e)},S:function(t,e){return z.S(t,e)},X:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return G(a);case"XXXX":case"XX":return X(a);default:return X(a,":")}},x:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return G(a);case"xxxx":case"xx":return X(a);default:return X(a,":")}},O:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(a,":");default:return"GMT"+X(a,":")}},z:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(a,":");default:return"GMT"+X(a,":")}},t:function(t,e,n,r){const a=r._originalDate||t;return L(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return L((r._originalDate||t).getTime(),e.length)}};function B(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+L(o,2)}function G(t,e){return t%60==0?(t>0?"-":"+")+L(Math.abs(t)/60,2):X(t,e)}function X(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+L(Math.floor(r/60),2)+e+L(r%60,2)}const Z=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},I=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},J={p:I,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Z(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Z(r,e)).replace("{{time}}",I(a,e))}},U=/^D+$/,R=/^Y+$/,V=["D","DD","YY","YYYY"];function K(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),V.includes(t))throw new RangeError(r)}const tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,at=/[a-zA-Z]/;function ot(t){const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("viewBox","0 0 24 24"),n.setAttribute("d",t),e.appendChild(n),e}const it=function(t,e){const n=document.querySelectorAll(".content .wi"),r=document.querySelector(".current-main"),a=document.querySelector(".condition"),o=document.querySelector(".moon"),i=document.querySelector(".moon svg"),c=document.querySelector(".moon span"),s=new Date;i&&i.remove(),o.insertBefore(function(t){let e;switch(t){case"New Moon":e=ot("M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z");break;case"Waxing Crescent":e=ot("M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z");break;case"First Quarter":e=ot("M12 2V22A10 10 0 0 0 12 2Z");break;case"Waxing Gibbous":e=ot("M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z");break;case"Full Moon":e=ot("M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z");break;case"Waning Gibbous":e=ot("M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z");break;case"Last Quarter":e=ot("M12 2A10 10 0 0 0 12 22Z");break;case"Waning Crescent":e=ot("M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z")}return e}(t.forecast.forecastday[0].astro.moon_phase),c);const u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=document.querySelector(".current-condition-image");d.src=t.current.condition.icon,r.insertBefore(d,a),e?(n[2].textContent=`${t.current.temp_c}°C`,n[4].textContent=`High: ${t.forecast.forecastday[0].day.maxtemp_c}°C`,n[5].textContent=`Low: ${t.forecast.forecastday[0].day.mintemp_c}°C`,n[6].textContent=`${t.current.feelslike_c}°C`,n[7].textContent=`${t.current.wind_dir} ${t.current.wind_kph} km/h`,n[10].textContent=`${t.current.vis_km} km`,n[17].textContent=`${t.forecast.forecastday[0].day.maxtemp_c}°C / ${t.forecast.forecastday[0].day.mintemp_c}°C`,n[21].textContent=`${t.forecast.forecastday[1].day.maxtemp_c}°C / ${t.forecast.forecastday[0].day.mintemp_c}°C`,n[25].textContent=`${t.forecast.forecastday[2].day.maxtemp_c}°C / ${t.forecast.forecastday[0].day.mintemp_c}°C`):(n[2].textContent=`${t.current.temp_f}°F`,n[4].textContent=`High: ${t.forecast.forecastday[0].day.maxtemp_f}°F`,n[5].textContent=`Low: ${t.forecast.forecastday[0].day.mintemp_f}°F`,n[6].textContent=`${t.current.feelslike_f}°F`,n[7].textContent=`${t.current.wind_dir} ${t.current.wind_mph} mph`,n[10].textContent=`${t.current.vis_miles} mi`,n[17].textContent=`${t.forecast.forecastday[0].day.maxtemp_f}°F / ${t.forecast.forecastday[0].day.mintemp_f}°F`,n[21].textContent=`${t.forecast.forecastday[1].day.maxtemp_f}°F / ${t.forecast.forecastday[0].day.mintemp_f}°F`,n[25].textContent=`${t.forecast.forecastday[2].day.maxtemp_f}°F / ${t.forecast.forecastday[0].day.mintemp_f}°F`),n[0].textContent=`${t.location.name}, ${t.location.country}`,n[1].textContent=function(t,e,n){const r=T(),a=n?.locale??r.locale??P,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=g(t);if(!p(c))throw new RangeError("Invalid time value");const s={firstWeekContainsDate:o,weekStartsOn:i,locale:a,_originalDate:c},u=e.match(et).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,J[e])(t,a.formatLong):t})).join("").match(tt).map((function(r){if("''"===r)return"'";const o=r[0];if("'"===o)return function(t){const e=t.match(nt);return e?e[1].replace(rt,"'"):t}(r);const i=Q[o];if(i)return!n?.useAdditionalWeekYearTokens&&(u=r,R.test(u))&&K(r,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return U.test(t)}(r)&&K(r,e,String(t)),i(c,r,a.localize,s);var u;if(o.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("");return u}(s,"PPPPp"),n[3].textContent=t.current.condition.text,n[8].textContent=`${t.current.humidity}%`,n[9].textContent=`${t.current.uv} of 11`,n[11].textContent=`${t.current.cloud}%`,n[12].textContent=`${t.forecast.forecastday[0].day.daily_chance_of_rain}%`,n[13].textContent=t.forecast.forecastday[0].astro.moon_phase,n[14].textContent=t.forecast.forecastday[0].astro.sunrise,n[15].textContent=t.forecast.forecastday[0].astro.sunset,n[16].textContent=t.forecast.forecastday[0].day.condition.text,n[18].textContent=`${t.forecast.forecastday[0].day.daily_chance_of_rain}%`,n[19].textContent=u[(s.getDay()+1)%7],n[20].textContent=t.forecast.forecastday[1].day.condition.text,n[22].textContent=`${t.forecast.forecastday[1].day.daily_chance_of_rain}%`,n[23].textContent=u[(s.getDay()+2)%7],n[24].textContent=t.forecast.forecastday[2].day.condition.text,n[26].textContent=`${t.forecast.forecastday[2].day.daily_chance_of_rain}%`;const l=document.querySelectorAll(".day-card"),f=document.querySelectorAll(".forecast-condition"),m=document.querySelectorAll(".forecast-image");for(let e=0;e<3;e+=1)m[e].src=t.forecast.forecastday[e].day.condition.icon,l[e].insertBefore(m[e],f[e])},ct=document.querySelector("form"),st=document.querySelector("input"),ut=document.querySelector(".error-handler"),dt=document.querySelector(".measurement-toggle");let lt,ft=!1;function mt(t){(async function(t){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ebcf2e50162447c9b21182536233012&days=3&aqi=no&alerts=no&q=${t}`,{mode:"cors"});return lt=await e.json(),lt})(t).then((t=>{ut.style.display="none",it(t,ft)})).catch((()=>{ut.style.display="block"}))}ct.addEventListener("submit",(t=>{t.preventDefault(),mt(st.value),t.target.reset()})),st.addEventListener("input",(()=>{st.setCustomValidity("")})),dt.addEventListener("click",(function(){ft?(ft=!1,dt.textContent="Use °C"):(ft=!0,dt.textContent="Use °F"),it(lt,ft)})),mt("Washington, DC")})()})();