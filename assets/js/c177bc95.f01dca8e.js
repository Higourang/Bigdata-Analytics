(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(128)),l={sidebar_position:30,title:"ddl2yml"},o={unversionedId:"cli/ddl2yml",id:"cli/ddl2yml",isDocsHomePage:!1,title:"ddl2yml",description:"Synopsis",source:"@site/docs/cli/ddl2yml.md",sourceDirName:"cli",slug:"/cli/ddl2yml",permalink:"/comet-data-pipeline/docs/cli/ddl2yml",editUrl:"https://github.com/ebiznext/comet-data-pipeline/master/website/docs/cli/ddl2yml.md",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"ddl2yml"},sidebar:"cometSidebar",previous:{title:"cnxload",permalink:"/comet-data-pipeline/docs/cli/cnxload"},next:{title:"esload | index",permalink:"/comet-data-pipeline/docs/cli/esload"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],p={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"comet ddl2yml ","[options]")),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Parameter"),Object(i.b)("th",{parentName:"tr",align:null},"Cardinality"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--jdbc-mapping:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Required")),Object(i.b)("td",{parentName:"tr",align:null},"Database tables & connection info")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--output-dir:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Required")),Object(i.b)("td",{parentName:"tr",align:null},"Where to output YML files")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"--yml-template:",Object(i.b)("inlineCode",{parentName:"td"},"<value>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Optional")),Object(i.b)("td",{parentName:"tr",align:null},"YML template to use YML metadata")))))}d.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=d(n),m=r,s=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(s,o(o({ref:t},p),{},{components:n})):a.a.createElement(s,o({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);