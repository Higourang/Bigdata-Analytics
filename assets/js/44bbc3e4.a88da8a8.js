(self.webpackChunkcomet_docs=self.webpackChunkcomet_docs||[]).push([[3110],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6512:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={sidebar_position:8,title:"cnxload"},l={unversionedId:"cli/cnxload",id:"cli/cnxload",isDocsHomePage:!1,title:"cnxload",description:"Synopsis",source:"@site/docs/cli/cnxload.md",sourceDirName:"cli",slug:"/cli/cnxload",permalink:"/comet-data-pipeline/docs/cli/cnxload",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/cli/cnxload.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"cnxload"},sidebar:"cometSidebar",previous:{title:"parquet2csv",permalink:"/comet-data-pipeline/docs/cli/parquet2csv"},next:{title:"xls2yml",permalink:"/comet-data-pipeline/docs/cli/xls2yml"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"comet cnxload ","[options]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Cardinality"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--source_file:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"Full Path to source file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--output_table:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"JDBC Output Table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--options:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Connection options eq for jdbc : driver, user, password, url, partitions, batchSize")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--create_disposition:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Big Query Create disposition ",(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/CreateDisposition"},"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/CreateDisposition"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--write_disposition:",(0,i.kt)("inlineCode",{parentName:"td"},"<value>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Big Query Write disposition ",(0,i.kt)("a",{parentName:"td",href:"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/WriteDisposition"},"https://cloud.google.com/bigquery/docs/reference/auditlogs/rest/Shared.Types/WriteDisposition"))))))}d.isMDXComponent=!0}}]);