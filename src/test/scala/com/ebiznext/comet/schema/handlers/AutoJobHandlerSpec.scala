package com.ebiznext.comet.schema.handlers

import com.ebiznext.comet.TestHelper
import com.ebiznext.comet.config.{Settings, StorageArea}
import com.ebiznext.comet.schema.model.{AutoJobDesc, AutoTaskDesc, WriteMode}
import com.ebiznext.comet.workflow.IngestionWorkflow
import org.apache.hadoop.fs.Path
import org.scalatest.BeforeAndAfterAll

class AutoJobHandlerSpec extends TestHelper with BeforeAndAfterAll {

  lazy val pathBusiness = new Path(cometMetadataPath + "/jobs/user.yml")

  lazy val pathDatasetBusiness = new Path(cometDatasetsPath + "/business/user/user")

  lazy val pathAccepted = new Path(cometDatasetsPath + "/accepted/user")

  lazy val metadataPath = new Path(cometMetadataPath)

  override def beforeAll(): Unit = {
    sparkSession.read
      .option("inferSchema", "true")
      .json(getResPath("/expected/datasets/accepted/DOMAIN/User.json"))
      .write
      .mode("overwrite")
      .parquet(pathAccepted.toString)
  }

  new WithSettings() {
    "trigger AutoJob by passing parameters on SQL statement" should "generate a dataset in business" in {

      val businessTask1 = AutoTaskDesc(
        "select firstname, lastname, age from user_View where age={{age}}",
        "user",
        "user",
        WriteMode.OVERWRITE,
        area = Some(StorageArea.fromString("business"))
      )
      val businessJob =
        AutoJobDesc(
          "user",
          List(businessTask1),
          None,
          Some("parquet"),
          Some(false),
          views = Some(Map("user_View" -> "accepted/user"))
        )
      val schemaHandler = new SchemaHandler(storageHandler)

      val businessJobDef = mapper
        .writer()
        .withAttribute(classOf[Settings], settings)
        .writeValueAsString(businessJob)

      val workflow =
        new IngestionWorkflow(storageHandler, schemaHandler, new SimpleLauncher())
      storageHandler.write(businessJobDef, pathBusiness)

      workflow.autoJobRun("user", Some("age=40"))

      val result = sparkSession.read
        .load(pathDatasetBusiness.toString)
        .select("firstname", "lastname", "age")
        .take(2)

      result.length shouldBe (2)

      result
        .map(r => (r.getString(0), r.getString(1), r.getLong(2)))
        .toList should contain allElementsOf List(
        ("test3", "test4", 40),
        ("Elon", "Musk", 40)
      )
    }

    "trigger AutoJob by passing three parameters on SQL statement" should "generate a dataset in business" in {

      val businessTask1 = AutoTaskDesc(
        "select firstname, lastname, age from user_View where age={{age}} and lastname={{lastname}} and firstname={{firstname}}",
        "user",
        "user",
        WriteMode.OVERWRITE,
        area = Some(StorageArea.fromString("business"))
      )
      val businessJob =
        AutoJobDesc(
          "user",
          List(businessTask1),
          None,
          Some("parquet"),
          Some(false),
          views = Some(Map("user_View" -> "accepted/user"))
        )
      val schemaHandler = new SchemaHandler(storageHandler)

      val businessJobDef = mapper
        .writer()
        .withAttribute(classOf[Settings], settings)
        .writeValueAsString(businessJob)

      val workflow =
        new IngestionWorkflow(storageHandler, schemaHandler, new SimpleLauncher())
      storageHandler.write(businessJobDef, pathBusiness)

      workflow.autoJobRun("user", Some("age=25, lastname='Doe', firstname='John'"))

      val result = sparkSession.read
        .load(pathDatasetBusiness.toString)
        .select("firstname", "lastname", "age")
        .take(2)

      result.length shouldBe (1)
      result
        .map(r => (r.getString(0), r.getString(1), r.getLong(2)))
        .toList should contain allElementsOf List(
        ("John", "Doe", 25)
      )
    }

    "trigger AutoJob with no parameters on SQL statement" should "generate a dataset in business" in {

      val businessTask1 = AutoTaskDesc(
        "select firstname, lastname, age from user_View",
        "user",
        "user",
        WriteMode.OVERWRITE,
        area = Some(StorageArea.fromString("business"))
      )
      val businessJob =
        AutoJobDesc(
          "user",
          List(businessTask1),
          None,
          Some("parquet"),
          Some(false),
          views = Some(Map("user_View" -> "accepted/user"))
        )
      val schemaHandler = new SchemaHandler(storageHandler)

      val businessJobDef = mapper
        .writer()
        .withAttribute(classOf[Settings], settings)
        .writeValueAsString(businessJob)

      val workflow =
        new IngestionWorkflow(storageHandler, schemaHandler, new SimpleLauncher())
      storageHandler.write(businessJobDef, pathBusiness)

      workflow.autoJobRun("user")

      sparkSession.read
        .load(pathDatasetBusiness.toString)
        .select("firstname", "lastname", "age")
        .take(6)
        .map(r => (r.getString(0), r.getString(1), r.getLong(2)))
        .toList should contain allElementsOf List(
        ("John", "Doe", 25),
        ("fred", "abruzzi", 25),
        ("test3", "test4", 40)
      )
    }
  }
}