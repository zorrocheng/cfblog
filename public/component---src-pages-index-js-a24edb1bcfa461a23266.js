webpackJsonp([35783957827783],{237:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.IndexQuery=void 0;var i=n(4),f=o(i),d=n(70),s=o(d),c=n(6),p=r(c),m=n(44),h=n(69),y=o(h),g={data:p.object.isRequired},E=function(e){var t=e.node;return f.default.createElement("div",null,f.default.createElement(s.default,{style:{color:"inherit",textDecoration:"none"},to:"/posts/"+t.id+"/"},f.default.createElement("div",{style:{display:"flex",alignItems:"center",borderBottom:"1px solid lightgray",paddingBottom:(0,m.rhythm)(.5),marginBottom:(0,m.rhythm)(.5)}},f.default.createElement("div",{style:{marginRight:(0,m.rhythm)(.5)}},t.featuredImage.resolutions.src&&f.default.createElement(y.default,{style:{margin:0},resolutions:t.featuredImage.resolutions})),f.default.createElement("div",{style:{flex:1}},t.childContentfulPostTitleTextNode.title))))},b=function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.allContentfulPost.edges;return f.default.createElement("div",{style:{marginBottom:(0,m.rhythm)(2)}},f.default.createElement("h1",null,"Frontpage Title"),f.default.createElement("h2",null,"Header 2"),f.default.createElement("p",null,"The paragraph is here"),f.default.createElement("br",null),f.default.createElement("h3",null,"Post List"),e.map(function(e,t){var n=e.node;return f.default.createElement(E,{node:n,key:n.id})}))},t}(f.default.Component);b.propTypes=g,t.default=b;t.IndexQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-a24edb1bcfa461a23266.js.map