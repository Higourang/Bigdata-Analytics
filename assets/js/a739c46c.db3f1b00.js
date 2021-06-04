(self.webpackChunkcomet_docs=self.webpackChunkcomet_docs||[]).push([[1693],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6347:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={sidebar_position:10},c={unversionedId:"reference/extract",id:"reference/extract",isDocsHomePage:!1,title:"Extract",description:"This step is optional and useful only if you intend to extract data from a SQL Database into",source:"@site/docs/reference/extract.md",sourceDirName:"reference",slug:"/reference/extract",permalink:"/comet-data-pipeline/docs/reference/extract",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/reference/extract.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"cometSidebar",previous:{title:"Environment",permalink:"/comet-data-pipeline/docs/reference/environment"},next:{title:"Load",permalink:"/comet-data-pipeline/docs/reference/load"}},l=[],s={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This step is optional and useful only if you intend to extract data from a SQL Database into\na set of files before ingesting it into a datalake or data warehouse."),(0,o.kt)("p",null,"To extract the tables into DSV files, create a YAML specification file\nthat describe the tables and columns you are willing to extract using the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'extract:\n    jdbcSchemas:\n        - connection: "test-h2" # Connection name as defined in the connections section of the application.conf file\n          catalog: "business" # Optional catalog name in the target database\n          schema: "public" # Database schema where tables are located\n          tables:\n            - name: "user"\n              columns: # optional list of columns, if not present all columns should be exported.\n                - id\n                - email\n            - name: product # All columns should be exported\n            - name: "*" # Ignore any other table spec. Just export all tables\n          tableTypes: # One or many of the types below\n            - "TABLE"\n            - "VIEW"\n            - "SYSTEM TABLE"\n            - "GLOBAL TEMPORARY"\n            - "LOCAL TEMPORARY"\n            - "ALIAS"\n            - "SYNONYM"\n          template: "/my-templates/domain-template.yml" # Metadata to use for the generated YML file.\n')),(0,o.kt)("p",null,'To extract all the tables, simply set the "name" attribute to "*"'),(0,o.kt)("p",null,"To import all the columns of a table, do not define the columns attribute."),(0,o.kt)("p",null,"This will generate a YML file with the metadata section."),(0,o.kt)("p",null,"Then you can ",(0,o.kt)("a",{parentName:"p",href:"/comet-data-pipeline/docs/howto/extract"},"extract the data"),"."),(0,o.kt)("p",null,"Once data are extracted you can proceed to the ",(0,o.kt)("a",{parentName:"p",href:"/comet-data-pipeline/docs/howto/load"},"load step"),"."))}p.isMDXComponent=!0}}]);