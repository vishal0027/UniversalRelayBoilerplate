webpackJsonp([8],{1178:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(297),s=r(i),c=n(67),f=n(0),p=r(f),d=n(47),y=n(38),m=r(y),b=n(509),h=r(b),w=n(469),_=r(w),g=function(e){return{card:{minWidth:275}}},O=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.classes;return e.Viewer.User_IsAnonymous?p.default.createElement(h.default,null):p.default.createElement(_.default,null,p.default.createElement(s.default,{className:t.card},p.default.createElement(i.CardHeader,{title:"Only Authorized",subheader:"Only users who log in see this."}),p.default.createElement(i.CardContent,null,p.default.createElement(m.default,{paragraph:!0},"Content seen by authorized users"))))}}]),t}(p.default.Component);O.propTypes={},t.default=(0,d.createFragmentContainer)((0,c.withStyles)(g)(O),{Viewer:function(){return n(1496)}})},1496:function(e,t,n){"use strict";var r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ForceLogin_Viewer",selections:[{kind:"ScalarField",alias:null,args:null,name:"User_IsAnonymous",storageKey:null}],type:"Viewer"};e.exports=r}});