(self.webpackChunkcomet_docs=self.webpackChunkcomet_docs||[]).push([[9734],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9133:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i={sidebar_position:20,title:"Load"},s={unversionedId:"reference/load",id:"reference/load",isDocsHomePage:!1,title:"Load",description:"Domain",source:"@site/docs/reference/load.md",sourceDirName:"reference",slug:"/reference/load",permalink:"/comet-data-pipeline/docs/reference/load",editUrl:"https://github.com/ebiznext/comet-data-pipeline/edit/master/docs/docs/reference/load.md",version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Load"},sidebar:"cometSidebar",previous:{title:"Extract",permalink:"/comet-data-pipeline/docs/reference/extract"},next:{title:"Transform",permalink:"/comet-data-pipeline/docs/reference/transform"}},o=[{value:"Domain",id:"domain",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Attribute",id:"attribute",children:[]},{value:"Sink",id:"sink",children:[{value:"BigQuerySink",id:"bigquerysink",children:[]},{value:"EsSink",id:"essink",children:[]},{value:"JdbcSink",id:"jdbcsink",children:[]}]},{value:"KafkaSink",id:"kafkasink",children:[]},{value:"RowLevelSecurity",id:"rowlevelsecurity",children:[]}],p={toc:o};function u(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"domain"},"Domain"),(0,r.kt)("p",null,"Let's say you are willing to import customers and orders from your Sales system.\nSales is therefore the domain and customer & order are your datasets."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In a DBMS, a Domain would be implemented by a DBMS  schema and a dataset by a DBMS table."),(0,r.kt)("li",{parentName:"ul"},"In BigQuery, the domain name would be the Big Query dataset name, and the dataset would be implemented by a Big Query table.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"name: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". Domain name. Make sure you use a name that may be used as a folder name on the target storage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When using HDFS or Cloud Storage,  files once ingested are stored in a sub-directory oof a directory named after the domain name."),(0,r.kt)("li",{parentName:"ul"},"When used with BigQuery, files are ingested and sorted in tables under a dataset named after the domain name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"directory: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),'. Folder on the local filesystem where incoming files are stored.\nTypically, this folder will be scanned periodically to move the dataset to the cluster for ingestion.\nFiles located in this folder are moved to the pending folder for ingestion by the "import" command.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"metadata: Metadata\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Default Schema metadata.\nThis metadata is applied to the schemas defined in this domain.\nMetadata properties may be redefined at the schema level.\nSee Metadata Entity for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"schemas: List[Schema]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". List of schemas for each dataset in this domain\nA domain usually contains multiple schemas. Each schema defining how the contents of the input file should be parsed.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#schema"},"Schema")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"comment: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Domain Description (free text)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"extensions: List[String]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Recognized filename extensions. json, csv, dsv, psv are recognized by default\nOnly files with these extensions will be moved to the pending folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ack: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),'.\nAck extension used for each file.\nFiles are moved to the pending folder only once a file with the same name as the source file and with this extension is present.\nTo move a file without requiring an ack file to be present, set explicitly this property to the empty string value "".'),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"name: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". Schema name, must be unique among all the schemas belonging to the same domain.\nWill become a hive table name On Premise or BigQuery table name on GCP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"pattern: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". Filename pattern to which this schema must be applied. This may be any Java Regex\nThis instructs the framework to use this schema to parse any file with a filename that match this pattern."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"primaryKey: List[String]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". List of attributes that make up the primary key of this table.\nThis setting is just for documentation purpose and graphviz generation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"attributes: List[Attribute]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". Attributes parsing rules.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#attribute"},"Attributes")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"metadata: Metadata\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Dataset metadata\nSee ",(0,r.kt)("a",{parentName:"p",href:"#metadata"},"Metadata")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"comment: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Free text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"presql: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Reserved for future use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"postsql: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Reserved for future use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"tags: Set[String]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Set of string to attach to this Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"rls: List[RowLevelSecurity]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Experimental. Row level security to apply to this schema once it is ingested.\nThis usually execute a set on grants by applying a predicate filter to restrict\naccess to a subset of the rows in the table.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#rowlevelsecurity"},"Row Level Security")," for more details"),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Specify Schema properties.\nThese properties may be specified at the schema or domain level\nAny property not specified at the schema level is taken from the\none specified at the domain level or else the default value is returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"mode: Enum\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". FILE mode by default. FILE and STREAM are the two accepted values. FILE is currently the only supported mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"format: Enum\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". DSV by default. Supported file formats are :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'DSV : Delimiter-separated values file. Delimiter value iss specified in the "separator" field.'),(0,r.kt)("li",{parentName:"ul"},"POSITION : FIXED format file where values are located at an exact position in each line."),(0,r.kt)("li",{parentName:"ul"},"SIMPLE_JSON : For optimisation purpose, we differentiate JSON with top level values from JSON with deep level fields. SIMPLE_JSON are JSON files with top level fields only."),(0,r.kt)("li",{parentName:"ul"},"JSON :  Deep JSON file. Use only when your json documents contain subdocuments, otherwise prefer to use SIMPLE_JSON since it is much faster."),(0,r.kt)("li",{parentName:"ul"},"XML : For XML files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"encoding: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". UTF-8 if not specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"multiline: Boolean\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Are json objects on a single line or multiple line ? Single by default.  false means single. false also means faster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"array: Boolean\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Is the json stored as a single object array ? false by default. This means that by default we have on json document per line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"withHeader: Boolean\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". When the input file is in the DSV file format, does the dataset has a header ? true bu default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"separator: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". When the input file is in the DSV file format, yhiss field contains the values delimiter,  ';' by default value may be a multichar string starting from Spark 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"quote: Char\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". The String quote char, '\"' by default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"escape: Char\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Escaping char '\\' by default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"write: Enum\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Write mode, APPEND by default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"partition: List[String]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Partition columns, no partitioning by default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sink: Sink\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Should the dataset be indexed to this sink ?\nSee ",(0,r.kt)("a",{parentName:"p",href:"#sink"},"Sink")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ignore: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". Pattern to ignore or UDF to apply to ignore some lines"),(0,r.kt)("h2",{id:"attribute"},"Attribute"),(0,r.kt)("p",null,'A field in the schema. For struct fields, the field "attributes" contains all sub attributes'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"name: String\n")),(0,r.kt)("p",null,"Attribute name as defined in the source dataset and as received in the file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type: String\n")),(0,r.kt)("p",null,"Semantic type of the attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"array: Boolean\n")),(0,r.kt)("p",null,"Is it an array ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"required: Boolean\n")),(0,r.kt)("p",null,"Should this attribute always be present in the source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"privacy:PrivacyLevel\n")),(0,r.kt)("p",null,"Should this attribute be applied a privacy transformation at ingestion time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"comment: String\n")),(0,r.kt)("p",null,"free text for attribute description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"rename: String\n")),(0,r.kt)("p",null,"If present, the attribute is renamed with this name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"metricType:MetricType\n")),(0,r.kt)("p",null,"If present, what kind of stat should be computed for this field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"attributes: List[Attribute]\n")),(0,r.kt)("p",null,"List of sub-attributes (valid for JSON and XML files only)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"position: Position\n")),(0,r.kt)("p",null,"Valid only when file format is POSITION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"default: String\n")),(0,r.kt)("p",null,"Default value for this attribute when it is not present."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"foreignKey: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Optional"),". reference to a column or a table in the format ","[domain.]","table","[.attribute]",".\nUsed for documentation purpose and graphviz generation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"tags:Set[String]\n")),(0,r.kt)("p",null,"Tags associated with this attribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trim: Trim\n")),(0,r.kt)("p",null,"Should we trim the attribute value ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"script: String\n")),(0,r.kt)("p",null,"Scripted field : SQL request on renamed column"),(0,r.kt)("h2",{id:"sink"},"Sink"),(0,r.kt)("p",null,"Once ingested, files may be sinked to BigQuery, Kafka, Elasticsearch or any JDBC compliant Database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type: Enum\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDBC : dataset will be sinked to a JDBC Database. See JdbcSink below"),(0,r.kt)("li",{parentName:"ul"},"ES : dataset is indexed into Elasticsearch. See EsSink below"),(0,r.kt)("li",{parentName:"ul"},"BQ : Dataset is sinked to BigQuery. See BigQuerySink below"),(0,r.kt)("li",{parentName:"ul"},"KAFKA: Dataset is sinked to a Kafka topic.  See KafkaSink below"),(0,r.kt)("li",{parentName:"ul"},"None: Don't sink. This is the default.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"name: String\n")),(0,r.kt)("p",null,"This optional name is used when the configuration is specified in the application.conf file instead of inline in the YAML file.\nThis is useful when the same sink parameters are used for different datasets."),(0,r.kt)("h3",{id:"bigquerysink"},"BigQuerySink"),(0,r.kt)("p",null,"When the sink type field is set to BQ, the options below should be provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"location: String\n")),(0,r.kt)("p",null,"Database location (EU, US, ...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"timestamp: String\n")),(0,r.kt)("p",null,"The timestamp column to use for table partitioning if any. No partitioning by default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"clustering: List[String]\n")),(0,r.kt)("p",null,"List of ordered columns to use for table clustering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"days: Int\n")),(0,r.kt)("p",null,"Number of days before this table is set as expired and deleted. Never by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"requirePartitionFilter: Boolean\n")),(0,r.kt)("p",null,"Should be require a partition filter on every request ? No by default."),(0,r.kt)("h3",{id:"essink"},"EsSink"),(0,r.kt)("p",null,"When the sink ",(0,r.kt)("em",{parentName:"p"},"type")," field is set to ES, the options below should be provided.\nElasticsearch options are specified in the application.conf file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"id: String\n")),(0,r.kt)("p",null,"Attribute to use as id of the document. Generated by Elasticseach if not specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"timestamp: String\n")),(0,r.kt)("p",null,'Timestamp field format as expected by Elasticsearch ("{beginTs|yyyy.MM.dd}" for example).'),(0,r.kt)("h3",{id:"jdbcsink"},"JdbcSink"),(0,r.kt)("p",null,"When the sink ",(0,r.kt)("em",{parentName:"p"},"type")," field is set to JDBC, the options below should be provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"connection: String\n")),(0,r.kt)("p",null,"The JDBC Connection String. Specific to the target JDBC database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"partitions: Int\n")),(0,r.kt)("p",null,"Number of Spark partitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"batchsize: Int\n")),(0,r.kt)("p",null,"Batch size of each JDBC bulk insert"),(0,r.kt)("h2",{id:"kafkasink"},"KafkaSink"),(0,r.kt)("p",null,"When the sink ",(0,r.kt)("em",{parentName:"p"},"type")," field is set to KAFKA, you just need to set the name field to configuration name defined in the application.conf.\nPlease refer to ",(0,r.kt)("a",{parentName:"p",href:"/comet-data-pipeline/docs/reference/configuration#kafka"},"this section")," to understand how kafka sink are defined in the configuration file."),(0,r.kt)("h2",{id:"rowlevelsecurity"},"RowLevelSecurity"),(0,r.kt)("p",null,"User / Group and Service accounts rights on a subset of the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"name: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". This Row Level Security unique name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"predicate: String\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". The condition that goes to the WHERE clause and limitt the visible rows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"grants: List[String]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Required"),". user / groups / service accounts to which this security level is applied.\nFor example: user:",(0,r.kt)("a",{parentName:"p",href:"mailto:me@mycompany.com"},"me@mycompany.com"),",group:",(0,r.kt)("a",{parentName:"p",href:"mailto:group@mycompany.com"},"group@mycompany.com"),",serviceAccount:",(0,r.kt)("a",{parentName:"p",href:"mailto:mysa@google-accounts.com"},"mysa@google-accounts.com")))}u.isMDXComponent=!0}}]);