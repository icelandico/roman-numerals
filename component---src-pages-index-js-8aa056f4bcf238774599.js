(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(141),o=t(144),c=r.a.h1.withConfig({displayName:"header__StyledHeader",componentId:"sc-1qi1j60-0"})(["font-family:'Garamond';font-size:2.5rem;font-weight:700;"]),u=t(145),l=r.a.div.withConfig({displayName:"pages__HeaderWrapper",componentId:"sc-6kvjaa-0"})(["text-align:center;margin:3rem;padding:0.5rem;"]);n.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l,null,i.a.createElement(c,null,"Roman Numerals Converter")),i.a.createElement(u.a,null))}},142:function(e,n,t){var a;e.exports=(a=t(146))&&a.default||a},143:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return m});var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(140),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var l=t(142),d=t.n(l);t.d(n,"PageRenderer",function(){return d.a});var s=t(33);t.d(n,"parsePath",function(){return s.a});var p=i.a.createContext({}),m=function(e){return i.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(141).a.div.withConfig({displayName:"Body__StyledBody",componentId:"sc-188ibl6-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;margin:0;padding:0;width:100%;height:100vh;background-color:#314455;color:#97AABD;"]);n.a=function(e){return i.a.createElement(r,null,e.children)}},145:function(e,n,t){"use strict";t(48);var a=t(7),i=t.n(a),r=t(0),o=t.n(r),c=t(141),u=t(143),l=c.a.div.withConfig({displayName:"Navigation__NavigationContainer",componentId:"sc-1pfzmb8-0"})(["min-width:50%;"]),d=c.a.ul.withConfig({displayName:"Navigation__List",componentId:"sc-1pfzmb8-1"})(["list-style:none;padding:0;width:40%;margin:0 auto;text-align:center;@media (min-width:768px){max-width:20%;}"]),s=c.a.li.withConfig({displayName:"Navigation__NavItem",componentId:"sc-1pfzmb8-2"})(["padding:0.5rem;font-size:1.5rem;font-weight:700;text-align:center;display:inline-block;&:after{content:'';display:block;width:0;height:3px;background:#97AABD;transition:width .3s;top:5px;}&:hover::after{width:100%;}"]),p=Object(c.a)(u.Link).withConfig({displayName:"Navigation__StyledLink",componentId:"sc-1pfzmb8-3"})(["text-decoration:none;color:#97AABD;"]),m=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))||this).state={clicked:"/about/"},n}return i()(n,e),n.prototype.render=function(){return o.a.createElement(l,null,o.a.createElement(d,null,[{to:"/converter/",message:"Converter"},{to:"/about/",message:"About"},{to:"/",message:"Main Page"}].map(function(e,n){return o.a.createElement(s,{key:n},o.a.createElement(p,{to:e.to},e.message))})))},n}(r.Component);n.a=m},146:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),i=t.n(a),r=t(4),o=t.n(r),c=t(49),u=t(2),l=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-8aa056f4bcf238774599.js.map