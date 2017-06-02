name := "Loginandregister1"

version := "1.0"

lazy val `loginandregister1` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( jdbc , cache , ws   , specs2 % Test ,"org.mongodb" %% "casbah" % "2.8.1",
  "org.slf4j" % "slf4j-simple" % "1.6.4","com.nulab-inc" %% "scala-oauth2-core" % "1.3.0","com.roundeights" %% "hasher" % "1.2.0","org.jvnet.mock-javamail" % "mock-javamail" % "1.9" % "test",
  "com.github.jurajburian" %% "mailer" % "1.2.1","org.apache.commons" % "commons-email" % "1.2",
  "org.specs2" %% "specs2-core" % "2.4.9" % "test","com.mongodb.casbah" % "casbah-core_2.9.1" % "2.1.5-1")


unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"  
