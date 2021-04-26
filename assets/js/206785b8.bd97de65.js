(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=p(a),s=n,d=m["".concat(i,".").concat(s)]||m[s]||u[s]||l;return a?r.a.createElement(d,c(c({ref:t},b),{},{components:a})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(128)),i={sidebar_position:11,title:"extract"},c={unversionedId:"cli/extract",id:"cli/extract",isDocsHomePage:!1,title:"extract",description:"Synopsis",source:"@site/docs/cli/extract.md",sourceDirName:"cli",slug:"/cli/extract",permalink:"/comet-data-pipeline/docs/cli/extract",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/cli/extract.md",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"extract"},sidebar:"cometSidebar",previous:{title:"ddl2yml",permalink:"/comet-data-pipeline/docs/cli/ddl2yml"},next:{title:"transform | job",permalink:"/comet-data-pipeline/docs/cli/transform"}},o=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],b={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"synopsis"},"Synopsis"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"comet extract ","[options]")),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"For domain extraction, the schemas should at least, specify :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"a table name (schemas.name)"),Object(l.b)("li",{parentName:"ul"},"a file pattern (schemas.pattern) which is used as the export file base name"),Object(l.b)("li",{parentName:"ul"},"a write mode (schemas.metadata.write): APPEND or OVERWRITE"),Object(l.b)("li",{parentName:"ul"},"a delta column (schemas.merge.timestamp) if in APPEND mode : the default column which is used to determine new rows for each exports"),Object(l.b)("li",{parentName:"ul"},"the columns to extract (schemas.attributes.name*)")),Object(l.b)("p",null,"You also have to provide a Mustache (",Object(l.b)("a",{parentName:"p",href:"http://mustache.github.io/mustache.5.html"},"http://mustache.github.io/mustache.5.html"),") template file."),Object(l.b)("p",null,"In there you'll write your extraction export process (sqlplus for Oracle, pgsql for PostgreSQL as an example).\nIn that template you can use the following parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"table_name  -> the table to export"),Object(l.b)("li",{parentName:"ul"},"delimiter   -> the resulting dsv file delimiter"),Object(l.b)("li",{parentName:"ul"},"columns     -> the columns to export\ncolumns is a Mustache map, it gives you access, for each column, to:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"name               -> the column name"),Object(l.b)("li",{parentName:"ul"},'trailing_col_char  -> the separator to append to the column (, if there are more columns to come, "" otherwise)\nHere is an example how to use it in a template:')))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"                              SELECT\n                              {{#columns}}\n                              TO_CHAR({{name}}){{trailing_col_char}}\n                              {{/columns}}\n                              FROM\n                              {{table_name}};\n")),Object(l.b)("p",null," export_file -> the export file name\nfull_export -> if the export is a full or delta export (the logic is to be implemented in your script)"),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Cardinality"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--script-gen:",Object(l.b)("inlineCode",{parentName:"td"},"<value>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Optional")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--domain:",Object(l.b)("inlineCode",{parentName:"td"},"domain1,domain2 ...")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Optional")),Object(l.b)("td",{parentName:"tr",align:null},"The domain list for which to generate extract scripts")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--job:",Object(l.b)("inlineCode",{parentName:"td"},"job1,job2 ...")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Optional")),Object(l.b)("td",{parentName:"tr",align:null},"The jobs you want to load. use '*' to load all jobs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--templateFile:",Object(l.b)("inlineCode",{parentName:"td"},"<value>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Required")),Object(l.b)("td",{parentName:"tr",align:null},"Script template file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--scriptsOutputDir:",Object(l.b)("inlineCode",{parentName:"td"},"<value>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Required")),Object(l.b)("td",{parentName:"tr",align:null},"Scripts output folder")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--deltaColumn:",Object(l.b)("inlineCode",{parentName:"td"},"<value>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Optional")),Object(l.b)("td",{parentName:"tr",align:null},"The default date column used to determine new rows to export. Overrides config database-extractor.default-column value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--scriptsOutputPattern:",Object(l.b)("inlineCode",{parentName:"td"},"<value>")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"Optional")),Object(l.b)("td",{parentName:"tr",align:null},"Default output file pattern name",Object(l.b)("br",null),"the following variables are allowed.",Object(l.b)("br",null),"When applied to a domain:",Object(l.b)("br",null),"  - {{domain}}: domain name",Object(l.b)("br",null),"  - {{schema}}: Schema name",Object(l.b)("br",null),"  By default : EXTRACT_{{schema}}.sql",Object(l.b)("br",null),"When applied to a job:",Object(l.b)("br",null),"  - {{job}}: job name",Object(l.b)("br",null),"  By default: {{job}}.py",Object(l.b)("br",null))))))}p.isMDXComponent=!0}}]);