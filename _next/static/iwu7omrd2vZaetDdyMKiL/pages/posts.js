(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=o,e.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,i=t.hasQuery;return n||a&&(void 0!==i&&i)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=c,e.default=void 0;var r=s(n("q1tI")),a=s(n("Xuae")),i=n("lwAK"),o=n("FYa8"),u=n("/0+H");function s(t){return t&&t.__esModule?t:{default:t}}function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);t.has(o)?i=!1:t.add(o)}switch(a.type){case"title":case"base":e.has(a.type)?i=!1:e.add(a.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var c=l[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var d=a.props[c],f=r[c]||new Set;f.has(d)?i=!1:(f.add(d),r[c]=f)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var h=(0,a.default)();function m(t){var e=t.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(h,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}))})))}m.rewind=h.rewind;var g=m;e.default=g},F2YG:function(t,e,n){t.exports={heading2Xl:"utils_heading2Xl__CNKRn",headingXl:"utils_headingXl__3oTBS",headingLg:"utils_headingLg__2RbFn",headingMd:"utils_headingMd__MKCbM",borderCircle:"utils_borderCircle__voMDC",colorInherit:"utils_colorInherit__10wrt",padding1px:"utils_padding1px__22L_R",list:"utils_list__352L4",listItem:"utils_listItem__2TBgT",lightText:"utils_lightText__1uoLk"}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=a},GOMq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("PJ8K")}])},PJ8K:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return Tt})),n.d(e,"default",(function(){return Ct}));var r=n("q1tI"),a=n.n(r),i=n("9Dj+"),o=n("8Kt/"),u=n.n(o),s=n("F2YG"),c=n.n(s),d=n("YFqc"),l=n.n(d),f=n("o+zp");function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}var g=36e5,w=6e4,v=2,p={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},y=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,b=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,T=/^([+-])(\d{2})(?::?(\d{2}))?$/;function C(t,e){m(1,arguments);var n=e||{},r=null==n.additionalDigits?v:h(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=function(t){var e,n={},r=t.split(p.dateTimeDelimiter);/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],p.timeZoneDelimiter.test(n.date)&&(n.date=t.split(p.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length)));if(e){var a=p.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(i.date){var o=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}(i.date,r);a=function(t,e){if(null===e)return null;var n=t.match(y);if(!n)return null;var r=!!n[4],a=M(n[1]),i=M(n[2])-1,o=M(n[3]),u=M(n[4]),s=M(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,i=7*(e-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(e,u,s):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(D[e]||(S(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(S(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}(o.restDateString,o.year)}if(isNaN(a)||!a)return new Date(NaN);var u,s=a.getTime(),c=0;if(i.time&&(c=function(t){var e=t.match(b);if(!e)return null;var n=x(e[1]),r=x(e[2]),a=x(e[3]);if(!function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a))return NaN;return n*g+r*w+1e3*a}(i.time),isNaN(c)||null===c))return new Date(NaN);if(!i.timezone){var d=new Date(s+c),l=new Date(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds());return l.setFullYear(d.getUTCFullYear()),l}return u=function(t){if("Z"===t)return 0;var e=t.match(T);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;if(!function(t,e){return e>=0&&e<=59}(0,a))return NaN;return n*(r*g+a*w)}(i.timezone),isNaN(u)?new Date(NaN):new Date(s+c+u)}function M(t){return t?parseInt(t):1}function x(t){return t&&parseFloat(t.replace(",","."))||0}var D=[31,null,31,30,31,30,31,31,30,31,30,31];function S(t){return t%400===0||t%4===0&&t%100}function k(t){m(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var P={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function U(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var N={date:U({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:U({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:U({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},_={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function E(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function Y(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var W,O={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"===typeof P[t]?P[t]:1===e?P[t].one:P[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:N,formatRelative:function(t,e,n,r){return _[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:E({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:E({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:E({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:E({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:E({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(W.matchPattern);if(!a)return null;var i=a[0],o=n.match(W.parsePattern);if(!o)return null;var u=W.valueCallback?W.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:Y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function q(t,e){return m(2,arguments),function(t,e){m(2,arguments);var n=k(t).getTime(),r=h(e);return new Date(n+r)}(t,-h(e))}function F(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var H={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return F("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):F(n+1,2)},d:function(t,e){return F(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return F(t.getUTCHours()%12||12,e.length)},H:function(t,e){return F(t.getUTCHours(),e.length)},m:function(t,e){return F(t.getUTCMinutes(),e.length)},s:function(t,e){return F(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return F(Math.floor(r*Math.pow(10,n-3)),e.length)}},X=864e5;function A(t){m(1,arguments);var e=k(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function z(t){m(1,arguments);var e=k(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=A(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=A(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}var j=6048e5;function G(t){m(1,arguments);var e=k(t),n=A(e).getTime()-function(t){m(1,arguments);var e=z(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),A(n)}(e).getTime();return Math.round(n/j)+1}function I(t,e){m(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:h(a),o=null==n.weekStartsOn?i:h(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=k(t),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function L(t,e){m(1,arguments);var n=k(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:h(o),s=null==a.firstWeekContainsDate?u:h(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=I(c,e),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var f=I(l,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}var B=6048e5;function R(t,e){m(1,arguments);var n=k(t),r=I(n,e).getTime()-function(t,e){m(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:h(a),o=null==n.firstWeekContainsDate?i:h(n.firstWeekContainsDate),u=L(t,e),s=new Date(0);return s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0),I(s,e)}(n,e).getTime();return Math.round(r/B)+1}var Q="midnight",J="noon",K="morning",$="afternoon",Z="evening",V="night";function tt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+F(i,2)}function et(t,e){return t%60===0?(t>0?"-":"+")+F(Math.abs(t)/60,2):nt(t,e)}function nt(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+F(Math.floor(a/60),2)+n+F(a%60,2)}var rt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return H.y(t,e)},Y:function(t,e,n,r){var a=L(t,r),i=a>0?a:1-a;return"YY"===e?F(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):F(i,e.length)},R:function(t,e){return F(z(t),e.length)},u:function(t,e){return F(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return F(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return F(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return H.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return F(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=R(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):F(a,e.length)},I:function(t,e,n){var r=G(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):F(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):H.d(t,e)},D:function(t,e,n){var r=function(t){m(1,arguments);var e=k(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/X)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):F(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return F(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return F(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return F(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?J:0===a?Q:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?Z:a>=12?$:a>=4?K:V,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return H.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):H.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):F(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):F(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):H.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):H.s(t,e)},S:function(t,e){return H.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return et(a);case"XXXX":case"XX":return nt(a);case"XXXXX":case"XXX":default:return nt(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return et(a);case"xxxx":case"xx":return nt(a);case"xxxxx":case"xxx":default:return nt(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+tt(a,":");case"OOOO":default:return"GMT"+nt(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+tt(a,":");case"zzzz":default:return"GMT"+nt(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return F(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return F((r._originalDate||t).getTime(),e.length)}};function at(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function it(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var ot={p:it,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return at(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",at(a,e)).replace("{{time}}",it(i,e))}},ut=6e4;function st(t){return t.getTime()%ut}var ct=["D","DD"],dt=["YY","YYYY"];function lt(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var ft=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ht=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mt=/^'([^]*?)'?$/,gt=/''/g,wt=/[a-zA-Z]/;function vt(t,e,n){m(2,arguments);var r=String(e),a=n||{},i=a.locale||O,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:h(o),s=null==a.firstWeekContainsDate?u:h(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,d=null==c?0:h(c),l=null==a.weekStartsOn?d:h(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var f=k(t);if(!function(t){m(1,arguments);var e=k(t);return!isNaN(e)}(f))throw new RangeError("Invalid time value");var g=q(f,function(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(ut+st(e))%ut:st(e);return n*ut+r}(f)),w={firstWeekContainsDate:s,weekStartsOn:l,locale:i,_originalDate:f};return r.match(ht).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ot[e])(t,i.formatLong,w):t})).join("").match(ft).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return t.match(mt)[1].replace(gt,"'");var n,r=rt[e];if(r)return a.useAdditionalWeekYearTokens||(n=t,-1===dt.indexOf(n))||lt(t),!a.useAdditionalDayOfYearTokens&&function(t){return-1!==ct.indexOf(t)}(t)&&lt(t),r(g,t,i.localize,w);if(e.match(wt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}var pt=a.a.createElement;function yt(t){var e=t.dateString,n=C(e);return pt("time",{dateTime:e},vt(n,"yyyy-MM-dd"))}var bt=a.a.createElement,Tt=!0;function Ct(t){var e=t.allPostsData;return console.log(e),bt(i.a,null,bt(u.a,null,"\u2026"),bt("section",{className:c.a.headingMd},"\u2026"),bt("section",{className:"".concat(c.a.headingMd," ").concat(c.a.padding1px)},bt("h2",{className:c.a.headingLg},"Blog"),bt("ul",{className:c.a.list},e.map((function(t){var e=t.id,n=t.date,r=t.title;return bt("li",{className:c.a.listItem,key:e},bt(l.a,{href:Object(f.a)("/posts/[id]"),as:Object(f.a)("/posts/"+e)},bt("a",null,r)),bt("br",null),bt("small",{className:c.a.lightText},bt(yt,{dateString:n})))})))))}},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),i=n("i2R6"),o=n("48fX"),u=n("tCBg"),s=n("T0f4"),c=n("mPvQ");function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){o(c,u);var s=d(c);function c(t){var i;return r(this,c),i=s.call(this,t),f&&(e.add(a(i)),n(a(i))),i}return i(c,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(c,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(l.Component))}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},mPvQ:function(t,e,n){var r=n("5fIB"),a=n("rlHP"),i=n("KckH"),o=n("kG2m");t.exports=function(t){return r(t)||a(t)||i(t)||o()}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}}},[["GOMq",0,2,1,3]]]);