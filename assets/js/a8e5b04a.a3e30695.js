(self.webpackChunkcomet_docs=self.webpackChunkcomet_docs||[]).push([[9746],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},728:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={sidebar_position:12,title:"transform | job"},l={unversionedId:"cli/transform",id:"cli/transform",isDocsHomePage:!1,title:"transform | job",description:"Synopsis",source:"@site/docs/cli/transform.md",sourceDirName:"cli",slug:"/cli/transform",permalink:"/comet-data-pipeline/docs/cli/transform",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/cli/transform.md",version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"transform | job"},sidebar:"cometSidebar",previous:{title:"extract",permalink:"/comet-data-pipeline/docs/cli/extract"},next:{title:"watch",permalink:"/comet-data-pipeline/docs/cli/watch"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:p};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"comet transform | job ","[options]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Cardinality"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--name:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"Job Name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--views:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"view1,view2 ...",(0,i.kt)("br",null),"If present only the request present in these views statements are run. Useful for unit testing",(0,i.kt)("br",null))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--views-dir:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Where to store the result of the query in JSON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--views-count:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Max number of rows to retrieve. Negative value means the maximum value 2147483647")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--options:",(0,i.kt)("inlineCode",{parentName:"td"},"k1=v1,k2=v2...")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Job arguments to be used as substitutions")))))}s.isMDXComponent=!0}}]);