(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(141),o=n(146),l=n(145),u=(n(75),n(48),n(7)),c=n.n(u),s=r.a.div.withConfig({displayName:"ResultDisplay__ResultTab",componentId:"ggenkl-0"})(["font-size:4vh;letter-spacing:0.5rem;text-indent:0.5rem;font-weight:900;"]),d=function(e){return i.a.createElement(s,null,i.a.createElement("p",null,e.result?e.result:""))},m=Object(r.b)(["0%{opacity:0;}100%{opacity:1;}"]),p=r.a.div.withConfig({displayName:"Toast__Toastr",componentId:"sc-1qd469n-0"})(["height:0px;width:90%;background:#644E5B;border-radius:0.5rem;border-left:1rem solid #C96567;line-height:50px;color:#000;position:fixed;top:5%;right:50%;transform:translateX(50%);opacity:0;visibility:hidden;animation-name:",";animation-duration:0.5s;animation-timing-function:ease-in-out;animation-delay:0s;animation-iteration-count:1;letter-spacing:2px;text-transform:uppercase;@media (min-width:768px){width:40%;}"],m),f=Object(r.a)(p).withConfig({displayName:"Toast__ToastrShown",componentId:"sc-1qd469n-1"})(["opacity:1;visibility:visible;height:50px;color:#fff;font-weight:700;font-size:1.5rem;"]),h=function(e){return e?i.a.createElement(f,null,e.alertText):null},g=r.a.button.withConfig({displayName:"MainPanel__ButtonConvert",componentId:"jo9dao-0"})(["background:#97AABD;display:block;border:2px solid transparent;border-radius:15px;padding:0.5rem 2rem;margin:2rem auto;outline:none;font-size:1rem;text-transform:uppercase;font-family:'Garamond';font-weight:700;:hover{background:#314455;color:#97AABD;border:2px solid #97AABD;}"]),y=r.a.div.withConfig({displayName:"MainPanel__InputPanel",componentId:"jo9dao-1"})(["text-align:center;min-height:25%;margin-top:2rem;"]),b=r.a.input.withConfig({displayName:"MainPanel__StyledInput",componentId:"jo9dao-2"})(["padding:0.5rem;border:none;transition:box-shadow 0.3s;border-radius:0.5rem;font-size:1.5rem;&:focus{outline:none;box-shadow:0.4rem 0.4rem 0.75rem #000;}"]),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={input:"",result:"",alert:""},t.handleChange=function(e){t.setState({input:e.target.value})},t.handleConvert=function(){var e=parseInt(t.state.input);t.validateInput(e)},t.handleDisplayResult=function(e){t.setState({result:t.convertNumber(e)})},t.convertNumber=function(e){var t=[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1e3,2e3,3e3,4e3],n=["I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M","MM","MMM","MMMM"];return[1e3*Math.floor(e/1e3),100*Math.floor(e%1e3/100),10*Math.floor(e%100/10),e%10].map(function(e){return n[t.indexOf(e)]}).join("")},t.validateInput=function(e){return e?e>4999?t.handleError("Max number is 4999"):t.handleDisplayResult(e):t.handleError("Type at least one digit")},t.handleError=function(e){clearTimeout(n),t.setState({input:"",alert:e});var n=setTimeout(function(){return t.setState({alert:""})},5e3)},t}return c()(t,e),t.prototype.render=function(){return i.a.createElement(y,null,i.a.createElement(b,{placeholder:"Type a number",onChange:this.handleChange,value:this.state.input,type:"text"}),i.a.createElement(g,{onClick:this.handleConvert},"Convert"),i.a.createElement(d,{result:this.state.result}),this.state.alert?i.a.createElement(h,{alertText:this.state.alert}):null)},t}(a.Component),w=n(147),C=r.a.div.withConfig({displayName:"converter__HeaderWrapper",componentId:"sc-1bqzsm4-0"})(["text-align:center;"]),x=r.a.hr.withConfig({displayName:"converter__Line",componentId:"sc-1bqzsm4-1"})(["display:block;margin-top:0.5em;margin-bottom:0.5em;margin-left:auto;margin-right:auto;border-style:inset;border-width:1px;width:15%;"]);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(C,null,i.a.createElement(l.a,null,"Type a number here")),i.a.createElement(v,null),i.a.createElement(x,null),i.a.createElement(w.a,null))}},142:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(140),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(142),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(49),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},145:function(e,t,n){"use strict";var a=n(141).a.h1.withConfig({displayName:"header__StyledHeader",componentId:"sc-1qi1j60-0"})(["font-family:'Garamond';font-size:2.5rem;font-weight:700;"]);t.a=a},146:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(141).a.div.withConfig({displayName:"Body__StyledBody",componentId:"sc-188ibl6-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;margin:0;padding:0;width:100%;height:100vh;background-color:#314455;color:#97AABD;"]);t.a=function(e){return i.a.createElement(r,null,e.children)}},147:function(e,t,n){"use strict";n(48);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(141),u=n(143),c=l.a.div.withConfig({displayName:"Navigation__NavigationContainer",componentId:"sc-1pfzmb8-0"})(["min-width:50%;"]),s=l.a.ul.withConfig({displayName:"Navigation__List",componentId:"sc-1pfzmb8-1"})(["list-style:none;padding:0;width:40%;margin:0 auto;text-align:center;@media (min-width:768px){max-width:20%;}"]),d=l.a.li.withConfig({displayName:"Navigation__NavItem",componentId:"sc-1pfzmb8-2"})(["padding:0.5rem;font-size:1.5rem;font-weight:700;text-align:center;display:inline-block;&:after{content:'';display:block;width:0;height:3px;background:#97AABD;transition:width .3s;top:5px;}&:hover::after{width:100%;}"]),m=Object(l.a)(u.Link).withConfig({displayName:"Navigation__StyledLink",componentId:"sc-1pfzmb8-3"})(["text-decoration:none;color:#97AABD;"]),p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={clicked:"/about/"},t}return i()(t,e),t.prototype.render=function(){return o.a.createElement(c,null,o.a.createElement(s,null,[{to:"/converter/",message:"Converter"},{to:"/about/",message:"About"},{to:"/",message:"Main Page"}].map(function(e,t){return o.a.createElement(d,{key:t},o.a.createElement(m,{to:e.to},e.message))})))},t}(r.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-converter-js-88c23276e9f9b080dd09.js.map