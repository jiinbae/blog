(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"2hOx":function(e,t,n){},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function f(){u=e(l.map((function(e){return e.props}))),d.canUseDOM?t(u):n&&(u=n(u))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var s=a.prototype;return s.shouldComponentUpdate=function(e){return!o(e,this.props)},s.componentWillMount=function(){l.push(this),f()},s.componentDidUpdate=function(){f()},s.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},s.render=function(){return i.createElement(r,this.props)},a}(a.Component);return s(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),s(d,"canUseDOM",c),d}}},"8JXG":function(e,t,n){},Aru1:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"TYRA","mailChimpUrl":"https://mailchimp.com","pinterest":"","facebook":"","twitter":"","youtube":"","github":"https://github.com/jiinbae","instagram":"https://instagram.com"}}}}')},GH5m:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"navbarLinks":[{"to":"/makeup","name":"Makeup"},{"to":"/lifestyle","name":"Lifestyle"},{"to":"/blog","name":"blog"}],"siteTitle":"TYRA","mailChimpUrl":"https://mailchimp.com"}}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!s(u))return!1;var l=e[u],f=t[u];if(!1===(a=n?n.call(r,l,f,u):void 0)||void 0===a&&l!==f)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Ibv9:function(e,t,n){"use strict";n("pIFo");var r=n("myE7"),a=n("q1tI"),i=n.n(a),o=n("TJpk"),s=n.n(o),c=n("Wbzz");t.a=function(e){return i.a.createElement(c.b,{query:"4262317136",render:function(t){return i.a.createElement(s.a,null,i.a.createElement("title",null,e.title.replace(/\b\w/g,(function(e){return e.toUpperCase()}))+" - "+t.site.siteMetadata.title),i.a.createElement("meta",{name:"description",content:e.description}))},data:r})}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function c(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,c=e.title,u=s(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,s=n("quPj"),c=n("C/va"),u=r.RegExp,l=u,f=u.prototype,d=/a/g,T=/a/g,E=new u(d)!==d;if(n("nh4g")&&(!E||n("eeVq")((function(){return T[n("K0xU")("match")]=!1,u(d)!=d||u(T)==T||"/a/i"!=u(d,"i")})))){u=function(e,t){var n=this instanceof u,r=s(e),i=void 0===t;return!n&&r&&e.constructor===u&&i?e:a(E?new l(r&&!i?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&i?c.call(e):t),n?this:f,u)};for(var m=function(e){e in u||i(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},p=o(l),h=0;p.length>h;)m(p[h++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),o=f(n("17x9")),s=f(n("8+s/")),c=f(n("bmMU")),u=n("v1p5"),l=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,p,h,A=(0,s.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(m=A,h=p=function(e){function t(){return T(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=s,t.titleAttributes=r({},o),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=d(a,["children"]),s=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),p.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=m.peek,p.rewind=function(){var e=m.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},Wbzz:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));n("xfY5");var r=n("q1tI"),a=n.n(r),i=n("+ZDr"),o=n.n(i);n.d(t,"a",(function(){return o.a}));n("lw3w"),n("emEt").default.enqueue;var s=a.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,o=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return a.a.createElement(s.Consumer,null,(function(e){return a.a.createElement(c,{data:t,query:n,render:r||i,staticQueryData:e})}))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,c,u,l=r(t),f=r(n);if(l&&f){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(l!=f)return!1;var d=t instanceof Date,T=n instanceof Date;if(d!=T)return!1;if(d&&T)return t.getTime()==n.getTime();var E=t instanceof RegExp,m=n instanceof RegExp;if(E!=m)return!1;if(E&&m)return t.toString()==n.toString();var p=a(t);if((c=p.length)!==a(n).length)return!1;for(s=c;0!=s--;)if(!i.call(n,p[s]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(s=c;0!=s--;)if(!("_owner"===(u=p[s])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},myE7:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"TYRA"}}}}')},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),s="["+o+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(e,t,n){var a={},s=i((function(){return!!o[e]()||"​"!="​"[e]()})),c=a[e]=s?t(f):o[e];n&&(a[n]=c),r(r.P+r.F*s,"String",a)},f=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=l},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),o=c(n("MgzW")),s=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=p(e,s.TAG_NAMES.TITLE),n=p(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return p(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==s.TAG_PROPERTIES.INNER_HTML&&c!==s.TAG_PROPERTIES.CSS_TEXT&&c!==s.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var u=i[c],l=(0,o.default)({},a[u],r[u]);a[u]=l}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,T=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,a),_(d,T);var E={baseTag:w(s.TAG_NAMES.BASE,n),linkTags:w(s.TAG_NAMES.LINK,i),metaTags:w(s.TAG_NAMES.META,o),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,c),scriptTags:w(s.TAG_NAMES.SCRIPT,l),styleTags:w(s.TAG_NAMES.STYLE,f)},m={},p={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(p[e]=E[e].oldTags)})),t&&t(),u(e,m,p)},N=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[s.HELMET_ATTRIBUTE]=!0,a=R(n,r),[i.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),i=N(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+l(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&b(S),e.defer?S=y((function(){g(e,(function(){S=null}))})):(g(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,T=e.titleAttributes;return{base:P(s.TAG_NAMES.BASE,t,r),bodyAttributes:P(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(s.ATTRIBUTE_NAMES.HTML,a,r),link:P(s.TAG_NAMES.LINK,i,r),meta:P(s.TAG_NAMES.META,o,r),noscript:P(s.TAG_NAMES.NOSCRIPT,c,r),script:P(s.TAG_NAMES.SCRIPT,u,r),style:P(s.TAG_NAMES.STYLE,l,r),title:P(s.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:p(e,s.HELMET_PROPS.DEFER),encode:p(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n("yLpj"))},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),s=n("apmT"),c=n("eeVq"),u=n("kJMx").f,l=n("EemH").f,f=n("hswa").f,d=n("qncB").trim,T=r.Number,E=T,m=T.prototype,p="Number"==i(n("Kuth")(m)),h="trim"in String.prototype,A=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=h?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,c=t.slice(2),u=0,l=c.length;u<l;u++)if((o=c.charCodeAt(u))<48||o>a)return NaN;return parseInt(c,r)}}return+t};if(!T(" 0o1")||!T("0b1")||T("+0x1")){T=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof T&&(p?c((function(){m.valueOf.call(n)})):"Number"!=i(n))?o(new E(A(t)),n,T):A(t)};for(var y,b=n("nh4g")?u(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;b.length>v;v++)a(E,y=b[v])&&!a(T,y)&&f(T,y,l(E,y));T.prototype=m,m.constructor=T,n("KroJ")(r,"Number",T)}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zq6j:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("TJpk"),o=n.n(i),s=(n("f3/d"),n("GH5m")),c=n("Wbzz"),u=n("Tgqd");n("8JXG");var l=function(e){return/^\/(?!\/)/.test(e.to)?a.a.createElement(c.a,{to:e.to,className:e.className},e.children):a.a.createElement("a",{href:e.to,className:e.className},e.children)},f=function(e){var t;return t=null===e.active?" dn":e.active?" fadeIn":" fadeOut",a.a.createElement("div",{className:"flex flex-column justify-center items-center bg-washed-red fixed top z-max w-100 ease"+(e.active?" vh-93":" h0")},a.a.createElement(c.a,{to:"/",className:"display ttu tracked dark-gray f3 no-underline menu__item pv5"+t},e.siteTitle),e.extraLinks.map((function(e){return a.a.createElement(l,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},e.name)})),a.a.createElement(c.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline menu__item pv3"+t},"About"))},d=function(e){var t,n;function r(t){var n;return(n=e.call(this)||this).state={menuToggle:null},n.toggleMenu=n.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.toggleMenu=function(e){this.setState({menuToggle:!this.state.menuToggle})},i.render=function(){var e=this;return a.a.createElement(c.b,{query:"3695137419",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"bg-white flex w-100 vh-7 pv3 flex justify-between items-center top-0 z-999 bb b--light-gray",style:{position:"sticky"}},a.a.createElement("div",{className:"w-100 mw8 flex justify-between justify-around-l items-center ph4 pa2-ns"},a.a.createElement("button",{className:"ttu tracked dark-gray f4 no-underline bn bg-transparent pointer",onClick:e.toggleMenu},a.a.createElement(u.b,null)),a.a.createElement(c.a,{to:"/",className:"display ttu tracked dark-gray f4 no-underline"},t.site.siteMetadata.siteTitle),a.a.createElement(c.a,{to:"/",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"HOME"),t.site.siteMetadata.navbarLinks.map((function(e){return a.a.createElement(l,{to:e.to,className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},e.name)}))),a.a.createElement("div",{className:"dn w-100 mw5 flex-l justify-around items-center"},a.a.createElement("a",{href:t.site.siteMetadata.mailChimpUrl,className:"sans-serif ttu light-red f5 no-underline dn dib-l"},"SIGN UP"),a.a.createElement("span",{className:"sans-serif mid-gray dn dib-l"},"|"),a.a.createElement(c.a,{to:"/about",className:"sans-serif ttu mid-gray f5 no-underline dn dib-l"},"ABOUT"))),a.a.createElement(f,{active:e.state.menuToggle,extraLinks:t.site.siteMetadata.navbarLinks,siteTitle:t.site.siteMetadata.siteTitle}))},data:s})},r}(a.a.Component),T=n("Aru1"),E=n("ma3e"),m=(n("2hOx"),function(){return a.a.createElement(c.b,{query:"1336352250",render:function(e){return a.a.createElement("footer",{className:"pa2 bg-dark-gray near-white pv5"},a.a.createElement("div",{className:"flex flex-wrap justify-around w-100 mw9 center mb5"},a.a.createElement("div",{className:"w-100 mw5 mb4"},a.a.createElement("span",{className:"display f2"},e.site.siteMetadata.siteTitle),a.a.createElement("hr",null),a.a.createElement("div",{className:"w-100 flex justify-around items-center pv2"},e.site.siteMetadata.facebook&&a.a.createElement("a",{className:"near-white",href:e.site.siteMetadata.facebook},a.a.createElement(E.a,null)),e.site.siteMetadata.youtube&&a.a.createElement("a",{className:"near-white",href:e.site.siteMetadata.youtube},a.a.createElement(E.f,null)),e.site.siteMetadata.github&&a.a.createElement("a",{className:"near-white",href:e.site.siteMetadata.github},a.a.createElement(E.b,null)),e.site.siteMetadata.pinterest&&a.a.createElement("a",{className:"near-white",href:e.site.siteMetadata.pinterest},a.a.createElement(E.d,null)),e.site.siteMetadata.twitter&&a.a.createElement("a",{className:"near-white",href:e.site.siteMetadata.twitter},a.a.createElement(E.e,null)),e.site.siteMetadata.instagram&&a.a.createElement("a",{className:"near-white",href:e.site.siteMetadata.instagram},a.a.createElement(E.c,null)))),a.a.createElement("div",{className:"flex flex-column"},a.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"WRITING BY ",e.site.siteMetadata.siteTitle),a.a.createElement(c.a,{to:"/blog",className:"near-white sans-serif f5 tracked pv1 db"},"ALL POSTS"),a.a.createElement(c.a,{to:"/rss.xml",className:"near-white sans-serif f5 tracked pv1 db"},"RSS FEED")),a.a.createElement("div",{className:"flex flex-column"},a.a.createElement("span",{className:"near-white sans-serif f5 tracked mb3 db"},"MORE ON ",e.site.siteMetadata.siteTitle),a.a.createElement(c.a,{to:"/about",className:"near-white sans-serif f5 tracked pv1 db"},"ABOUT US"),a.a.createElement("a",{href:e.site.siteMetadata.mailChimpUrl,className:"near-white sans-serif f5 tracked pv1 db"},"NEWS LETTER"))),a.a.createElement("div",{className:"w-100 mw9 center silver mb3"},a.a.createElement("div",{className:"w-100 bb b--mid-gray mv3"}),a.a.createElement("div",{className:"flex w-100 mw6 items-center justify-center justify-start-ns"},a.a.createElement("a",{href:"/sitemap.xml",className:"silver sans-serif f5 tracked pv1 db mh1"},"SITEMAP"),a.a.createElement("span",{className:"mh1"},"|"),a.a.createElement(c.a,{to:"/privacy",className:"silver sans-serif f5 tracked pv1 db mh1"},"PRIVACY"),a.a.createElement("span",{className:"mh1"},"|"),a.a.createElement("a",{href:"https://github.com/madelyneriksen/gatsby-starter-tyra",className:"silver sans-serif f5 tracked pv1 db mh1"},"THEME"))),a.a.createElement("div",{className:"w-100 mw9 silver center sans-serif f6"},a.a.createElement("p",null,'Tyra Theme (C) 2018 by Madelyn Eriksen under terms of the "MIT" software license.')))},data:T})});t.a=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("body",{className:"bg-near-white mid-gray"})),a.a.createElement(d,null),e.children,a.a.createElement(m,null))}}}]);
//# sourceMappingURL=commons-328b377f9b54f697a4d4.js.map