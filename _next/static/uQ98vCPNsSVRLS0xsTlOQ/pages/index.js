(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"9Dj+":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n("q1tI"),a=n.n(r),i=n("1OyB"),o=n("vuIU"),u=n("JX7q"),s=n("Ji7U"),c=n("md7G"),l=n("foSv"),f=n("YFqc"),d=n.n(f),h=n("o+zp"),m=a.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var w=function(t){Object(s.a)(n,t);var e=g(n);function n(t){var r;return Object(i.a)(this,n),r=e.call(this,t),console.log("constructor"),r.state={isToggleOn:!0,isChecked:!1},r.handleClick=r.handleClick.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"handleClick",value:function(){this.setState((function(t){return{isToggleOn:!t.isToggleOn,isChecked:!t.isChecked}})),console.log(this.state)}},{key:"render",value:function(){var t;return t="absolute inset-x-auto transform bg-white w-full h-px rounded-thin duration-300",m("nav",{className:"apple-menu font-pq"},m("ul",{className:"flex items-baseline justify-between px-4 py-1"},m("li",{className:"my-auto"},m("input",{type:"checkbox",name:"hidden",id:"hidden",className:"hidden",defaultChecked:this.state.isChecked}),m("label",{htmlFor:"hidden",onClick:this.handleClick},m("div",{className:"relative w-6 h-6 text-2xl font-light"},m("div",{className:"".concat(t," ").concat(this.state.isChecked?"top-3 -rotate-45":"top-2 rotate-0")}),m("div",{className:"".concat(t," ").concat(this.state.isChecked?"bottom-3 rotate-45":"bottom-2 rotate-0")})))),m("li",null,m(d.a,{href:Object(h.a)("/")},m("a",{className:"text-2xl"},"pullReq"))),m("li",null)))}}]),n}(a.a.Component),p=a.a.createElement;function v(t){var e=t.children;return p("div",{className:"layout flex flex-col"},p(w,null),p("main",{className:"mt-12 self-center"},e))}},F2YG:function(t,e,n){t.exports={headingLg:"utils_headingLg__2RbFn",headingMd:"utils_headingMd__MKCbM",padding1px:"utils_padding1px__22L_R",lightText:"utils_lightText__1uoLk"}},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return a}))},QeBL:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return yt})),n.d(e,"default",(function(){return bt}));var r=n("q1tI"),a=n.n(r),i=n("9Dj+"),o=n("F2YG"),u=n.n(o),s=n("YFqc"),c=n.n(s);function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}var d=36e5,h=6e4,m=2,g={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},w=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,p=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,v=/^([+-])(\d{2})(?::?(\d{2}))?$/;function y(t,e){f(1,arguments);var n=e||{},r=null==n.additionalDigits?m:l(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=function(t){var e,n={},r=t.split(g.dateTimeDelimiter);/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],g.timeZoneDelimiter.test(n.date)&&(n.date=t.split(g.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length)));if(e){var a=g.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(i.date){var o=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}(i.date,r);a=function(t,e){if(null===e)return null;var n=t.match(w);if(!n)return null;var r=!!n[4],a=b(n[1]),i=b(n[2])-1,o=b(n[3]),u=b(n[4]),s=b(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=r.getUTCDay()||7,i=7*(e-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(e,u,s):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(C[e]||(M(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(M(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}(o.restDateString,o.year)}if(isNaN(a)||!a)return new Date(NaN);var u,s=a.getTime(),c=0;if(i.time&&(c=function(t){var e=t.match(p);if(!e)return null;var n=T(e[1]),r=T(e[2]),a=T(e[3]);if(!function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a))return NaN;return n*d+r*h+1e3*a}(i.time),isNaN(c)||null===c))return new Date(NaN);if(!i.timezone){var y=new Date(s+c),D=new Date(y.getUTCFullYear(),y.getUTCMonth(),y.getUTCDate(),y.getUTCHours(),y.getUTCMinutes(),y.getUTCSeconds(),y.getUTCMilliseconds());return D.setFullYear(y.getUTCFullYear()),D}return u=function(t){if("Z"===t)return 0;var e=t.match(v);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;if(!function(t,e){return e>=0&&e<=59}(0,a))return NaN;return n*(r*d+a*h)}(i.timezone),isNaN(u)?new Date(NaN):new Date(s+c+u)}function b(t){return t?parseInt(t):1}function T(t){return t&&parseFloat(t.replace(",","."))||0}var C=[31,null,31,30,31,30,31,31,30,31,30,31];function M(t){return t%400===0||t%4===0&&t%100}function D(t){f(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var x={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function k(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var U={date:k({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:k({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:k({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},P={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function S(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(c)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var O,E={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"===typeof x[t]?x[t]:1===e?x[t].one:x[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:U,formatRelative:function(t,e,n,r){return P[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(O.matchPattern);if(!a)return null;var i=a[0],o=n.match(O.parsePattern);if(!o)return null;var u=O.valueCallback?O.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function W(t,e){return f(2,arguments),function(t,e){f(2,arguments);var n=D(t).getTime(),r=l(e);return new Date(n+r)}(t,-l(e))}function Y(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var j={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Y("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Y(n+1,2)},d:function(t,e){return Y(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return Y(t.getUTCHours()%12||12,e.length)},H:function(t,e){return Y(t.getUTCHours(),e.length)},m:function(t,e){return Y(t.getUTCMinutes(),e.length)},s:function(t,e){return Y(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Y(Math.floor(r*Math.pow(10,n-3)),e.length)}},q=864e5;function _(t){f(1,arguments);var e=D(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function R(t){f(1,arguments);var e=D(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=_(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=_(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}var L=6048e5;function F(t){f(1,arguments);var e=D(t),n=_(e).getTime()-function(t){f(1,arguments);var e=R(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),_(n)}(e).getTime();return Math.round(n/L)+1}function z(t,e){f(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:l(a),o=null==n.weekStartsOn?i:l(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=D(t),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function H(t,e){f(1,arguments);var n=D(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:l(o),s=null==a.firstWeekContainsDate?u:l(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=z(c,e),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var m=z(h,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}var X=6048e5;function B(t,e){f(1,arguments);var n=D(t),r=z(n,e).getTime()-function(t,e){f(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:l(a),o=null==n.firstWeekContainsDate?i:l(n.firstWeekContainsDate),u=H(t,e),s=new Date(0);return s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0),z(s,e)}(n,e).getTime();return Math.round(r/X)+1}var Q="midnight",G="noon",J="morning",I="afternoon",A="evening",Z="night";function $(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+Y(i,2)}function K(t,e){return t%60===0?(t>0?"-":"+")+Y(Math.abs(t)/60,2):V(t,e)}function V(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Y(Math.floor(a/60),2)+n+Y(a%60,2)}var tt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return j.y(t,e)},Y:function(t,e,n,r){var a=H(t,r),i=a>0?a:1-a;return"YY"===e?Y(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Y(i,e.length)},R:function(t,e){return Y(R(t),e.length)},u:function(t,e){return Y(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Y(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Y(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return j.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Y(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=B(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Y(a,e.length)},I:function(t,e,n){var r=F(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Y(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):j.d(t,e)},D:function(t,e,n){var r=function(t){f(1,arguments);var e=D(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/q)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Y(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Y(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Y(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Y(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?G:0===a?Q:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?A:a>=12?I:a>=4?J:Z,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return j.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):j.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Y(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):j.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):j.s(t,e)},S:function(t,e){return j.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return K(a);case"XXXX":case"XX":return V(a);case"XXXXX":case"XXX":default:return V(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return K(a);case"xxxx":case"xx":return V(a);case"xxxxx":case"xxx":default:return V(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+$(a,":");case"OOOO":default:return"GMT"+V(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+$(a,":");case"zzzz":default:return"GMT"+V(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Y(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Y((r._originalDate||t).getTime(),e.length)}};function et(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function nt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var rt={p:nt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return et(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",et(a,e)).replace("{{time}}",nt(i,e))}},at=6e4;function it(t){return t.getTime()%at}var ot=["D","DD"],ut=["YY","YYYY"];function st(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ft=/^'([^]*?)'?$/,dt=/''/g,ht=/[a-zA-Z]/;function mt(t,e,n){f(2,arguments);var r=String(e),a=n||{},i=a.locale||E,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:l(o),s=null==a.firstWeekContainsDate?u:l(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,d=null==c?0:l(c),h=null==a.weekStartsOn?d:l(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=D(t);if(!function(t){f(1,arguments);var e=D(t);return!isNaN(e)}(m))throw new RangeError("Invalid time value");var g=W(m,function(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(at+it(e))%at:it(e);return n*at+r}(m)),w={firstWeekContainsDate:s,weekStartsOn:h,locale:i,_originalDate:m};return r.match(lt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,rt[e])(t,i.formatLong,w):t})).join("").match(ct).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return t.match(ft)[1].replace(dt,"'");var n,r=tt[e];if(r)return a.useAdditionalWeekYearTokens||(n=t,-1===ut.indexOf(n))||st(t),!a.useAdditionalDayOfYearTokens&&function(t){return-1!==ot.indexOf(t)}(t)&&st(t),r(g,t,i.localize,w);if(e.match(ht))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}var gt=a.a.createElement;function wt(t){var e=t.dateString,n=y(e);return gt("time",{dateTime:e},mt(n,"yyyy-MM-dd"))}var pt=n("o+zp"),vt=a.a.createElement,yt=!0;function bt(t){var e=t.allPostsData;return vt(i.a,null,vt("section",{className:"".concat(u.a.headingMd," ").concat(u.a.padding1px)},vt("h2",{className:u.a.headingLg},"Blog"),vt("ul",null,e.map((function(t){var e=t.id,n=t.date,r=t.title;return vt("li",{key:e},vt(c.a,{href:"/posts/[id]",as:Object(pt.a)("/posts/".concat(e))},vt("a",null,r)),vt("br",null),vt("small",{className:u.a.lightText},vt(wt,{dateString:n})))})))))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),u=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var c=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var f,d=l(n("q1tI")),h=n("QmWs"),m=n("g/15"),g=c(n("nOHt")),w=n("elyg");function p(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var v=new Map,y=window.IntersectionObserver,b={};function T(){return f||(y?f=new y((function(t){t.forEach((function(t){if(v.has(t.target)){var e=v.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),v.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var C=function(t){i(n,t);var e=s(n);function n(t){var a;return r(this,n),(a=e.call(this,t)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(t){var e=null,n=null,r=null;return function(a,i){if(r&&a===e&&i===n)return r;var o=t(a,i);return e=a,n=i,r=o,o}}((function(t,e){return{href:(0,w.addBasePath)(p(t)),as:e?(0,w.addBasePath)(p(e)):e}})),a.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),o=i.href,u=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(o)){var s=window.location.pathname;o=(0,h.resolve)(s,o),u=u?(0,h.resolve)(s,u):o,t.preventDefault();var c=a.props.scroll;null==c&&(c=u.indexOf("#")<0),g.default[a.props.replace?"replace":"push"](o,u,{shallow:a.props.shallow}).then((function(t){t&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==t.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,h.resolve)(t,n);return[a,r?(0,h.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=T();return n?(n.observe(t),v.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}v.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();g.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var i=d.Children.only(e),o={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),d.default.cloneElement(i,o)}}]),n}(d.Component);e.default=C},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return i}));var a=n("JX7q");function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(a.a)(t):e}},"o+zp":function(t,e,n){"use strict";var r=n("QmWs"),a=n("yLiY"),i=(n.n(a)()()||{}).publicRuntimeConfig,o=(void 0===i?{}:i).basePath;e.a=function(t){return Object(r.format)((o||"")+(t||""))}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},yLiY:function(t,e,n){"use strict";var r;e.__esModule=!0,e.setConfig=function(t){r=t},e.default=void 0;e.default=function(){return r}}},[["/EDR",0,2,1,3]]]);