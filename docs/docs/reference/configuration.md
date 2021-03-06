---
sidebar_position: 1
title: Configuration
---

Comet Data Pipeline is written using Scala / Spark and is thus run using the spark-submit command.

To run it with the default configuration, you simply launch it as follows :
```shell
SPARK_HOME/bin/spark-submit --class com.ebiznext.comet.job.Main ../bin/comet-spark3_2.12-VERSION-assembly.jar COMMAND [ARGS]
```

* SPARK_HOME: Spark home directory
* COMMAND: Any of the command described in the CLI section followed by optional arguments
* ARGS: Option list of command arguments

## Configuration

### application.conf
You may also pass any Spark arguments as usual but also pass a custom `application.conf` file
using the [HOCON](https://github.com/lightbend/config) syntax  that supersedes the default Comet Data Pipeline settings.
default settings are found in the [reference.conf](https://github.com/ebiznext/comet-data-pipeline/blob/master/src/main/resources/reference.conf)
and [reference-*.conf](https://github.com/ebiznext/comet-data-pipeline/blob/master/src/main/resources) files. In your `application.conf`file you only
need to redefine the variables you want to customize.

Some of those configurations may also be redefined through environment variables.
* In client mode: To pass those env vars, simply export / set them before calling spark-submmit.
* In cluster mode, you need to pass them as extra driver options.

Passing the `application.conf` file to the spark job use the syntax below:

```shell
export CUSTOM_OPTIONS="--conf spark.driver.extraJavaOptions=-Dconfig.file=$PWD/application.conf"
SPARK_HOME/bin/spark-submit $CUSTOM_OPTIONS --class com.ebiznext.comet.job.Main ../bin/comet-spark3_2.12-VERSION-assembly.jar COMMAND [ARGS]
```
### Environment variables

* On Premise: To pass Comet Data Pipeline env vars in cluster mode, you'll have to put them in the spark-defaults.conf file or pass them as arguments to your
  Spark job as described in this [article](https://stackoverflow.com/questions/37887168/how-to-pass-environment-variables-to-spark-driver-in-cluster-mode-with-spark-sub)

* On Google Cloud: To make it available for all your jobs, you need to pass them in the `DataprocClusterCreateOperator` using the `spark-env:`prefix
  as described in the example below:

```python
    create_cluster = DataprocClusterCreateOperator(
        task_id='create_dataproc_cluster',
        cluster_name=CLUSTER_NAME,
        num_workers= '${dataproc_cluster_size}',
        zone=ZONE,
        region="${region}",
        tags = ["dataproc"],
        storage_bucket = "dataproc-${project_id}",
        image_version='2.0.1-debian10',
        master_machine_type=MASTER_MACHINE_TYPE,
        worker_machine_type=WORKER_MACHINE_TYPE,
        service_account = "${service_account}",
        internal_ip_only = True,
        subnetwork_uri = "projects/${project_id}/regions/${region}/subnetworks/${subnet}",
        properties = {
            "spark-env:COMET_FS": "gs://${my_bucket}",
            "spark-env:COMET_HIVE": "false",
            "spark-env:COMET_GROUPED": "false",
            "spark-env:COMET_AUDIT_SINK_TYPE": "BigQuerySink"
            }
    )
```

In the example above, the variables are available in all the tasks that will be started on this cluster.

To set variables for specific tasks only, use a syntax similar to this one:
```python
t1 = dataproc_operator.DataProcSparkOperator(
  task_id ='my_task',
  dataproc_spark_jars='gs://my-bucket/comet-spark3_2.12-VERSION-assembly.jar',
  cluster_name='cluster',
  main_class = 'com.ebiznext.comet.job.Main',
  arguments=['import'],
  project_id='my-project-id',
  dataproc_spark_properties={'spark.driver.extraJavaOptions':'-DCOMET_FS=gs://${my_bucket} -DCOMET_HIVE=false -DCOMET_GROUPED=false'},
  dag=dag)
```

## Configuration sections
### Filesystem

A filesystem is the location where datasets and Comet Data Pipeline metadata used for ingestion are stored.
* On premise this reference the folder where datasets and metadata are stored, eq.
  * On a local filesystem: file://
  * On a HDFS: hdfs://localhost:9000
* In the cloud:
  * On Google Cloud Platform: gs://my-bucket
  * On Microsoft Azure: abfs://my-bucket@comet.dfs.core.windows.net
  * On Amazon Web Service: s3a://my_bucket
  
By default, Comet expect metadata in the /tmp/metadata folder and will store ingested datasets in the /tmp/datasets folder.
Below is how the folders look like by default for the provided quickstart sample.

````
    /tmp
    |-- datasets (Root folder of ingested datasets)
    |   |-- accepted (Root folder of all valid records)
    |   |   |-- hr (domain name as specified in the name attribute of the /tmp/metadata/hr.yml)
    |   |   |   `-- sellers (Schema name as specified in the /tmp/metadata/hr.yml)
    |   |   |       |-- _SUCCESS
    |   |   |       `-- part-00000-292c081b-7291-4797-b935-17bc9409b03b.snappy.parquet
    |   |   `-- sales
    |   |       |-- customers (valid records for this schema as specified in the /tmp/metadata/sales.yml)
    |   |       |   |-- _SUCCESS
    |   |       |   `-- part-00000-562501a1-34ef-4b94-b527-8e93bcbb5f89.snappy.parquet
    |   |       `-- orders (valid records for this schema as specified in the /tmp/metadata/sales.yml)
    |   |           |-- _SUCCESS
    |   |           `-- part-00000-92544093-4ae2-4a98-8df8-a5aba19a1b27.snappy.parquet
    |   |-- archive (Source files as found in the incoming folder are saved here after processing)
    |   |   |-- hr (Domain name)
    |   |   |   `-- sellers-2018-01-01.json
    |   |   `-- sales
    |   |       |-- customers-2018-01-01.psv
    |   |       `-- orders-2018-01-01.csv
    |   |-- business
    |   |   |-- hr
    |   |   `-- sales
    |   |-- metrics
    |   |   |-- discrete
    |   |   |-- continuous
    |   |   `-- frequencies
    |   |-- ingesting (Temporary folder used during ingestion by Comet)
    |   |   |-- hr (One temporary subfolder / domain)
    |   |   `-- sales
    |   |-- pending (Source files are copied here from the incoming folder before processing)
    |   |   |-- hr (one folder / domain)
    |   |   `-- sales
    |   |-- rejected (invalid records in processed datasets are stored here)
    |   |   |-- hr (Domain name)
    |   |   |   `-- sellers (Schema name)
    |   |   |       |-- _SUCCESS
    |   |   |       `-- part-00000-aef2dde6-af24-4e20-ad88-3e5238916e57.snappy.parquet
    |   |   `-- sales
    |   |       |-- customers
    |   |       |   |-- _SUCCESS
    |   |       |   `-- part-00000-e6fa5ff9-ad29-4e5f-a5ff-549dd331fafd.snappy.parquet
    |   |       `-- orders
    |   |           |-- _SUCCESS
    |   |           `-- part-00000-6f7ba5d4-960b-4ac6-a123-87a7ab2d212f.snappy.parquet
    |   `-- unresolved (Files found in the incoming folder but do not match any schema)
    |       `-- hr
    |           `-- dummy.json
    `-- metadata (Root of metadata files)
        |-- domains (all domain definition files are located in this folder)
        |   |-- hr.yml (One definition file / domain)
        |   `-- sales.yml
        `-- assertions (All assertion definitions go here)
        |   |-- default.comet.yml (Predefined assertion definitions)
        |   `-- assertions.comet.yml (assertion definitions defined here are accessible throughout the project)
        `-- views (All views definitions go here)
        |   |-- default.comet.yml (Predefined view definitions)
        |   `-- views.comet.yml (view definitions defined here are accessible throughout the project)
        `-- types (All semantic types are defined here)
        |   |-- default.comet.yml (Default semantic types)
        |   `-- types.comet.yml (User defined semantic types, overwrite default ones)
        `-- jobs (All transform jobs go here)
            `-- sales-by-name.yml (Compute sales by )
````

Comet Data Pipeline allows you to store datasets and metadata in two different filesystems. Thi is useful if you want to define a specific lifecycle
for your datasets.
Almost all options are customizable through environnement variables.
The main env vars are described below, you may change default settings. The exhaustive list of predefined env vars can be found in the reference.conf file.

|HOCON Variable|Env variable|Default Value|Description
|:--------------|:------------|:-------|:-----------
|file-system|COMET_FS|file://|File system where datasets will be located
|metadata-file-system|COMET_METADATA_FS|${file-system}|File system where Comet metadata will be located
|root|COMET_ROOT|/tmp|Root directory of the datasets and metadata files in the defined filesystem above
|tmp-dir|COMET_TMPDIR|When compacting data and estimating number of partitions, Comet stores intermediates files in this folder|${root}"/comet_tmp"
|datasets|COMET_DATASETS|${root}"/datasets"|Folder where datasets are located in the datasets `file-system`
|metadata|COMET_METADATA|${root}"/metadata" otherwise|Folder where metadata are located in the metadata `metadata-file-system`
|file-system|COMET_FS|file://|File system where datasets will be located
|area.pending|COMET_AREA_PENDING|pending|Source files are copied here from the incoming folder before processing
|area.unresolved|COMET_AREA_UNRESOLVED|unresolved|Files found in the incoming folder but do not match any schema
|area.archive|COMET_AREA_ARCHIVE|archive|Source files as found in the incoming folder are saved here after processing
|area.ingesting|COMET_AREA_INGESTING|ingesting|Temporary folder used during ingestion by Comet
|area.accepted|COMET_AREA_ACCEPTED|accepted|root folder of all valid records
|area.rejected|COMET_AREA_REJECTED|rejected|invalid records in processed datasets are stored here
|area.business|COMET_AREA_BUSINESS|business|root folder for all datasets produced by autojobs
|archive|COMET_ARCHIVE|true|Should we archive the incoming files once they are ingested
|default-write-format|COMET_DEFAULT_WRITE_FORMAT|parquet|How accepted records are stored (parquet / orc / json / csv / avro)
|default-rejected-write-format|COMET_DEFAULT_REJECTED_WRITE_FORMAT|parquet|How rejected records are stored (parquet / orc / json / csv / avro)
|default-audit-write-format|COMET_DEFAULT_AUDIT_WRITE_FORMAT|parquet|How audit is stored (parquet / orc / json / csv / avro)
|hive|COMET_HIVE|true|Should we create external Hive tables for ingested files ?
|analyze|COMET_ANALYZE|true|Should we computed basic statistics ? (requires COMET_HIVE to be set to true)
|launcher|COMET_LAUNCHER|simple|Which orchestrator to use ? Valid values are airflow or simple (direct call)

Below is the default YAML file for filesystem options:
```hocon
file-system = "file://"
file-system = ${?COMET_FS}

metadata-file-system = ${file-system}
metadata-file-system = ${?COMET_METADATA_FS}


root = "/tmp"
root = ${?COMET_ROOT}

datasets = ${root}"/datasets"
datasets = ${?COMET_DATASETS}

metadata = ${root}"/metadata"
metadata = ${?COMET_METADATA}

area {
  pending = "pending"
  pending = ${?COMET_AREA_PENDING}
  unresolved = "unresolved"
  unresolved = ${?COMET_AREA_UNRESOLVED}
  archive = "archive"
  archive = ${?COMET_AREA_ARCHIVE}
  ingesting = "ingesting"
  ingesting = ${?COMET_AREA_INGESTING}
  accepted = "accepted"
  accepted = ${?COMET_AREA_ACCEPTED}
  rejected = "rejected"
  rejected = ${?COMET_AREA_REJECTED}
  business = "business"
  business = ${?COMET_AREA_BUSINESS}
}

tmpdir = ${root}"/comet_tmp"
tmpdir = ${?COMET_TMPDIR}

archive = true
archive = ${?COMET_ARCHIVE}

default-write-format = parquet
default-write-format = ${?COMET_DEFAULT_WRITE_FORMAT}

default-rejected-write-format = parquet
default-rejected-write-format = ${?COMET_DEFAULT_REJECTED_WRITE_FORMAT}

default-audit-write-format = parquet
default-audit-write-format = ${?COMET_DEFAULT_AUDIT_WRITE_FORMAT}

launcher = airflow
launcher = simple
launcher = ${?COMET_LAUNCHER}
```


To make sure, the same schema is not ingested by two concurrent Comet processes, Comet Data Pipeline uses a file lock when necessary.

|HOCON Variable|Env variable|Default Value|Description
|:--------------|:------------|:-------|:-----------
|lock.path|COMET_LOCK_PATH|${root}"/locks"|Root folder where lock file is created
|lock.timeout|COMET_LOCK_TIMEOUT|-1|How long to wait for the file lock to be available (in seconds)


```hocon
lock {
  path = ${root}"/locks"
  path = ${?COMET_LOCK_PATH}

  timeout = -1
  timeout = ${?COMET_LOCK_TIMEOUT}
}
```

### Ingestion
When many files that have the same pattern and thus belong to the same schema, it is possible to ingest them one after the other using an ingestion policy 
or ingest all of them at once.

When ingesting the files with the same schema one after the other, it is possible to use a custom ordering policy by settings the `COMET_LOAD_STRATEGY` environment variable. Currently, the following ordering policies are defined:

* `com.ebiznext.comet.job.load.IngestionTimeStrategy` : Order the files by modification date
* `com.ebiznext.comet.job.load.IngestionNameStrategy` : Order  the files by name

If you want to use another custom strategy, you'll have to implement the trait below, make it available in the classpath and set the `COMET_LOAD_STRATEGY` environment variable

````scala
package com.ebiznext.comet.job.load

import java.time.LocalDateTime

import org.apache.hadoop.fs.{FileSystem, Path}

trait LoadStrategy {

  /** List all files in folder
    *
    * @param fs        FileSystem
    * @param path      Absolute folder path
    * @param extension Files should end with this string. To list all files, simply provide an empty string
    * @param since     Minimum modification time of list files. To list all files, simply provide the beginning of all times
    * @param recursive List files recursively
    * @return List of Path
    */
  def list(
    fs: FileSystem,
    path: Path,
    extension: String = "",
    since: LocalDateTime = LocalDateTime.MIN,
    recursive: Boolean
  ): List[Path]
}
````

To ingest all the files at once, set the `COMET_GROUPED` variable to true.

|HOCON Variable|Env variable|Default Value|Description
|:--------------|:------------|:-------|:-----------
|grouped|COMET_GROUPED|false|Should files with the same schema be ingested all at once ?
|load-strategy-class|COMET_LOAD_STRATEGY|com.ebiznext.comet.job.load.IngestionTimeStrategy|When `grouped` is false, which ingestion order strategy to use 


Below is an example of HOCON file with the default values.

```hocon
load-strategy-class = "com.ebiznext.comet.job.load.IngestionTimeStrategy"
load-strategy-class = ${?COMET_LOAD_STRATEGY}

grouped = false
grouped = ${?COMET_GROUPED}
```

The YAML file describing the schema and ingestion rules may also define a custom sink (FS / JDBC / BigQuery / Redshift ...). 

In test mode, we need to sink the files to the filesystem. To enable sinking the resulting parquet file even when another sink type is desired, simply
set the `COMET_SINK_TO_FILE` environment variable to `true`.

|HOCON Variable|Env variable|Default Value|Description
|:--------------|:------------|:-------|:-----------
|sink-to-file|COMET_SINK_TO_FILE|false|Should ingested files be stored on the filesystem on only in the sink defined in the YAML file ?

```hocon
sink-to-file = false
sink-to-file = ${?COMET_SINK_TO_FILE}
```

When `sink to file` or a filesystem sink (SinkType.FS) is requested, and you want to output the result in a single file in the csv file format, set the `COMET_CSV_OUTPUT` 
environment variable to `true`.

### Validation
During ingestion, the input file is validated up to the attribute level. Three default row validators are defined:

- com.ebiznext.comet.job.validator.FlatRowValidator: to validate flat files, eq. DSV, Position and single level Json files.
- com.ebiznext.comet.job.validator.TreeRowValidator:  used for tree like documents, eq. XML and JSON files
- com.ebiznext.comet.job.validator.AcceptAllValidator: used for any document type (flat and tree like) and accept the input without any validation

The validtor to use is configurable as follows:

HOCON Variable|Env. variable|Default value
:---|:---|:---
row-validator-class|COMET_ROW_VALIDATOR_CLASS|com.ebiznext.comet.job.validator.FlatRowValidator
tree-validator-class|COMET_TREE_VALIDATOR_CLASS|com.ebiznext.comet.job.validator.TreeRowValidator

### Privacy
Default valid values are NONE, HIDE, MD5, SHA1, SHA256, SHA512, AES(not implemented). 
Custom values may also be defined by adding a new privacy option in the application.conf. 
The default reference.conf file defines the following valid privacy strategies:
```hocon
privacy {
  options = {
    "none": "com.ebiznext.comet.privacy.No",
    "hide": "com.ebiznext.comet.privacy.Hide",
    "hide10X": "com.ebiznext.comet.privacy.Hide(\"X\",10)",
    "approxLong20": "com.ebiznext.comet.privacy.ApproxLong(20)",
    "md5": "com.ebiznext.comet.privacy.Md5",
    "sha1": "com.ebiznext.comet.privacy.Sha1",
    "sha256": "com.ebiznext.comet.privacy.Sha256",
    "sha512": "com.ebiznext.comet.privacy.Sha512",
    "initials": "com.ebiznext.comet.privacy.Initials"
  }
}
```
In the YAML file, reference, you reference the option name. This will apply the function defined in the class referenced by the option value.

Below the predefined strategies:

Privacy Strategy|Privacy class|Description
:---|:---|:---
none|com.ebiznext.comet.privacy.No|Return the input string itself
hide|com.ebiznext.comet.privacy.Hide(\"X\", 10)|Without a parameter, return the empty string. Otherwise, replace with 10 occurrences of the character 'X'
md5|com.ebiznext.comet.privacy.Md5|Return the md5 of the input string
sha1|com.ebiznext.comet.privacy.Sha1|Return the sha1 of the input string
sha256|com.ebiznext.comet.privacy.Sha256|Return the sha256 of the input string
sha512|com.ebiznext.comet.privacy.Sha512|Return the sha256 of the input string
initials|com.ebiznext.comet.privacy.Initials|Return the first char of each word (usually applied to user names)

The following startegies are also defined and may be declared in the custom configuration file.

Privacy class|Description
:---|:---
com.ebiznext.comet.privacy.IPv4(8)|Return the IPv4 address with the last 8 bytes masked  
com.ebiznext.comet.privacy.IPv6(8|Return the IPv6 address with the last 8 bytes masked
com.ebiznext.comet.privacy.RandomDouble|Return a random double number
com.ebiznext.comet.privacy.RandomDouble(10,20)|Return a random double between 10.0 and 20.0
com.ebiznext.comet.privacy.RandomLong|Return a random long number
com.ebiznext.comet.privacy.RandomLong(10, 20)|Return a random long number between 10 and 20
com.ebiznext.comet.privacy.RandomInt|Return a random int number
com.ebiznext.comet.privacy.RandomInt(10, 20)|Return a random int number between 10 and 20
com.ebiznext.comet.privacy.ApproxDouble(70)|Return a double value with a variation up to 70% applied to the input value  
com.ebiznext.comet.privacy.ApproxLong(70)|Return a double long with a variation up to 70% applied to the input value
com.ebiznext.comet.privacy.Mask(\"*\", 4, 1, 3)| Partially mask the input value with 4 occurrences of the '*' character, 1 on the left side and 3 on the right side. 


Any new privacy strategy should implement the following trait :

```scala
/** @param s: String  => Input string to encrypt
  * @param colMap : Map[String, Option[String]] => Map of all the attributes and their corresponding values
  * @param params: List[Any]  => Parameters passed to the algorithm as defined in the conf file.
  *                               Parameter starting with '"' is converted to a string
  *                               Parameter containing a '.' is converted to a double
  *                               Parameter equals to true of false is converted a boolean
  *                               Anything else is converted to an int
  * @return The encrypted string
  */
```

### Sinks
#### BigQuery Sink
When type field is set to `BigQuerySink`

Property|Type|Default Value|Description
:---|:---|:---|:---
name|Optional String|None|
location|String|EU|Database location (EU, US, ...)
timestamp|String|None|The timestamp column to use for table partitioning if any. No partitioning by default
clustering|List|None|List of ordered columns to use for table clustering
days|Int|None|Number of days before this table is set as expired and deleted. Never by default.
requirePartitionFilter|Boolean|false|Should be require a partition filter on every request ? No by default.
options|Map|None|Spark or BigQuery (depend on the selected engine) options to be set on the BigQuery connection

#### Elasticsearch Sink
When type field is set to `EsSink`

Property|Type|Default Value|Description
:---|:---|:---|:---
name|Optional String|None|
id|String|None|Attribute to use as id of the document. Generated by Elasticseach if not specified.
timestamp|String|None|Timestamp field format as expected by Elasticsearch ("{beginTs&#124;yyyy.MM.dd}" for example).
options|Map|None|Elasticsearch options to be set on the ES connection


#### Filesystem Sink
When type field is set to `FsSink`. FsSink est the default sink type when ingesting data.
The file where data is saved is computed using the domain and schema name. See [Load](../howto/load.md) and [Transform](../howto/transform.md)

Property|Type|Default Value|Description
:---|:---|:---|:---
name|Optional String|None|
connection|String|None|JDBC Connection String
options|Map|None|[JDBC Options](https://spark.apache.org/docs/latest/sql-data-sources-jdbc.html)


### Audit / Metrics / Assertions
### Elasticsearch
### Spark
### Kafka
### JDBC
### ??-service
### Airflow

|HOCON Variable|Env variable|Default Value|Description
|:--------------|:------------|:-------|:-----------
||AIRFLOW_ENDPOINT|Airflow endpoint. Used when COMET_LAUNCHER is set to airflow|http://127.0.0.1:8080/api/experimental

Env. Var|Description|Default value
---|---|---

> :memo: **When running Spark on YARN in cluster mode,
> environment variables need to be set using the syntax spark.yarn.appMasterEnv.[EnvironmentVariableName]**

> :memo: **When running Dataproc on GCP, environment variables need to be set 
> in the DataprocClusterCreateOperator in the properties attributes 
> using the syntax "spark-env:[EnvironmentVariableName]":"[Value]"**


## Airflow DAGs
Comet Data Pipeline comes with native  Airflow support.
Below are DAG definitions for each of the three ingestion steps on an kerberized cluster.

### Import DAG


````python
from airflow import DAG
from airflow.operators.bash_operator import BashOperator



default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2018, 11, 2),
    'email': ['me@here.com'],
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 0,
    'retry_delay': timedelta(minutes=5),

}

dag = DAG('comet_import',max_active_runs=1, catchup=False, default_args=default_args, schedule_interval='*/1 * * * *')



COMET_SPARK_CMD = "spark2-submit \
                        --keytab /etc/keytabs/importhdfs.keytab \
                        --principal importhdfs@MY.BIGDATA \
                        --conf spark.jars.packages=\"\" \
                        --master yarn \
                        --deploy-mode client /home/airflow/program/comet-assembly-0.1.jar"

CometImport = BashOperator(
    task_id='comet_import',
    bash_command= COMET_SPARK_CMD + ' import',
    env={
        'COMET_DATASETS':"/project/data",
        'COMET_METADATA':"/project/metadata",
        'COMET_AREA_ACCEPTED':"working",
        'COMET_AREA_PENDING':"staging",
        'COMET_ARCHIVE':"true",
        'COMET_LAUNCHER':"airflow",
        'COMET_HIVE':"true",
        'COMET_ANALYZE':"true"
    },
    dag=dag)
````
### Watch DAG
````python
import os
from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from datetime import datetime, timedelta
from airflow.operators.slack_operator import SlackAPIPostOperator


default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2018, 11, 2),
    'email': ['me@here.com'],
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 0,
    'retry_delay': timedelta(minutes=5),
    # 'queue': 'bash_queue',
    # 'pool': 'backfill',
    # 'priority_weight': 10,
    # 'end_date': datetime(2016, 1, 1),
}

dag = DAG('comet_watcher',max_active_runs=1 , catchup=False, default_args=default_args, schedule_interval='*/1 * * * *')

def slack_task(msg):
    slack_alert = SlackAPIPostOperator(
        task_id='slack_alert',
        channel="#airflow",
        token="xoxp-64071012534-475450904118-524897638692-f9a90d49fd7fb312a574b4570d557b9a",
        text = msg,
        username = 'airflow',)
    return slack_alert.execute(msg=msg)

COMET_SPARK_CMD = "spark2-submit \
                        --keytab /etc/keytabs/importhdfs.keytab \
                        --principal importhdfs@MY.BIGDATA \
                        --conf spark.jars.packages=\"\" \
                        --master yarn \
                        --deploy-mode client /home/airflow/program/comet-assembly-0.1.jar"

COMET_DOMAIN = os.environ.get('COMET_DOMAIN', '')
CometWatch = BashOperator(
    task_id='comet_watcher',
    bash_command= COMET_SPARK_CMD + ' watch '+ COMET_DOMAIN,
    #on_failure_callback=slack_task(":red_circle: Task Comet Watch Failed"),
    #on_success_callback=slack_task(":ok_hand: Task Comet Watch Success"),
    env={
        'AIRFLOW_ENDPOINT':"https://airflow.my.server.com/api/experimental",
        'COMET_DATASETS':"/project/data",
        'COMET_METADATA':"/project/metadata",
        'COMET_AREA_ACCEPTED':"working",
        'COMET_AREA_PENDING':"staging",
        'COMET_ARCHIVE':"true",
        'COMET_LAUNCHER':"airflow",
        'COMET_HIVE':"true",
        'COMET_ANALYZE':"true"
    },
    dag=dag)
````

### Ingestion DAG

````python
from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from datetime import datetime, timedelta
from airflow.operators.slack_operator import SlackAPIPostOperator


default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2018, 11, 2),
    'email': ['me@here.com'],
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 0,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG('comet_ingest',max_active_runs=1 , catchup=False, default_args=default_args, schedule_interval = None)

def slack_task(msg):
    slack_alert = SlackAPIPostOperator(
        task_id='slack_alert',
        channel="#airflow",
        token="xoxp-64071012534-475450904118-524897638692-f9a90d49fd7fb312a574b4570d557b9a",
        text = msg,
        username = 'airflow',)
    return slack_alert.execute(msg=msg)

COMET_SPARK_CMD = "spark2-submit \
                        --keytab /etc/keytabs/importhdfs.keytab \
                        --principal importhdfs@MY.BIGDATA \
                        --conf spark.jars.packages=\"\" \
                        --conf spark.yarn.appMasterEnv.COMET_METADATA=/project/metadata \
                        --conf spark.yarn.appMasterEnv.COMET_ACCEPTED=working \
                        --conf spark.yarn.appMasterEnv.COMET_DATASETS=/project/data \
                        --master yarn \
                        --deploy-mode cluster /home/airflow/program/comet-assembly-0.1.jar"

templated_command = COMET_SPARK_CMD + """ {{ dag_run.conf['command'] }}"""

CometIngest = BashOperator(
    task_id='comet_ingest',
    bash_command=templated_command,
    #on_failure_callback=slack_task(":red_circle: Task Comet Ingest Failed: "),
    #on_success_callback=slack_task(":ok_hand: Task Comet Ingest Success: "),
    env={
        'COMET_DATASETS':"/project/data",
        'COMET_METADATA':"/project/metadata",
        'COMET_AREA_ACCEPTED':"working",
        'COMET_AREA_PENDING':"staging",
        'COMET_ARCHIVE':"true",
        'COMET_LAUNCHER':"airflow",
        'COMET_HIVE':"true",
        'COMET_ANALYZE':"true"
    },
    dag=dag)
````

