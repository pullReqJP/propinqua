(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"0Aie":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("o0o1"),a=n.n(r);function o(e,t,n,r,a,o,u){try{var c=e[o](u),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,a)}var u=n("rePB"),c=n("q1tI"),i=n.n(c),s=n("8Kt/"),l=n.n(s),d=n("9Dj+"),f=i.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(){var e=Object(c.useState)({name:"",email:"",subject:"StaticForms - Contact Form",honeypot:"",message:"",replyTo:"@",accessKey:"b2fe4642-800f-4560-b4af-a0907deb948d"}),t=e[0],n=e[1],r=Object(c.useState)({type:"",message:""}),s=(r[0],r[1]),d=function(e){return n(m(m({},t),{},Object(u.a)({},e.target.name,e.target.value)))},p=function(){var e,n=(e=a.a.mark((function e(n){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://api.staticforms.xyz/submit",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:(o=e.sent).success?s({type:"success",message:"Thank you for reaching out to us."}):s({type:"error",message:o.message}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("An error occurred",e.t0),s({type:"error",message:"An error occured while submitting the form"});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function c(e){o(u,r,a,c,i,"next",e)}function i(e){o(u,r,a,c,i,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return f(i.a.Fragment,null,f(l.a,null,f("title",null,"\u304a\u554f\u3044\u5408\u308f\u305b | \u682a\u5f0f\u4f1a\u793e\u30d7\u30eb\u30ea\u30af"),f("meta",{name:"description",content:"Pullreq Limited"})),f("h1",null,"\u304a\u554f\u3044\u5408\u308f\u305b"),f("form",{className:"w-full max-w-sm",action:"https://api.staticforms.xyz/submit",method:"post",onSubmit:p},f("div",{className:"md:flex md:items-center mb-6"},f("div",{className:"md:w-1/3"},f("label",{className:"block text-gray-600 md:text-right mb-1 md:mb-0 pr-4"},"\u304a\u540d\u524d")),f("div",{className:"md:w-2/3"},f("input",{className:" bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700",type:"text",name:"name",onChange:d,required:!0}))),f("div",{className:"md:flex md:items-center mb-6"},f("div",{className:"md:w-1/3"},f("label",{className:"block text-gray-600 md:text-right mb-1 md:mb-0 pr-4"},"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9")),f("div",{className:"md:w-2/3"},f("input",{className:" bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700",type:"text",name:"email",onChange:d,required:!0}))),f("div",{className:"mb-6"},f("label",{className:"block mb-1 text-gray-600"},"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"),f("textarea",{className:" bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700",name:"message",onChange:d,required:!0})),f("div",{className:"text-right"},f("button",{className:" bg-white hover:bg-gray-100 text-gray-800 py-1 px-4 border border-gray-400 rounded shadow",type:"submit"},"\u9001\u4fe1"))))};function b(){return f(d.a,null,f("div",{className:"container p-4 break-words"},y()))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=i(n("q1tI")),a=i(n("Xuae")),o=n("lwAK"),u=n("FYa8"),c=n("/0+H");function i(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,i=d.length;c<i;c++){var s=d[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function m(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var y=m;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},QLSJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("0Aie")}])},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),u=n("7W2i"),c=n("a1gu"),i=n("Nsbk"),s=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){u(s,c);var i=l(s);function s(e){var o;return r(this,s),o=i.call(this,e),f&&(t.add(a(o)),n(a(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(d.Component))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["QLSJ",0,2,1,3]]]);