webpackJsonp([0xb1abc741118f],{239:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.postQuery=void 0;var i=n(4),f=l(i),c=n(70),d=l(c),s=n(6),p=r(s),y=n(69),m=l(y),h=n(44),b={data:p.object.isRequired},E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.contentfulPost,t=e.childContentfulPostTitleTextNode.title,n=e.childContentfulPostBodyTextNode.body,r=e.featuredImage,l=e.category;return f.default.createElement("div",null,f.default.createElement("div",{style:{display:"flex",alignItems:"center"}},f.default.createElement(m.default,{resolutions:r.resolutions}),f.default.createElement("h2",{style:{paddingLeft:(0,h.rhythm)(2)}},t)),f.default.createElement("br",null),f.default.createElement("div",null,f.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),f.default.createElement("div",null,f.default.createElement("span",null,"See other: "),f.default.createElement("ul",null,l.map(function(e,t){return f.default.createElement("li",{key:t},f.default.createElement(d.default,{key:t,to:"/categories/"+e.id},e.title))})))))},t}(f.default.Component);E.propTypes=b,t.default=E;t.postQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-js-e31c454bb9e8ad974494.js.map