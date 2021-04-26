(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,u=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return n?a.a.createElement(u,o(o({ref:t},p),{},{components:n})):a.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(128)),c={sidebar_position:13,title:"watch"},o={unversionedId:"cli/watch",id:"cli/watch",isDocsHomePage:!1,title:"watch",description:"Synopsis",source:"@site/docs/cli/watch.md",sourceDirName:"cli",slug:"/cli/watch",permalink:"/comet-data-pipeline/docs/cli/watch",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/cli/watch.md",version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"watch"},sidebar:"cometSidebar",previous:{title:"transform | job",permalink:"/comet-data-pipeline/docs/cli/transform"},next:{title:"kafkaload",permalink:"/comet-data-pipeline/docs/cli/kafkaload"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"comet watch ","[options]")),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Cardinality"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--include:",Object(i.b)("inlineCode",{parentName:"td"},"domain1,domain2...")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Domains to watch")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--exclude:",Object(i.b)("inlineCode",{parentName:"td"},"domain1,domain2...")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Domains not to watch")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--schemas:",Object(i.b)("inlineCode",{parentName:"td"},"schema1,schema2,schema3...")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Schemas to watch")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--options:",Object(i.b)("inlineCode",{parentName:"td"},"k1=v1,k2=v2...")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"Watch arguments to be used as substitutions")))))}b.isMDXComponent=!0}}]);