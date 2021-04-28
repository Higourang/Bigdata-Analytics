import Dependencies._
import sbtrelease.ReleasePlugin.autoImport.ReleaseTransformations._
import sbtrelease.Version.Bump.Next

// require Java 8 for Spark 2 support
javacOptions ++= Seq("-source", "1.8", "-target", "1.8", "-Xlint")

initialize := {
  val _ = initialize.value
  val javaVersion = sys.props("java.specification.version")
  if (javaVersion != "1.8")
    sys.error("Java 1.8 is required for this project. Found " + javaVersion + " instead")
}


lazy val scala212 = "2.12.12"

lazy val scala211 = "2.11.12"

crossScalaVersions :=  List(scala211, scala212)

organization := "com.ebiznext"

organizationName := "Ebiznext"

scalaVersion := scala212

organizationHomepage := Some(url("https://github.com/ebiznext/comet-data-pipeline"))

libraryDependencies ++= {
  val (spark, jackson) = {
    CrossVersion.partialVersion(scalaVersion.value) match {
      case Some((2, 12)) => (spark_3d0_forScala_2d12, jackson212ForSpark3)
      case Some((2, 11)) => (spark_2d4_forScala_2d11, jackson211ForSpark2)
      case _   => throw new Exception(s"Invalid Scala Version")
    }
  }
  dependencies ++ spark ++ jackson ++ scalaReflection(scalaVersion.value)
}

name := {
  val sparkNameSuffix = {
    CrossVersion.partialVersion(scalaVersion.value) match {
      case Some((2, 12)) => "3"
      case Some((2, 11)) => "2"
      case _   => throw new Exception(s"Invalid Scala Version")
    }
  }
  s"comet-spark$sparkNameSuffix"
}

assemblyJarName in assembly := s"${name.value}_${scalaBinaryVersion.value}-${version.value}-assembly.jar"


/*
artifactName := { (sv: ScalaVersion, module: ModuleID, artifact: Artifact) =>
  artifact.name + "-spark" + sparkMajor +   + "_" + sv.binary "-" + module.revision + "." + artifact.extension
}
 */
// assemblyJarName in assembly := s"comet-spark-${sparkVersion}_${scalaVersion.value}-assembly.jar"

Common.enableCometAliases

enablePlugins(Common.cometPlugins: _*)

Common.customSettings

Test / fork := true
envVars in Test := Map("GOOGLE_CLOUD_PROJECT" -> "some-gcp-project")

artifact in (Compile, assembly) := {
  val art: Artifact = (artifact in (Compile, assembly)).value
  art.withClassifier(Some("assembly"))
}

addArtifact(artifact in (Compile, assembly), assembly)

// Builds a far JAR with embedded spark libraries and other provided libs.
// Can be useful for running YAML generation without having a spark distribution
commands += Command.command("assemblyWithSpark") { state =>
  """set assembly / fullClasspath := (Compile / fullClasspath).value""" :: "assembly" :: state
}

publishTo in ThisBuild := {
  sys.env.get("GCS_BUCKET_ARTEFACTS") match {
    case None        => sonatypePublishToBundle.value
    case Some(value) => Some(GCSPublisher.forBucket(value, AccessRights.InheritBucket))
  }
}

// Workaround for buggy http handler in SBT 1.x
// https://github.com/sbt/sbt/issues/3570
updateOptions := updateOptions.value.withGigahorse(false)

// Release

releaseCrossBuild := false

releaseIgnoreUntrackedFiles := true

releaseProcess := Seq[ReleaseStep](
  checkSnapshotDependencies,
  inquireVersions,
  runClean,
  releaseStepCommand("+test"),
  setReleaseVersion,
  commitReleaseVersion, // forces to push dirty files
  tagRelease,
  releaseStepCommandAndRemaining("+publishSigned"),
  releaseStepCommand("sonatypeBundleRelease"),
  setNextVersion,
  commitNextVersion,
  pushChanges
)

releaseCommitMessage := s"Release ${ReleasePlugin.runtimeVersion.value}"

releaseVersionBump := Next

assemblyMergeStrategy in assembly := {
  case PathList("META-INF", _ @ _*) => MergeStrategy.discard
  case "reference.conf"              => MergeStrategy.concat
  case _
  => MergeStrategy.first
}

// Required by the Test container framework
Test / fork := true

assemblyExcludedJars in assembly := {
  val cp: Classpath = (fullClasspath in assembly).value
  cp.foreach(x => println("->" + x.data.getName))
  //cp filter {_.data.getName.matches("hadoop-.*-2.6.5.jar")}
  Nil
}

assemblyShadeRules in assembly := Seq(
  // poi needs a newer version of commons-compress (> 1.17) than the one shipped with spark (1.4)
  ShadeRule.rename("org.apache.commons.compress.**" -> "poiShade.commons.compress.@1").inAll,
  //shade it or else writing to bigquery wont work because spark comes with an older version of google common.
  ShadeRule.rename("com.google.common.**" -> "shade.@0").inAll
)

// Your profile name of the sonatype account. The default is the same with the organization value
sonatypeProfileName := "com.ebiznext"

// To sync with Maven central, you need to supply the following information:
publishMavenStyle := true

// Open-source license of your choice
licenses := Seq("APL2" -> url("https://www.apache.org/licenses/LICENSE-2.0.txt"))

// Where is the source code hosted: GitHub or GitLab?
import xerial.sbt.Sonatype._
sonatypeProjectHosting := Some(
  GitHubHosting("ebiznext", "comet-data-pipeline", "hayssam.saleh@ebiznext.com")
)

developers := List(
  Developer(
    id = "hayssams",
    name = "Hayssam Saleh",
    email = "hayssam@saleh.fr",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "elarib",
    name = "Abdelhamide Elarib",
    email = "elarib.abdelhamide@gmal.com",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "cchepelov",
    name = "Cyrille Chepelov",
    email = "cyrille@chepelov.org",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "AmineSagaama",
    name = "Amine Sagaama",
    email = "amine.sagaama@gmail.com",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "mhdqassir",
    name = "Mohamad Kassir",
    email = "mbkassir@gmail.com",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "mmenestret",
    name = "Martin Menestret",
    email = "martinmenestret@gmail.com",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "pchalcol",
    name = "Patice Chalcol",
    email = "pchalcol@gmail.com",
    url = url("https://www.ebiznext.com")
  ),
  Developer(
    id = "zedach",
    name = "Mourad Dachraoui",
    email = "mourad.dachraoui@gmail.com",
    url = url("https://www.ebiznext.com")
  )
)

//logLevel in assembly := Level.Debug
