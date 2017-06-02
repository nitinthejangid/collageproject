package controllers

import java.util.Calendar

import scala.collection.mutable.{ArrayBuffer, ListBuffer}

//import com.mongodb.casbah.commons.MongoDBObject
import play.api._
import play.api.libs.functional.syntax.unlift
import play.api.libs.json.{JsPath, Reads, Writes}
import play.api.mvc._
import play.api.mvc._
import play.api.libs.functional.syntax._
import play.api.libs.json._
import scala.collection.mutable.MutableList
import scala.collection.mutable
import scala.language.postfixOps

import com.mongodb.casbah.Imports._
import java.util.Calendar
import com.mongodb.casbah.Imports._
import com.mongodb.casbah.commons.MongoDBObject
import play.api.data.Forms._
import play.api.data._
import play.api.data.Forms.tuple
import play.api.libs.json.{JsArray, JsValue, Json}
import play.api.libs.ws.{WS, WSResponse}
import play.api.Play.current
import play.api.mvc._
import views._

import scala.collection.mutable
import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}
import scala.util.Properties


object Application extends Controller {


  val rechargeForm = Form(
    tuple(
      "amount" -> text,
      "password" -> text
    )
  )

  implicit val personWrites: Writes[User1] = (JsPath \ "emailId").write[String].and((JsPath \ "password").write[String])(unlift(User1.unapply))

  implicit val personReads: Reads[User1] = (
    (JsPath \ "emailId").read[String] and
      (JsPath \ "password").read[String]
    ) (User1.apply _)


  implicit val sessionReads: Reads[Sessionclass] =
    (__ \ "sessionid").read[String].map(Sessionclass)

  implicit val sessionWrites = Writes[Sessionclass]( Sessionclass =>
    JsString(Sessionclass.sessionid)
  )



  implicit val importreads: Reads[Importdata] =
    (__ \ "orgId").read[String].map(Importdata)

  implicit val importwrites = Writes[Importdata]( Importdata =>
    JsString(Importdata.orgId)
  )

  implicit val fetchuserReads: Reads[Fetchuserclass] =
    (__ \ "sessionid").read[String].map(Fetchuserclass)

  implicit val fetchuserWrites = Writes[Fetchuserclass]( Fetchuserclass =>
    JsString(Fetchuserclass.sessionid)
  )



  implicit val fetchreads: Reads[Fetchclass] = (
    (JsPath \ "firstName").read[String] and
      (JsPath \ "lastName").read[String]and
      (JsPath \ "role").read[String]and
      (JsPath \ "organization").read[String]and
      (JsPath \ "defaultPasswordFlag").read[Int]and
      (JsPath \ "orgId").read[String]and
        (JsPath \ "status").read[String]
    )(Fetchclass.apply _)

  implicit val fetchwrites: Writes[Fetchclass] = (
    (JsPath \ "firstName").write[String] and
      (JsPath \ "lastName").write[String]and
      (JsPath \ "role").write[String]and
      (JsPath \ "organization").write[String]and
      (JsPath \ "defaultPasswordFlag").write[Int]and
      (JsPath \ "orgId").write[String]and
        (JsPath \ "status").write[String]
    )(unlift(Fetchclass.unapply))




  implicit val chartreads: Reads[chartData] = (
      (JsPath \ "org_name").read[String] and
      (JsPath \ "course_name").read[List[String]] and
      (JsPath \ "academicYear").read[List[String]]and
      (JsPath \ "semester").read[List[String]] and
      (JsPath \ "subject").read[List[String]] and
      (JsPath \ "xaxis").read[String] and
      (JsPath \ "yaxis").read[String]and
      (JsPath \ "chartType").read[String] and
      (JsPath \ "WidgetName").read[String]

    )(chartData.apply _)

  implicit val chartwrites: Writes[chartData] = (
      (JsPath \ "org_name").write[String] and
      (JsPath \ "course_name").write[List[String]] and
      (JsPath \ "academicYear").write[List[String]]and
      (JsPath \ "semester").write[List[String]] and
      (JsPath \ "subject").write[List[String]] and
      (JsPath \ "xaxis").write[String] and
      (JsPath \ "yaxis").write[String]and
      (JsPath \ "chartType").write[String]and
      (JsPath \ "WidgetName").write[String]
    )(unlift(chartData.unapply))



  implicit val deletereads: Reads[deleteData] = (
    (JsPath \ "orgId").read[String] and
      (JsPath \ "WidgetName").read[String]and
      (JsPath \ "chartType").read[String]
    )(deleteData.apply _)

  implicit val deletewrites: Writes[deleteData] = (
    (JsPath \ "orgId").write[String] and
      (JsPath \ "WidgetName").write[String]and
      (JsPath \ "chartType").write[String]
    )(unlift(deleteData.unapply))




  implicit val user_registerreads: Reads[Userregister] = (
    (JsPath \ "firstName").read[String] and
      (JsPath \ "lastName").read[String]and
      (JsPath \ "emailId").read[String]and
      (JsPath \ "password").read[String]and
      (JsPath \ "role").read[String]and
      (JsPath \ "organization").read[String]
    )(Userregister.apply _)

  implicit val userwrites: Writes[Userregister] = (
    (JsPath \ "firstName").write[String] and
      (JsPath \ "lastName").write[String]and
      (JsPath \ "emailId").write[String] and
      (JsPath \ "password").write[String]and
      (JsPath \ "role").write[String]and
      (JsPath \ "organization").write[String]
    )(unlift(Userregister.unapply))

  implicit val changereads: Reads[User2] = (
    (JsPath \ "sessionId").read[String] and
      (JsPath \ "actionType").read[String] and
      (JsPath \ "oldpassword").read[String] and
      (JsPath \ "newpassword").read[String]

    ) (User2.apply _)

  implicit val changewrites: Writes[User2] = (
    (JsPath \ "emailId").write[String] and
      (JsPath \ "actionType").write[String] and
      (JsPath \ "oldpassword").write[String] and
      (JsPath \ "newpassword").write[String]

    ) (unlift(User2.unapply))



  implicit val widgetreads: Reads[Widgetdata] = (
    (JsPath \ "orgId").read[String] and
      (JsPath \ "org_name").read[String] and
      (JsPath \ "course_name").read[Array[String]] and
      (JsPath \ "academicYear").read[Array[String]]and
    (JsPath \ "semester").read[Array[String]] and
      (JsPath \ "subject").read[Array[String]] and
      (JsPath \ "xaxis").read[String] and
      (JsPath \ "yaxis").read[String]and
        (JsPath \ "chartType").read[String] and
      (JsPath \ "WidgetName").read[String]

    ) (Widgetdata.apply _)

  implicit val widgetwrites: Writes[Widgetdata] = (
    (JsPath \ "orgId").write[String] and
      (JsPath \ "org_name").write[String] and
      (JsPath \ "course_name").write[Array[String]] and
      (JsPath \ "academicYear").write[Array[String]]and
    (JsPath \ "semester").write[Array[String]] and
      (JsPath \ "subject").write[Array[String]] and
      (JsPath \ "xaxis").write[String] and
      (JsPath \ "yaxis").write[String]and
      (JsPath \ "chartType").write[String]and
        (JsPath \ "WidgetName").write[String]

    ) (unlift(Widgetdata.unapply))




  implicit val TransResponseWrites: Writes[TransResponse] = (JsPath \ "status").write[String].and((JsPath \ "sessionid").write[String])(unlift(TransResponse.unapply))
  implicit val TransResponseReads: Reads[TransResponse] = (JsPath \ "status").read[String].and((JsPath \ "sessionid").read[String])(TransResponse.apply _)



  //case class Order(orgId:String, item:Item)
  implicit val itemreads: Reads[Item] = (
    (__ \ "courseName").read[String] and
      (__ \ "totalClasses").read[String] and
      (__ \ "totalSemesters").read[String] and
      (__ \ "academicYear").read[String]
    )(Item.apply _)
  implicit val itemwrites: Writes[Item] = (
    (__ \ "courseName").write[String] and
      (__ \ "totalClasses").write[String] and
      (__ \ "totalSemesters").write[String] and
      (__ \ "academicYear").write[String]
    )(unlift(Item.unapply))

  implicit val itemsreads: Reads[Items] = (
    (__ \ "courseName").read[String] and
      (__ \ "totalClasses").read[String] and
      (__ \ "totalSemesters").read[String] and
      (__ \ "academicYear").read[String] and
      (__ \ "technology").read[String] and
      (__ \ "language").read[String]
    )(Items.apply _)
  implicit val itemswrites: Writes[Items] = (
    (__ \ "courseName").write[String] and
      (__ \ "totalClasses").write[String] and
      (__ \ "totalSemesters").write[String] and
      (__ \ "academicYear").write[String] and
      (__ \ "technology").write[String] and
      (__ \ "language").write[String]
    )(unlift(Items.unapply))

 /* implicit val yaxisread: Reads[yaxispayload] = (
    (__ \ "org_name").read[String] and
      (__ \ "course_name").read[String] and
      (__ \ "academicYear").read[String] and
      (__ \ "semester").read[String] and
      (__ \ "subject").read[String] and
      (__ \ "yaxis").read[String]
    ) (yaxispayload.apply _)
  implicit val yaxiswrite: Writes[yaxispayload] = (
    (__ \ "org_name").write[String] and
      (__ \ "course_name").write[String] and
      (__ \ "academicYear").write[String] and
      (__ \ "semester").write[String] and
      (__ \ "subject").write[String] and
      (__ \ "yaxis").write[String]
    ) (unlift(yaxispayload.unapply))*/
 implicit val yaxisread: Reads[yaxispayload] = (
   (__ \ "org_name").read[String] and
     (__ \ "widgetName").read[String] and
     (__ \ "xaxis").read[String] and
     (__ \ "course_name").read[List[String]] and
     (__ \ "academicYear").read[List[String]] and
     (__ \ "semester").read[List[String]]and
     (__ \ "subject").read[List[String]] and
     (__ \ "yaxis").read[String] and
     (__ \ "chartType").read[String]
   ) (yaxispayload.apply _)
  implicit val yaxiswrite: Writes[yaxispayload] = (
    (__ \ "org_name").write[String] and
      (__ \ "widgetName").write[String] and
      (__ \ "xaxis").write[String] and
      (__ \ "course_name").write[List[String]] and
      (__ \ "academicYear").write[List[String]] and
      (__ \ "semester").write[List[String]]and
      (__ \ "subject").write[List[String]] and
      (__ \ "yaxis").write[String] and
      (__ \ "chartType").write[String]
    ) (unlift(yaxispayload.unapply))
  implicit val resultReads: Reads[resulttest] = (
    (JsPath \ "a").read[String] and
      (JsPath \ "b").read[Double]
    ) (resulttest.apply _)

  implicit val resultwrites: Writes[resulttest] = (
    (JsPath \ "a").write[String] and
      (JsPath \ "b").write[Double]
    )(unlift(resulttest.unapply))



  implicit val OrderWrites: Writes[Order] = (JsPath \ "orgId").write[String].and((JsPath \ "orgName").write[String]).and((JsPath \ "dropdown").write[String]).and((JsPath \ "lengthOfCourses").write[Int])(unlift(Order.unapply))
  implicit val OrderReads: Reads[Order] = (JsPath \ "orgId").read[String].and((JsPath \ "orgName").read[String]).and((JsPath \ "dropdown").read[String]).and((JsPath \ "lengthOfCourses").read[Int])(Order.apply _)

  /*implicit val importreads: Reads[Importdata] =
    (__ \ "orgId").read[String].map(Importdata)

  implicit val importwrites = Writes[Importdata]( Importdata =>
    JsString(Importdata.orgId)
  )*/

  implicit val importStudentwrite: Writes[ImportStudent] = (JsPath \ "orgId").write[String].and((JsPath \ "org_name").write[String]).and((JsPath \ "numberOfStudents").write[Int]).and((JsPath \ "dropdown").write[String])(unlift(ImportStudent.unapply))
  implicit val importStudentread: Reads[ImportStudent] = (JsPath \ "orgId").read[String].and((JsPath \ "org_name").read[String]).and((JsPath \ "numberOfStudents").read[Int]).and((JsPath \ "dropdown").read[String])(ImportStudent.apply _)

  implicit val markswrite: Writes[Marks] = (JsPath \ "subject").write[String].and((JsPath \ "mark").write[String])(unlift(Marks.unapply))
  implicit val marksread: Reads[Marks] = (JsPath \ "subject").read[String].and((JsPath \ "mark").read[String])(Marks.apply _)

  implicit val techObjwrite: Writes[TechObj] = (JsPath \ "technology").write[String].and((JsPath \ "weightage").write[String])(unlift(TechObj.unapply))
  implicit val techObjread: Reads[TechObj] = (JsPath \ "technology").read[String].and((JsPath \ "weightage").read[String])(TechObj.apply _)

  implicit val MarksRespreads: Reads[MarksResp] = (
    (__ \ "org_name").read[String] and
      (__ \ "course_name").read[String] and
      (__ \ "academicYear").read[String] and
      (__ \ "semester").read[String] and
      (__ \ "roll_no").read[String] and
      (__ \ "marks").read[List[Marks]]
    )(MarksResp.apply _)
  implicit val MarksRespwrites: Writes[MarksResp] = (
    (__ \ "org_name").write[String] and
      (__ \ "course_name").write[String] and
      (__ \ "academicYear").write[String] and
      (__ \ "semester").write[String] and
      (__ \ "roll_no").write[String] and
      (__ \ "marks").write[List[Marks]]
    )(unlift(MarksResp.unapply))

 /* implicit val GetAllMembersWrites: Writes[GetAllMembers] = (JsPath \ "actionType").write[String].and((JsPath \ "memberType").write[String])(unlift(GetAllMembers.unapply))
  implicit val GetAllMembersReads: Reads[GetAllMembers] = (JsPath \ "actionType").read[String].and((JsPath \ "memberType").read[String])(GetAllMembers.apply _)
*/


  implicit val MemberObjreads: Reads[MemberObj] = (
    (JsPath \ "id").read[String] and
    (JsPath \ "memberId").read[String] and
      (JsPath \ "firstName").read[String] and
      (JsPath \ "lastName").read[String] and
      (JsPath \ "emailId").read[String] and
      (JsPath \ "password").read[String] and
      (JsPath \ "role").read[String] and
      (JsPath \ "organization").read[String] and
      (JsPath \ "orgId").read[String] and
      (JsPath \ "passwordHistory").read[String] and
      (JsPath \ "defaultPasswordFlag").read[String] and
      (JsPath \ "blockFlag").read[String] and
      (JsPath \ "readonlyFlag").read[String] and
      (JsPath \ "dateTimeStamp").read[String] and
      (JsPath \ "charts").read[String]
    )(MemberObj.apply _)
  implicit val MemberObjwrites: Writes[MemberObj] = (
    (JsPath \ "id").write[String] and
    (JsPath \ "memberId").write[String] and
      (JsPath \ "firstName").write[String] and
      (JsPath \ "lastName").write[String] and
      (JsPath \ "emailId").write[String] and
      (JsPath \ "password").write[String] and
      (JsPath \ "role").write[String] and
      (JsPath \ "organization").write[String] and
      (JsPath \ "orgId").write[String] and
      (JsPath \ "passwordHistory").write[String] and
      (JsPath \ "defaultPasswordFlag").write[String] and
      (JsPath \ "blockFlag").write[String] and
      (JsPath \ "readonlyFlag").write[String] and
      (JsPath \ "dateTimeStamp").write[String] and
      (JsPath \ "charts").write[String]
    )(unlift(MemberObj.unapply))

  implicit val editFlagreads: Reads[EditFlag] = (
    (JsPath \ "emailId").read[String] and
      (JsPath \ "actionType").read[String]
    )(EditFlag.apply _)

  implicit val editFlagwrites: Writes[EditFlag] = (
    (JsPath \ "emailId").write[String] and
      (JsPath \ "actionType").write[String]
    )(unlift(EditFlag.unapply))

  def all = Action {implicit request =>

    Ok(views.html.index1())
  }

  def registor = Action {implicit request =>

    Ok(views.html.index1())
  }

  def dashboard = Action {implicit request =>

    Ok(views.html.Dashboard())
  }

  def authenticate = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[User1]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = User => {
        val repository1: mutable.MutableList[User1] = new mutable.MutableList[User1]()
        val email = User.emailId
        val query = MongoDBObject("emailId" -> email)
        val col = MongoFactory.memberCollection.findOne(query)


        if (col.toString().equalsIgnoreCase("None")) {
          println("User name not exist")
          Ok("[\t{\n\t\"status\": \"fail\",\n\t\"error\": \"User name not exist\"\n}\t]").as("application/json")
        }
        else {
          println("email is valid")
          val password = col.map(_.as[String]("password").toString())
          val role1= col.map(_.as[String]("role").toString())
          val memberId= col.map(_.as[String]("memberId").toString()).get
          val blockFlag = col.map(_.as[Int]("blockFlag").toString()).get
          val readonlyFlag = col.map(_.as[Int]("readonlyFlag").toString()).get
          if (password.get.equals(User.password)) {
            //println(password.get)
            println("password is valid")
            def uuid = java.util.UUID.randomUUID().toString

            def sha1(s: String) = java.security.MessageDigest.getInstance("SHA-1").digest(s.getBytes).map((b: Byte) => (if (b >= 0 & b < 16) "0" else "") + (b & 0xFF).toHexString).mkString

            val id = sha1(uuid: String)
            val sessionToken = id.substring(0, 16)

            println("going in counter to get session id")
            val que = MongoDBObject("_id" -> "counter")
            val res = MongoFactory.counterCollection.findOne(que)
            println("hello")
            var sessioncount = res.map(_.as[Int]("sessionId")).get

           // println("hello")
            println(sessioncount)


            //split the
            val sessionid1 = "session_" + sessioncount;
            sessioncount += 1;

            val date2 = Calendar.getInstance().getTime().toString()

            val useSession= sessionauth(sessionid1,email,sessionToken,date2,memberId)
            val que1 = MongoDBObject("emailId" -> email)
            val sessiondoc = MongoFactory.sessionCollection.findOne(que1);
            if(sessiondoc.toString().equalsIgnoreCase("None"))
            {
              insert.insertingSessiondoc(useSession)
              println("session inserted")
            }
            else
            {
              val upval1 = MongoDBObject("$set" -> MongoDBObject("sessionId" ->sessionid1,"sessionToken"->sessionToken,"dateTimeStamp"->date2))
              val session_update = MongoFactory.sessionCollection.update(que1,upval1)
              println("session updated")
            }



            val upval = MongoDBObject(
              "$set" -> MongoDBObject("sessionId" ->sessioncount)
            )
            val chk = MongoFactory.counterCollection.update(que,upval)
            println("session Count increamented in counter")


            //Ok(Json.toJson(repository1)).as(JSON)

            println("Login Succesfully")
            //val respo = TransResponse("Success", sessionid1)
            //val repository: mutable.MutableList[TransResponse] = new mutable.MutableList[TransResponse]()
            //repository += respo

            //Ok(Json.toJson(respo)).as("application/json")
            val json: JsValue = Json.obj("status"-> "Success", "sessionid" -> sessionid1, "blockFlag" -> blockFlag, "readonlyFlag" -> readonlyFlag)
            Ok(json).as("application/json")

          } else {

            println("Invalid password")
            Ok("\t{\n\t\"status\": \"fail\",\n\t\"error\": \"Invalid password\"\n}\t").as("application/json")
          }


        }

      }

    )

  }
  def register = Action(BodyParsers.parse.json) { request =>
    // val repository4: mutable.MutableList[DetailsProvider] = new mutable.MutableList[DetailsProvider]()
    val either = request.body.validate[Userregister]
    either.fold(
      errors => BadRequest("invalid json"),
      Userregister => {
        val firstName1 = Userregister.firstName;
        val lastName1 = Userregister.lastName;
        val email1 = Userregister.emailId;
        val password= Userregister.password
        val role1 = Userregister.role
        val organization1 = Userregister.organization
        val   query1= MongoDBObject("emailId"->email1)
        val col = MongoFactory.memberCollection.findOne(query1)
        if(col.toString().equals("None")) {


          var passwordHistory = new ListBuffer[String]()
          passwordHistory += password

          //val passwordHistory = List()
          //passwordHistory = password;
          println(passwordHistory)
          val defaultPasswordFlag = 0



          val que = MongoDBObject("_id" -> "counter")
          val res = MongoFactory.counterCollection.findOne(que)
          var memberCount = res.map(_.as[Int]("memberId")).get
          println("memberId: " + memberCount)
          var orgIdCount = res.map(_.as[Int]("orgId")).get

          println("orgId: " + orgIdCount)

          val readonlyFlag = 0;
          val blockFlag = 0;
          val dateTimeStamp = Calendar.getInstance().getTime().toString();
          val id = "member_" + memberCount.toString()
          val memberidString = "member_" + memberCount.toString()
          val orgIdString = "org_" + orgIdCount.toString();
          var charts: List[chartData] =  List()

          val use1 = Userregister1(id, memberidString, firstName1, lastName1, email1, password, role1, organization1, orgIdString,  passwordHistory,defaultPasswordFlag, blockFlag, readonlyFlag, dateTimeStamp,charts)
          println(use1)
          insert.insertingToken(use1)

          memberCount += 1
          val upval = MongoDBObject(
            "$set" -> MongoDBObject("memberId" ->memberCount)
          )
          val chk = MongoFactory.counterCollection.update(que,upval)


          val queorg = MongoDBObject("orgId" -> orgIdString)
          val resorg = MongoFactory.orgCollection.findOne(queorg)
          println(resorg)
          //fields in orgnization collection
          val orgId = orgIdString;
          val orgName = organization1;
          //var academicYear = new Array[String](10)
          var academicYear: List[String] =  List()

          var courses: List[Item] =  List()
          //var charts: List[chartData] =  List()
          //var courses = new Array[Item](10);

          //var studentDetails =  new Array[String](10)
          var studentDetails: List[String] =  List()



          if(resorg.toString().equals("None"))
          {
            println("none")
            val dropdown = ""
            val orguser = UserOrg(orgId,orgName,academicYear,courses,studentDetails,dateTimeStamp,dropdown)
            //println(insert.insertingOrgnization(orguser))
            insert.insertingOrgnization(orguser)
            println("orgnization inserted")


            orgIdCount += 1
            val queCounter = MongoDBObject("_id" -> "counter")
            val upval = MongoDBObject(
              "$set" -> MongoDBObject("orgId" ->orgIdCount, "memberId" -> memberCount)
            )
            val chk = MongoFactory.counterCollection.update(queCounter,upval)
          }
          else
          {
              println("Orgnization documents is there for this org id")
          }



          Ok("{\n\t\"status\": \"success\",\n\t\"error\": \"user suceesfully registered\"\n}").as("application/json")
        }else{
          Ok("{\n\t\"status\": \"failure\",\n\t\"error\": \" Username already exist\"\n}").as("application/json")
        }
      }
    )
  }


  def resetPassword = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[User2]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = User2 => {
        val repository1: mutable.MutableList[User1] = new mutable.MutableList[User1]()
        val oldpassword1 = User2.oldpassword
        val newpassword1 = User2.newpassword
        val sessionId = User2.sessionId
        val actionType = User2.actionType

        val querysession = MongoDBObject("sessionId" -> sessionId)
        val colsession = MongoFactory.sessionCollection.findOne(querysession)

        if (colsession.toString().equalsIgnoreCase("None")) {

          Ok("\t{\n\t\"status\": \"fail\",\n\t\"error\": \"Invalid Session!\"\n}\t").as("application/json")
        } else {

          val email = colsession.map(_.as[String]("emailId").toString())

            val query = MongoDBObject("emailId" -> email, "password" -> oldpassword1)
            val col = MongoFactory.memberCollection.findOne(query)
            if (col.toString().equalsIgnoreCase("None")) {

              Ok("\t{\n\t\"status\": \"fail\",\n\t\"error\": \"username and password doesnot match\"\n}\t").as("application/json")
            } else {

              val query1 = MongoDBObject("emailId" -> email,"passwordHistory" -> newpassword1)
              val col1 = MongoFactory.memberCollection.findOne(query1)
              println(col1)
              if (col1.toString().equalsIgnoreCase("None")) {

                val query2 = MongoDBObject("emailId" -> email)
                val col2 = MongoFactory.memberCollection.findOne(query2)
                val listOfPasswords = (col2.map(_.as[List[String]]("passwordHistory")))
                val b = (listOfPasswords.toList.head)
                val finalListofPasswords = newpassword1 :: b
                finalListofPasswords.foreach {
                  println
                }

                val upval = MongoDBObject(
                  "$set" -> MongoDBObject("passwordHistory" -> finalListofPasswords, "password" -> newpassword1, "defaultPasswordFlag" -> 1)
                )
                MongoFactory.memberCollection.update(query, upval)
                println("Password changed successfully!")
                Ok("\t{\n\t\"status\": \"success\",\n\t\"error\": \"password changed successfully\"\n}\t").as("application/json")
              } else {
                println("else part bala")
                Ok("\t{\n\t\"status\": \"fail\",\n\t\"error\": \"passwordalready exist\"\n}\t").as("application/json")
              }

            }
        }


      }

    )

  }


  def sessionApi = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[Sessionclass]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = Sessionclass => {


        val sessionid = Sessionclass.sessionid;
        val query = MongoDBObject("sessionId" -> sessionid)
        val col = MongoFactory.sessionCollection.findOne(query)


        if (col.toString().equalsIgnoreCase("None")) {
          println("session id Fail")
          Ok("[\t{\n\t\"status\": \"Fail\",\n\t\"error\": \"No Session id Found\"\n}\t]").as("application/json")
        }
        else {
          println("session id Found")
          Ok("[\t{\n\t\"status\": \"success\"\n}\t]").as("application/json")
        }

      }
    )

  }




  def WidgetApi = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[Widgetdata]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = Widgetdata => {


        val orgId = Widgetdata.orgId;
        val org_name = Widgetdata.org_name;
        //val course_name = Widgetdata.course_name;
        //val academicYear = Widgetdata.academicYear;
        //val semester = Widgetdata.semester;
        //val subject = Widgetdata.subject;
        val yaxis = Widgetdata.yaxis;
        val xaxis = Widgetdata.xaxis;
        val chartType = Widgetdata.chartType;
        val WidgetName = Widgetdata.WidgetName  ;

        val course_name = (request.body \ "course_name").get
        val academicYear = (request.body \ "academicYear").get
        val semester = (request.body \ "semester").get
        val subject = (request.body \ "subject").get


        val courseList = course_name.as[Array[String]]
        val academicList = academicYear.as[Array[String]]
        val semesterList = semester.as[Array[String]]
        val subjectList = subject.as[Array[String]]

        println("course_name: "+ course_name + " courseList: " + courseList)
        val query = MongoDBObject("orgId" -> orgId)
        val col = MongoFactory.memberCollection.findOne(query)


        if (col.toString().equalsIgnoreCase("None")) {
          println("No member found Fail")
          Ok("[\t{\n\t\"status\": \"Fail\",\n\t\"error\": \"No Session id Found\"\n}\t]").as("application/json")
        }
        else {


         val course_namebuild = MongoDBList.newBuilder
          for(myString <- courseList) {
            println(myString);

            course_namebuild += myString
          }
          course_namebuild

          val academicYearbuild = MongoDBList.newBuilder
          for(myString <- academicList) {
            println(myString);

            academicYearbuild += myString
          }
          academicYearbuild

          val semesterbuild = MongoDBList.newBuilder
          for(myString <- semesterList) {
            println(myString);

            semesterbuild += myString
          }
          semesterbuild

          val subjectbuild = MongoDBList.newBuilder
          for(myString <- subjectList) {
            println(myString);

            subjectbuild += myString
          }
          subjectbuild

         val chartsbuild = MongoDBObject.newBuilder
          chartsbuild += "org_name" -> org_name
          chartsbuild += "course_name" -> course_namebuild.result()
          chartsbuild += "academicYear" -> academicYearbuild.result()
          chartsbuild += "semester" -> semesterbuild.result()
          chartsbuild += "subject" -> subjectbuild.result()
          chartsbuild += "xaxis" -> xaxis
          chartsbuild += "yaxis" -> yaxis
          chartsbuild += "chartType" -> chartType
          chartsbuild += "WidgetName" -> WidgetName

          chartsbuild.result



          val coursesUpdate = $push("charts" -> chartsbuild.result())
          MongoFactory.memberCollection.findAndModify(query,coursesUpdate)
          println("Member found for charts Found")
          val json: JsValue = Json.obj("status" -> "success", "Message" -> "Chart successfully inserted!")
          Ok(json).as("application/json")
        }
      }
    )

  }

 /* def yaxis = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[yaxispayload]
    either.fold(
      errors => BadRequest("invalid json person"),
      yaxispayload => {
        //repository.+=(person)
        val org_name1 = yaxispayload.org_name;
        val course_name = yaxispayload.course_name;
        val academicYear = yaxispayload.academicYear;
        val semester = yaxispayload.semester;
        val subject = yaxispayload.subject;
        var yaxis =  yaxispayload.yaxis;
        println(yaxis)
        //val collection1 = MongoConnection()("my_scala")("marksDetails")
       //val collection1 = MongoConnection()("collegeAggregator")("marksDetails")
        var key = Array(org_name1,course_name,academicYear,semester,subject)
        val keys = "[\""+course_name.toString+"\",\""+academicYear.toString+"\",\""+semester.toString+"\",\""+subject.toString+"\"]"

        println(keys.toString)
        // ["""+course_name.toString+academicYear.toString+semester.toString+subject.toString+"""]


        val MapReduceInlineOutput = com.mongodb.casbah.map_reduce.MapReduceInlineOutput

        val mapF: JSFunction = {"""function(){var key ="""+keys.toString+""" ;var count=1;var values = {count:count};emit(key,values);}"""
          .stripMargin
        }
        println(mapF)
        val reduceF: JSFunction = { """ function(key,values){return {count:values.length};}"""
          .stripMargin
        }
        //val result = new Array[String](100)

        val result9 =  MongoFactory.marksDetailcollection.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject( "org_name" -> "Terralogic")),verbose = false)
        val resultobj = result9.cursor.next();
       println(resultobj)
        val countvalue = resultobj.get("value")

        println(countvalue)
        println(result9)
        // println(result9.cursor.next())

        // ["CSE","2010-2016","5","Java"]
        val keys1 = "[\""+course_name.toString+"\",\""+academicYear.toString+"\",\""+semester.toString+"\",\""+subject.toString+"\"]"

        //[ "Number of Students in the perticular year", "Overall Average Marks parcentage on all years", "Overall pass percentage", "Overall fail percentage" ];

        val mapavg: JSFunction = {"""function(){ var mark = [];var key ="""+keys.toString+""";for(i = 0;i<this.marks.length;i++){mark.push(this.marks[i].mark);}var values = {marks: mark}; emit(key,values);}"""
          .stripMargin
        }
        println(mapavg)

        val reduceavg: JSFunction = { """ function(key,values){var noOfMark = 0;
                                        |var markper = [];
                                        |var sum = 0;
                                        |for (var i = 0; i < values.length; i++) {
                                        |  for(var j = 0;j < values[i].marks.length; j++)
                                        |   {
                                        |      markper.push(values[i].marks[j]*100/100);
                                        |                        noOfMark++;
                                        |
                                        |                }
                                        |
                                        |        }
                                        |        for(i = 0;i<markper.length;i++)
                                        |        {
                                        |                sum += markper[i]
                                        |        }
                                        |        marksParcentage = sum/noOfMark;
                                        |
                                        |
                                        |                return {marksParcentage:marksParcentage};
                                        |
                                        |        }"""
          .stripMargin
        }

        val resultavg  =  MongoFactory.marksDetailcollection.mapReduce(mapavg, reduceavg, MapReduceInlineOutput, Some(MongoDBObject( "org_name" -> org_name1 )),verbose = false)
        //println(resultavg.cursor.foreach(results))
        println(resultavg)
        val resultobj1 = resultavg.cursor.next();
        val countvalue1 = resultobj1.get("value")

        println(countvalue1)

        val mappass: JSFunction= {"""function(){var status;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";}else{ status ="fail";}};var key = """+keys.toString+""";var values = {statusof:status};
emit(key,values);
};"""
          .stripMargin
        }

        val reducepass : JSFunction = { """ function(key,values){
                                          |  var totalcount = 0;
                                          |   for(j=0;j<values.length;j++)
                                          |   {
                                          |     if(values[j].statusof == "pass")
                                          |	 {
                                          |	    totalcount++;
                                          |	 }
                                          |
                                          |  }
                                          |var passper = (totalcount/values.length)*100;
                                          |
                                          |return {pass:passper};
                                          | } """
          .stripMargin
        }

        val finalpass  =  MongoFactory.marksDetailcollection.mapReduce(mappass,reducepass, MapReduceInlineOutput, Some(MongoDBObject( "org_name" -> org_name1 )),verbose = false)
        val resultobjpass = finalpass.cursor.next();
        val countvalue3 = resultobjpass.get("value")
        println(finalpass)
        println(countvalue3)
        val reducefail : JSFunction = { """ function(key,values){
                                          |   var failcount = 0;
                                          |   for(j=0;j<values.length;j++)
                                          |   {
                                          |     if(values[j].statusof == "fail")
                                          |	 {
                                          |	    failcount++;
                                          |	 }
                                          | }
                                          |var failper = (failcount/values.length)*100;
                                          |
                                          |return {fail:failper};
                                          | };
                                          |"""
          .stripMargin
        }

        val finalfail  =  MongoFactory.marksDetailcollection.mapReduce(mappass,reducefail, MapReduceInlineOutput, Some(MongoDBObject( "org_name" -> org_name1 )),verbose = false)
        val resultobjfail = finalfail.cursor.next();
        val countvalue4 = resultobjfail.get("value")
        println(finalfail)
        println(countvalue4)

        val query = MongoDBObject("org_name" ->org_name1)
        val col = MongoFactory.marksDetailcollection.findOne(query)
        if (yaxis =="Number of Students in the perticular year") {
          val json: JsValue = Json.obj("course_name" ->course_name ,"academicYear" -> academicYear, "semester" -> semester, "subject" -> subject,"countvalue" ->countvalue.toString)
          Ok(json).as("application/json")

        } else if(yaxis == "Overall Average Marks parcentage on all years") {
          val json: JsValue = Json.obj("course_name" -> course_name, "academicYear" -> academicYear, "semester" -> semester, "subject" -> subject, "markspercentage" -> countvalue1.toString)

          Ok(json).as("application/json")

        }else if(yaxis == "Overall pass percentage"){
          val json: JsValue = Json.obj("course_name" -> course_name, "academicYear" -> academicYear, "semester" -> semester, "subject" -> subject, "countvalue" -> countvalue3.toString)

          Ok(json).as("application/json")

        }else if(yaxis == "Overall fail percentage"){
          val json: JsValue = Json.obj("course_name" -> course_name, "academicYear" -> academicYear, "semester" -> semester, "subject" -> subject, "countvalue" -> countvalue4.toString)

          Ok(json).as("application/json")
        }else{
          Ok("[\t{\n\t\"status\": \"Fail\"\n}\t]").as("application/json")

        }

      }
    )
  }*/
 def yaxis = Action(BodyParsers.parse.json) { request =>
   val either = request.body.validate[yaxispayload]
   either.fold(
     errors => BadRequest("invalid json person"),
     yaxispayload => {

       val org_name1 = yaxispayload.org_name;
       val course_name = yaxispayload.course_name;
       val academicYear = yaxispayload.academicYear;
       val academicYear20 = yaxispayload.academicYear;
       val semester = yaxispayload.semester;
       val subject = yaxispayload.subject;
       var yaxis =  yaxispayload.yaxis;
       var xaxis = yaxispayload.xaxis;
        var academicyear1 = ArrayBuffer[String]()
       academicYear.foreach(x=>{academicyear1+=x;})
       val academicyear10  = academicyear1.mkString("[", ",", "]")
       val academicYear2 = academicyear1.mkString("/n")

       var  academicYearkey ="[\""+academicYear2+"\"]"
       println(academicyear10)
       var course = ArrayBuffer[String]()
       course_name.foreach(x=> { course +=x})
       val string3 = course.mkString("/n")
       var coursekey =  "[\""+string3+"\"]"
       println(coursekey)

       var semester1 = ArrayBuffer[String]()
       semester.foreach(x=> {semester1+=x})
       val string4 = semester.mkString("/n")
       var semkey =  "[\""+string4+"\"]"
       println(semkey)
       val collection1 = MongoConnection()("my_scala")("marksDetails")


       //val collection1 = MongoConnection()("collegeAggregator")("marksDetails")
       // var key = Array(org_name1,course_name,academicYear,semester,subject)

       //val query11 = MongoDBObject("org_name" -> org_name1,{"academicYear" $in academicYear})

       val col1 = collection1.find("academicYear" $in academicYear);

       val keys = "[\""+course_name.toString+"\",\""+academicYear.toString+"\",\""+semester.toString+"\",\""+subject.toString+"\"]"
     val MapReduceInlineOutput = com.mongodb.casbah.map_reduce.MapReduceInlineOutput

        val keys1 = "[\""+academicYear+"\",\""+subject+"\",\""+semester+"\"]"
       val keys2 = "[\""+course_name+"\",\""+subject+"\",\""+semester+"\"]"
       val keys3 = "[\""+course_name+"\",\""+subject+"\",\""+semester+"\"]"
       val keys4 = "[\""+course_name+"\",\""+academicYear+"\",\""+semester+"\"]"
       val keys21 =  "[\""+course_name+"\"]"
       val keys22 =  "[\""+course_name+"\"]"
       val keys23 =  "[\""+subject+"\"]"


       val query = MongoDBObject("org_name" ->org_name1)
       val col = MongoFactory.marksDetailcollection.findOne(query)
       //var result = JSONFormat.defaultFormatter;
       var sampleTemptest: List[resulttest] = List();
       var result =(Json.toJson(sampleTemptest));
       if (yaxis =="Number of Students in the perticular year") {
         var sample: List[String] = List();


         if (xaxis == "Courses") {
           val mapF: JSFunction = {
             """function(){var key = [this.course_name,"""+keys23.toString+"""];var count=1;var values = {course_name:this.course_name,count:count};emit(key,values);}"""
               .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values){ var course_name; for(var j=0;j<values.length;j++){course_name = values[j].course_name; }{return {course_name:course_name,count:values.length};}}"""
               .stripMargin
           }

           //val result9 = collection1.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("org_name" -> org_name1)), verbose = false)
           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))), verbose = false)
           println(result9)

           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println(b)
             println("the json " + json.\("course_name").get);
             println(course_name)
             println(course_name.contains(json.\("course_name").as[String]));
             if (course_name.contains(json.\("course_name").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("course_name").as[String], json.\("count").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else if (xaxis == "AcademicYears") {

           val mapF: JSFunction = {
             """function(){var key =[this.academicYear,""" + keys23.toString +""" ] ;var count=1;var values = {academicYear:this.academicYear,count:count};emit(key,values);}"""
               .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values){ var academicYear;for(j=0;j<values.length;j++){academicYear = values[j].academicYear;}return {academicYear:academicYear,count:values.length};}"""
               .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("course_name" -> MongoDBObject("$in" -> course_name), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))), verbose = false)

           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("academicYear").get);

             println(course_name.contains(json.\("academicYear").as[String]));
             if (academicYear20.contains(json.\("academicYear").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("academicYear").as[String], json.\("count").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else if (xaxis == "Semesters") {

           val mapF: JSFunction = {
             """function(){var key =[this.semester,""" + keys23.toString +
               """] ;var count=1;var values = {semester: this.semester,count:count};emit(key,values);}"""
                 .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values){ var semester;for(j=0;j<values.length;j++){semester = values[j].semester;}return {semester:semester,count:values.length};}"""
               .stripMargin
           }

           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF, reduceF, MapReduceInlineOutput,Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "course_name" -> MongoDBObject("$in" -> course_name))), verbose = false)
           //   println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("semester").get);

             println(semester.contains(json.\("semester").as[String]));
             if (semester.contains(json.\("semester").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("semester").as[String], json.\("count").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);


             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else if (xaxis == "Subjects") {

           var sublength = subject.length;
           var i = 0;
           println(subject(i));
           println(sublength)
           val mapF: JSFunction = {
             """function(){
               | //var key = "Java1";
               | var count = 0;
               | for(i = 0;i < this.marks.length;i++){
               |   var key = this.marks[i].subject;
               |  count++;
               |  var values = {subject10: this.marks[i].subject,count:count};
               | emit(key,values);
               | }
               |}"""
               .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values){ var subject10;var data;for(j=0;j<values.length;j++){subject10 = values[j].subject10;data=values[j].data}return {subject10:subject10,count:values.length,data:data};}"""
               .stripMargin
           }

           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("org_name" -> org_name1)), verbose = false)
           println("hello bala" + result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           var sampleTemp: List[String] = List();
           var subtemp=""
           var counttemp1 = 0.0;

           //  sampleTemptest: List[sub] = List()
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("subject10").get);
             var str2Json: JsValue = json;
             println(subject.contains(json.\("subject10").as[String]));
             if (subject.contains(json.\("subject10").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("subject10").as[String],json.\("count").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);


             }
             println(b);

             //val resultdata = resulttest("a"->subtemp,"b"->counttemp1)

             // println(resultdata1);

             println("hello" + str2Json);
             //println(json1)

             //val subjecthi = jsvalue=>(json \ "subject").as[String])
             /*   var subjectdata = "";
                (json \ "subject10").asOpt[String] match {
                  case Some(data) => subjectdata = data;
                  case None => println("email key is not found")
                }*/
             //val subject1 = (json \ "subject").as[String])
             //println(subject1);
             //subject.foreach(x=>{if(x==subject1){ return json}})

             /*for (i <- 0 until sample.length) {
               println(s"$i is ${sample(i)}")
             }*/


           }
           result = (Json.toJson(sampleTemptest));
           println((result));
           // Ok("[\t{\n\t\"status\": " + result + "\n}\t]").as("application/json")

         } else if (xaxis == "Allsubjects") {


           val mapF: JSFunction = {
             """function(){var count = 0;var sub = [];var mark =[];for(i = 0;i < this.marks.length;i++){mark.push(this.marks[i].mark);var key = this.marks[i].subject;count++;var values = {subject:this.marks[i].subject,count:count};emit(key,values);}}"""
               .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values)
               | {
               |   var subject;
               |  for(j=0;j<values.length;j++){
               |   subject = values[j].subject;
               |   }
               |
               |  return {subject:subject,count: values.length};
               |
               | }"""
               .stripMargin
           }

           val result9 = collection1.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("org_name" -> org_name1)), verbose = false)
           //   println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             sample = a.get("value").toString :: sample;
           }
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else if (xaxis == "AllacademicYear") {

           val mapF: JSFunction = {
             """function(){var key =[this.academicYear,""" + keys2.toString +
               """] ;var count=1;var values = {academicYear:this.academicYear,count:count};emit(key,values);}"""
                 .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values){ var academicYear;for(j=0;j<values.length;j++){academicYear = values[j].academicYear;}return {academicYear:academicYear,count:values.length};}"""
               .stripMargin
           }

           val result9 = collection1.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("org_name" -> org_name1)), verbose = false)
           //   println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             sample = a.get("value").toString :: sample;
           }
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else if (xaxis == "Allcourses") {

           val mapF: JSFunction = {
             """function(){var key =[this.course_name,""" + keys2.toString +
               """] ;var count=1;var values = {course_name:this.course_name,count:count};emit(key,values);}"""
                 .stripMargin
           }
           println(mapF)
           val reduceF: JSFunction = {
             """function(key,values){ var course_name;for(j=0;j<values.length;j++){course_name = values[j].course_name;}return {course_name:course_name,count:values.length};}"""
               .stripMargin
           }

           val result9 = collection1.mapReduce(mapF, reduceF, MapReduceInlineOutput, Some(MongoDBObject("org_name" -> org_name1)), verbose = false)
           //   println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             sample = a.get("value").toString :: sample;
           }
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else {


           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         }

         Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

       }else if(yaxis =="Overall Average Marks parcentage on all years") {
         var sample: List[String] = List()
         if (xaxis =="Courses") {
           val mapF: JSFunction = {
             """function(){var key = [this.course_name,"""+keys23.toString+"""];var mark = [];var count=1;var marksParcentage=0;var sum =0;for(i=0;i< this.marks.length;i++){mark.push(this.marks[i].mark);
                                                                             |sum += (this.marks[i].mark)*100/100;
                                                                             |marksParcentage =(sum/this.marks.length);
                                                                             |}
                                                                             |var values = {course_name:this.course_name,count:count,marksParcentage:marksParcentage,marks:mark};emit(key,values);
                                                                             |}"""
               .stripMargin
           }
           println(mapF)
           val reduceavg: JSFunction ={""" function(key,values)
                                         |        {
                                         |        var count = values.length;
                                         |        var course_name;
                                         |
                                         |        var noOfMark = 0;
                                         |        var markper = [];
                                         |        var sum = 0;
                                         |        for (var i = 0; i < values.length; i++) {
                                         |              course_name = values[i].course_name;
                                         |                for(var j = 0;j < values[i].marks.length; j++)
                                         |                {
                                         |                       markper.push(values[i].marks[j]*100/100);
                                         |                        noOfMark++;
                                         |                }
                                         |
                                         |        }
                                         |        for(i = 0;i<markper.length;i++)
                                         |        {
                                         |                sum += markper[i]
                                         |        }
                                         |        marksParcentage = (sum/noOfMark);
                                         |
                                         |   return { course_name:course_name,count:count, marksParcentage:marksParcentage};
                                         |   }"""
             .stripMargin
           }

           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF,reduceavg, MapReduceInlineOutput,Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))) , verbose = false)
           println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("course_name").get);
             var str2Json: JsValue = json;
             println(course_name.contains(json.\("course_name").as[String]));
             if (course_name.contains(json.\("course_name").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("course_name").as[String], json.\("marksParcentage").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
           }
           result = (Json.toJson(sampleTemptest));
           println(result);
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

         }else if(xaxis =="AcademicYears"){
           println("hi")
           val mapF: JSFunction = {
             """function(){var key = [this.academicYear,"""+keys23.toString+"""];var mark = [];var count=1;var marksParcentage=0;var sum =0;for(i=0;i< this.marks.length;i++){mark.push(this.marks[i].mark);
                                                                              |sum += (this.marks[i].mark)*100/100;
                                                                              |marksParcentage =(sum/this.marks.length);
                                                                              |}
                                                                              |var values = {academicYear:this.academicYear,count:count,marksParcentage:marksParcentage,marks:mark};emit(key,values);
                                                                              |}"""
               .stripMargin
           }
           println("imin map"+mapF)
           val reduceavg: JSFunction = {""" function(key,values)
                                          |        {
                                          |        var count = values.length;
                                          |          var academicYear ;
                                          |
                                          |        var noOfMark = 0;
                                          |        var markper = [];
                                          |        var sum = 0;
                                          |        for (var i = 0; i < values.length; i++) {
                                          |             academicYear  = values[i].academicYear;
                                          |                for(var j = 0;j < values[i].marks.length; j++)
                                          |                {
                                          |                       markper.push(values[i].marks[j]*100/100);
                                          |                        noOfMark++;
                                          |                }
                                          |
                                          |        }
                                          |        for(i = 0;i<markper.length;i++)
                                          |        {
                                          |                sum += markper[i]
                                          |        }
                                          |        marksParcentage = (sum/noOfMark);
                                          |
                                          |   return { academicYear:academicYear,count:count, marksParcentage:marksParcentage};
                                          |   }"""
             .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF,reduceavg, MapReduceInlineOutput,Some(MongoDBObject("course_name" -> MongoDBObject("$in" -> course_name), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))) , verbose = false)
           println("mapreduce1"+result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             println(b)
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("academicYear").get);

             println(course_name.contains(json.\("academicYear").as[String]));
             if (academicYear20.contains(json.\("academicYear").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("academicYear").as[String], json.\("marksParcentage").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");


         }else if(xaxis == "Semesters"){
           val mapF: JSFunction = {
             """function(){var key = [this.semester,"""+keys23.toString+"""];var mark = [];var count=1;var marksParcentage=0;var sum =0;for(i=0;i< this.marks.length;i++){mark.push(this.marks[i].mark);
                                                                          |sum += (this.marks[i].mark)*100/100;
                                                                          |marksParcentage =(sum/this.marks.length);
                                                                          |}
                                                                          |var values = {semester:this.semester,count:count,marksParcentage:marksParcentage,marks:mark};emit(key,values);
                                                                          |}"""
               .stripMargin
           }
           println("imin map"+mapF)
           val reduceavg: JSFunction = {""" function(key,values)
                                          |        {
                                          |        var count = values.length;
                                          |          var semester ;
                                          |
                                          |        var noOfMark = 0;
                                          |        var markper = [];
                                          |        var sum = 0;
                                          |        for (var i = 0; i < values.length; i++) {
                                          |             semester  = values[i].semester;
                                          |                for(var j = 0;j < values[i].marks.length; j++)
                                          |                {
                                          |                       markper.push(values[i].marks[j]*100/100);
                                          |                        noOfMark++;
                                          |                }
                                          |
                                          |        }
                                          |        for(i = 0;i<markper.length;i++)
                                          |        {
                                          |                sum += markper[i]
                                          |        }
                                          |        marksParcentage = (sum/noOfMark);
                                          |
                                          |   return { semester:semester,count:count, marksParcentage:marksParcentage};
                                          |   }"""
             .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF, reduceavg, MapReduceInlineOutput,Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "course_name" -> MongoDBObject("$in" -> course_name)))
             , verbose = false)
           println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("semester").get);

             println(semester.contains(json.\("semester").as[String]));
             if (semester.contains(json.\("semester").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("semester").as[String], json.\("marksParcentage").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);


             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         }else if(xaxis == "Subjects") {
           println("inside subject")
           val mapF: JSFunction = {
             """function(){var mark = [];var count=1;var marksParcentage=0;var sum =0;for(i=0;i< this.marks.length;i++){mark.push(this.marks[i].mark);sum += (this.marks[i].mark)*100/100;marksParcentage =(sum/this.marks.length);key = [this.marks[i].subject];var values = {subject:this.marks[i].subject,count:count,marksParcentage:marksParcentage,marks:mark}
               |emit(key,values);}}"""
             .stripMargin
           }
           println(mapF)
           val reduceavg: JSFunction = {
             """ function(key,values)
               |        {
               |        var count = values.length;
               |          var subject ;
               |
               |        var noOfMark = 0;
               |        var markper = [];
               |        var sum = 0;
               |        for (var i = 0; i < values.length; i++) {
               |             subject = values[i].subject;
               |                for(var j = 0;j < values[i].marks.length; j++)
               |                {
               |                       markper.push(values[i].marks[j]*100/100);
               |                        noOfMark++;
               |                }
               |
               |        }
               |        for(i = 0;i<markper.length;i++)
               |        {
               |                sum += markper[i]
               |        }
               |        marksParcentage = (sum/noOfMark);
               |
               |   return { subject:subject,count:count, marksParcentage:marksParcentage};
               |   }"""
               .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mapF, reduceavg, MapReduceInlineOutput, Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "course_name" -> MongoDBObject("$in" -> course_name),"semester" -> MongoDBObject("$in" -> semester))), verbose = false)
           println(result9)
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("subject").get);

             println(subject.contains(json.\("subject").as[String]));
             if (subject.contains(json.\("subject").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("subject").as[String], json.\("marksParcentage").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
         }
           }
         result = (Json.toJson(sampleTemptest));
         println((result));

         Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

       }else if(yaxis == "Overall pass percentage") {
         var sample: List[String] = List()
         if (xaxis == "Courses") {
           val mappass: JSFunction = {
             """function(){var status; var count=0; var passper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";count++}else{ status ="fail";};passper = (count/this.marks.length)*100 };var key = [ this.course_name,""" + keys23.toString +
               """];  var values = {course_name:this.course_name,status:status,passper:passper};
 |emit(key,values);
};"""
               .stripMargin
           }

           val reducepass: JSFunction = {""" function(key,values){
                                           |  var totalcount = 0;
                                           |  var course_name;
                                           |  var status1;
                                           |   for(j=0;j<values.length;j++)
                                           |   {
                                           |     course_name = values[j].course_name;
                                           |     status1 = values[j].status;
                                           |     if(values[j].statusof == "pass")
                                           |	 {
                                           |	    totalcount++;
                                           |	 }
                                           |
                                           |  }
                                           |var passper = (totalcount/values.length)*100;
                                           |
                                           |return {course_name:course_name,status:status1,passper:passper};
                                           | } """
             .stripMargin
           }

           val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducepass, MapReduceInlineOutput,Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))) , verbose = false)
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("course_name").get);

             println(course_name.contains(json.\("course_name").as[String]));
             if (course_name.contains(json.\("course_name").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").
                 toString)

               val resultdata1 = resulttest(json.\("course_name").as[String], json.\("passper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);
             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));
           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

         }else if(xaxis == "AcademicYears"){

           val mappass: JSFunction= {
             """function(){var status; var count=0;  var passper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";count++}else{ status ="fail";};passper = (count/this.marks.length)*100 ;var key = [ this.academicYear,""" + keys23.toString +
               """];  var values = {academicYear:this.academicYear,status:status,passper:passper};
 |emit(key,values)};
};"""
               .stripMargin
           }

           val reducepass : JSFunction = {
             """ function(key,values){
               |  var totalcount = 0;
               |  var academicYear;
               |  var status1;
               |   for(j=0;j<values.length;j++)
               |   {
               |     academicYear = values[j].academicYear;
               |     status1 = values[j].status;
               |     if(values[j].statusof == "pass")
               |	 {
               |	    totalcount++;
               |	 }
               |
               |
               |var passper = (totalcount/values.length)*100;
               |
               |return {academicYear:academicYear,status:status1,passper:passper};
               |}
               | } """
               .stripMargin
           }



           val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducepass, MapReduceInlineOutput,Some(MongoDBObject("course_name" -> MongoDBObject("$in" -> course_name), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))), verbose = false)
           //   println(result9)
           //  println(result9.cursor.foreach(x=>println(x)))
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\(
               "academicYear").get);
             println(academicYear20)
             println(academicYear20.contains(json
               .\("academicYear").as[String]));
             if (
               academicYear20.contains(json.\("academicYear").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val
               resultdata1 = resulttest(
                 json.\("academicYear").as[String], json.\("passper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         }
         else if(xaxis == "Semesters"){

           val
           mappass: JSFunction= {
             """function(){var status; var count=0;  var passper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";count++}else{ status ="fail";};passper = (count/this.marks.length)*100 };var key = [ this.semester,""" + keys23.toString +"""];  var values = {semester:this.semester,status:status,passper:passper};
 |emit(key,values);
};"""
               .stripMargin
           }
           val reducepass : JSFunction = {
             """ function(key,values){
               |  var totalcount = 0;
               |  var semester;
               |  var status1;
               |   for(j=0;j<values.length;j++)
               |   {
               |     semester = values[j].semester;
               |     status1 = values[j].status;
               |     if(values[j].statusof == "pass")
               |	 {
               |	    totalcount++;
               |	 }
               |
               |  }
               |var passper = (totalcount/values.length)*100;
               |
               |return {semester:semester,status:status1,passper:passper};
               | } """
               .stripMargin
           }
      val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducepass, MapReduceInlineOutput, Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "course_name" ->MongoDBObject("$in" -> course_name))) , verbose = false)
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             println(b)
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("semester").get);

             println(semester.contains(json.\("semester").as[String]));
             if (
               semester.contains(json.\("semester").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 =
                 resulttest(json.\("semester").as[String], json.\("passper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);
             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         }else if(xaxis == "Subjects"){

           val mappass: JSFunction= {"""function(){var status; var count=0;  var passper;for(i = 0;i< this.marks.length;i++){ if(this.marks[i].mark>= 50){status ="pass";count++}else{ status ="fail";}
                                       |passper = (count/this.marks.length)*100 ;
                                       |var key = [ this.marks[i].subject];  var values = {subject:this.marks[i].subject,status:status,passper:passper};
                                       | emit(key,values);
                                       | }
                                       |}"""
             .stripMargin
           }
           val reducepass : JSFunction = { """ function(key,values){
                                             |  var totalcount = 0;
                                             |  var subject;
                                             |  var status1;
                                             |   for(j=0;j<values.length;j++)
                                             |   {
                                             |     subject = values[j].subject;
                                             |     status1 = values[j].status;
                                             |     if(values[j].statusof == "pass")
                                             |	 {
                                             |	    totalcount++;
                                             |	 }
                                             |
                                             |  }
                                             |var passper = (totalcount/values.length)*100;
                                             |
                                             |return {subject:subject,status:status1,passper:passper};
                                             | } """
             .stripMargin
           }
      val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducepass, MapReduceInlineOutput, Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "course_name" ->MongoDBObject("$in" -> course_name),"semester" ->MongoDBObject("$in" -> semester))), verbose = false)

           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("subject").get);

             println(subject.contains(json.\("subject").as[String]));
             if (subject.contains(json.\("subject").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("subject").as[String], json.\("passper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);
           }

         }
       }
       result = (Json.toJson(sampleTemptest));
       println((result));
         Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

       }else if(yaxis =="Overall fail percentage") {
         var sample: List[String] = List()
         if(xaxis =="Courses") {
           val mappass: JSFunction= {"""function(){var status; var count=0; var failper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";}else{ status ="fail";count++};failper = (count/this.marks.length)*100 };var key = [ this.course_name,"Java"];  var values = {course_name:this.course_name,status:status,failper:failper};emit(key,values);}"""
             .stripMargin
           }

           val reducefail : JSFunction = {""" function(key,values){
                                            |  var totalcount = 0;
                                            |  var course_name;
                                            |  var status1;
                                            |   for(j=0;j<values.length;j++)
                                            |   {
                                            |     course_name = values[j].course_name;
                                            |     status1 = values[j].status;
                                            |     if(values[j].statusof =="fail")
                                            |	 {
                                            |	    totalcount++;
                                            |	 }
                                            |
                                            |  }
                                            |var failper = (totalcount/values.length)*100;
                                            |
                                            |return {course_name:course_name,status:status1,failper:failper};
                                            | } """
             .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducefail, MapReduceInlineOutput,Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))), verbose = false)
           println(result9)
           while (result9.cursor.hasNext) {

             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println(b);
             println("the json " + json.\("course_name").get);

             println(course_name.contains(json.\("course_name").as[String]));
             if (course_name.contains(json.\("course_name").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("course_name").as[String], json.\("failper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);
          }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");
         } else if(xaxis == "AcademicYears"){
           println("hiiiiiiiiiiiiiiiiiiiii")
           val mappass: JSFunction= {"""function(){var status; var count=0; var failper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";}else{ status ="fail";count++};failper = (count/this.marks.length)*100 };var key = [ this.academicYear,"""+keys23.toString+"""];  var values = {academicYear:this.academicYear,status:status,failper:failper};emit(key,values);}""".stripMargin}

           val reducefail : JSFunction = { """ function(key,values){
                                             |   var failcount = 0;
                                             |   var academicYear;
                                             |   var status1;
                                             |   for(j=0;j<values.length;j++)
                                             |   {
                                             |      academicYear: values[j].academicYear;
                                             |      status1 = values[j].status;
                                             |     if(values[j].status == "fail")
                                             |	 {
                                             |	    failcount++;
                                             |	 }
                                             | }
                                             |var failper = (failcount/values.length)*100;
                                             |
                                             |return {academicYear:academicYear,status:status1,failper:failper};
                                             | };
                                             |"""
             .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducefail, MapReduceInlineOutput,Some(MongoDBObject("course_name" -> MongoDBObject("$in" -> course_name), "org_name" -> org_name1, "semester" -> MongoDBObject("$in" -> semester))), verbose = false)
           println(result9)
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println(b)
             println("the json "+ json.\("academicYear").get);

             println(course_name.contains(json.\("academicYear").as[String]));
             if (academicYear20.contains(json.\("academicYear").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("academicYear").as[String],json.\("failper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }
           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

         }else if(xaxis == "Semesters"){
           val mappass: JSFunction= {"""function(){var status; var count=0;  var failper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";}else{ status ="fail";count++;};failper = (count/this.marks.length)*100 };var key = [ this.semester,""" + keys3.toString +
             """];  var values = {semester :this.semester,status:status,failper:failper};
 |emit(key,values);
};"""
             .stripMargin
           }

           val reducefail : JSFunction = { """ function(key,values){
                                             |   var failcount = 0;
                                             |   var semester;
                                             |   var status1;
                                             |   for(j=0;j<values.length;j++)
                                             |   {
                                             |     semester: values[j].semester;
                                             |      status1 = values[j].status;
                                             |     if(values[j].statusof == "fail")
                                             |	 {
                                             |	    failcount++;
                                             |	 }
                                             | }
                                             |var failper = (failcount/values.length)*100;
                                             |
                                             |return {semester:semester,status:status,failper:failper};
                                             | };
                                             |"""
             .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducefail, MapReduceInlineOutput, Some(MongoDBObject("academicYear" -> MongoDBObject("$in" -> academicYear), "org_name" -> org_name1, "course_name" -> MongoDBObject("$in" -> course_name))), verbose = false)
           while (result9.cursor.hasNext) {
             var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("semester").get);

             println(semester.contains(json.\("semester").as[String]));
             if (semester.contains(json.\("semester").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("semester").as[String], json.\("failper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);

             }

           }
           result = (Json.toJson(sampleTemptest));
           println((result));

           Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

         }else if(xaxis == "Subjects"){
           val mappass: JSFunction= {"""function(){var status="";var count=0; var failper;for(i = 0;i< this.marks.length;i++){if(this.marks[i].mark>= 50){status ="pass";}else{status="fail";count++};failper = (count/this.marks.length)*100 ;var key = [this.marks[i].subject];  var values = {subject:this.marks[i].subject,status:status,failper:failper};emit(key,values);}}"""
             .stripMargin
           }

           val reducefail : JSFunction = { """ function(key,values){
                                             |   var failcount = 0;
                                             |   var  subject;
                                             |   var status1;
                                             |   for(j=0;j<values.length;j++)
                                             |   {
                                             |     subject:values[j].subject;
                                             |      status1 = values[j].status;
                                             |     if(values[j].status == "fail")
                                             |	 {
                                             |	    failcount++;
                                             |	 }
                                             | }
                                             |var failper = (failcount/values.length)*100;
                                             |
                                             |return {subject:subject,status:status,failper:failper};
                                             | }
                                             |"""
             .stripMargin
           }


           val result9 = MongoFactory.marksDetailcollection.mapReduce(mappass, reducefail, MapReduceInlineOutput, Some(MongoDBObject("org_name" -> org_name1)), verbose = false)
           println(result9)
           while (result9.cursor.hasNext) {
        var a = result9.cursor.next();
             var b = (a.get("value").toString);
             val json: JsValue = Json.parse(b);
             println("the json " + json.\("subject").get);

             println(subject.contains(json.\("subject").as[String]));
             if (subject.contains(json.\("subject").as[String])) {
               sample = a.get("value").toString :: sample;
               val obj = sub(a.get("value").toString)

               val resultdata1 = resulttest(json.\("subject").as[String], json.\("failper").as[Double])
               sampleTemptest = resultdata1 :: sampleTemptest;
               println(sampleTemptest);


             }

           }

       }
       result = (Json.toJson(sampleTemptest));
       println((result));

         Ok("{\n\t\"status\": " + result + "\n}").as("application/json");


       }else{
         Ok("{\n\t\"status\": " + result + "\n}").as("application/json");

       }

     }
   )
 }





  def deleteWidgetApi = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[deleteData]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = deleteData => {

        val orgIdPay = deleteData.orgId;
        val WidgetNamePay = deleteData.WidgetName;
        val chartTypePay = deleteData.chartType;


        val query = MongoDBObject("orgId" -> orgIdPay)
        val col = MongoFactory.memberCollection.findOne(query)

        if (col.toString().equalsIgnoreCase("None")) {
          val json: JsValue = Json.obj("status" -> "Fail", "Message" -> "Widget not deleted Check the Org id!")
          Ok(json).as("application/json")
        }
        else {
          val removingData = $pull("charts" -> MongoDBObject("WidgetName" -> WidgetNamePay))

          MongoFactory.memberCollection.update(query, removingData)

          val json: JsValue = Json.obj("status" -> "Success", "Message" -> "Widget is successfully deleted")
          Ok(json).as("application/json")
        }

      }
    )

  }







  def logoutApi = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[Sessionclass]
    either.fold(
      errors => BadRequest("invalid json person"),
      Sessionclass => {
        //repository.+=(person)
        val sessionid = Sessionclass.sessionid;
        val query = MongoDBObject("sessionId" -> sessionid)
        val col = MongoFactory.sessionCollection.findOne(query)
        if(col.toString().equalsIgnoreCase("None")){
          Ok("{\n\t\"status\": \"fail\",\n\t\"error\": \"Invalid (or) expired access token\"\n}").as("application/json")
        }else{

          val query2 =MongoDBObject("sessionId" -> sessionid)
          val col2 = MongoFactory.sessionCollection.remove(query2)
          Ok("{\n\t\"status\": \"Success\",\n\t\"message\": \"Sucessfull Logged Out\"\n}").as("application/json")
        }

      }
    )
  }


  def fetchuserDetailsApi = Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[Fetchuserclass]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = Fetchuserclass => {

        val sessionid = Fetchuserclass.sessionid;

        val query = MongoDBObject("sessionId" -> sessionid)
        val col = MongoFactory.sessionCollection.findOne(query)


        if (col.toString().equalsIgnoreCase("None")) {
          println("session id Fail")
          Ok("[\t{\n\t\"status\": \"Fail\",\n\t\"error\": \"No Session id Found\"\n}\t]").as("application/json")
        }
        else {

          val email = col.map(_.as[String]("emailId")).get
          val query = MongoDBObject("emailId" -> email)
          println(email)
          val col1 = MongoFactory.memberCollection.findOne(query)
          println(col1)

          if (col1.toString().equalsIgnoreCase("None")) {
            println("No email for session")
            Ok("[\t{\n\t\"status\": \"Fail\",\n\t\"error\": \"No email id Found\"\n}\t]").as("application/json")

          }
          else {
            val firstName = col1.map(_.as[String]("firstName")).get
            val lastName = col1.map(_.as[String]("lastName")).get
            val role = col1.map(_.as[String]("role")).get
            val organization = col1.map(_.as[String]("organization")).get
            val defaultPasswordFlag = col1.map(_.as[Int]("defaultPasswordFlag")).get
            val orgId = col1.map(_.as[String]("orgId")).get
            println("User details found")
            println("user details " +firstName +";"+lastName +";"+role +";"+organization)
            val use = Fetchclass(firstName,lastName,role,organization,defaultPasswordFlag,orgId,"Success")
            println("user details " +firstName)



            var sample1: List[chartData] =  List()
            val charts = col1.map(_.as[List[chartData]]("charts")).get


            for (res <- col1) {
              var memberInfo1 = res.getAs[MongoDBList]("charts").get
              println("Bala"+charts.length);
              for(i <- 0 to charts.length-1) {
                var courseListScala: List[String] = List()
                var academicListScala: List[String] = List()
                var semesterListScala: List[String] = List()
                var subjectListScala: List[String] = List()
                val member1 = memberInfo1.as[BasicDBObject](i)
                val courseListMongo = member1.getAs[MongoDBList]("course_name").get
                val academicListMongo = member1.getAs[MongoDBList]("academicYear").get
                val semesterListMongo = member1.getAs[MongoDBList]("semester").get
                val subjectListMongo = member1.getAs[MongoDBList]("subject").get
                //val courseListZ = courseList.as[List[String]]
                println("courseList" + courseListMongo)
                for(c <- courseListMongo){
                  println("hello: "+ c.toString())
                  courseListScala = c.toString :: courseListScala

                }
                for(c <- academicListMongo){
                  println("hello: "+ c.toString())
                  academicListScala = c.toString :: academicListScala

                }
                for(c <- semesterListMongo){
                  println("hello: "+ c.toString())
                  semesterListScala = c.toString :: semesterListScala

                }
                for(c <- subjectListMongo){
                  println("hello: "+ c.toString())
                  subjectListScala = c.toString :: subjectListScala

                }
                println(courseListScala)
                val obj: chartData = chartData(orgId,courseListScala.reverse,academicListScala.reverse,semesterListScala.reverse,subjectListScala.reverse,member1("xaxis").toString,member1("yaxis").toString,member1("chartType").toString,member1("WidgetName").toString)
                sample1 = obj :: sample1
              }
            }

            println(sample1)
            val chartList = Json.toJson(sample1)



            val query = MongoDBObject("orgId" ->orgId )
            val orgdoc = MongoFactory.orgCollection.findOne(query)

            val orgName = orgdoc.map(_.as[String]("orgName")).get
            println("orgname:---  "+orgName)

            if (orgdoc.toString().equalsIgnoreCase("None")) {
              println("No orgId for member")
              Ok("[\t{\n\t\"status\": \"Fail\",\n\t\"error\": \"No org id Found\",\n\t\"org\": \"No\"\n}\t]").as("application/json")

            }

            else {
              //fatching Dropdown object from org collection
              val dropdown = orgdoc.map(_.as[String]("dropdown")).get
              //val dropdownJson = Json.toJson(dropdown);
              println("dropdown== " + dropdown)

              //fatching data from technologies and language
              println("fatching data from technologies ----------------")
              val techDocu = MongoFactory.technologiescollection.find
              //var arrayTech: Array[TechObj] = new Array[TechObj](techDocu.length)
              var listTech: List[TechObj] = List()

              for (x <- techDocu) {
                var i = 0
                //println(x("Technology"))
                val technology = x("Technology").toString();
                val weightage = x("Weightage").toString();
                val techDoc = TechObj(technology, weightage)
                //arrayTech(i)=techDoc
                listTech = techDoc :: listTech
              }
              println(listTech)
              val listTechJson = Json.toJson(listTech)

              println("fatching data from Languages ----------------")
              val langDocu = MongoFactory.languagescollection.find
              //langDocu.foreach(println)
              var listLang: List[TechObj] = List()

              for (y <- langDocu) {
                var i = 0
                // println(y("Technology"))
                val technology = y("Technology").toString();
                val weightage = y("Weightage").toString();
                val techDoc = TechObj(technology, weightage)
                //arrayTech(i)=techDoc
                listLang = techDoc :: listLang
              }
              println(listLang)
              val listLangJson = Json.toJson(listLang)


              var sample: List[Item] = List()
              val courses = orgdoc.map(_.as[List[Item]]("courses")).get
              for (res <- orgdoc) {
                var memberInfo = res.getAs[MongoDBList]("courses").get
                for (i <- 0 to courses.length - 1) {
                  val member = memberInfo.as[BasicDBObject](i)
                  // prints the individual name of the inside object
                  println(member("courseName"))
                  val obj: Item = Item(member("courseName").toString, member("totalClasses").toString, member("totalSemesters").toString, member("academicYear").toString)
                  sample = obj :: sample
                }
              }

              println(sample)
              val courseList = Json.toJson(sample)

              //Nitin code for getting for marks details

              val queryOrgname = MongoDBObject("org_name" -> orgName)
              val markdoc = MongoFactory.marksDetailcollection.findOne(queryOrgname)
              if (markdoc.toString().equalsIgnoreCase("None")) {
                println("Error: Marks details is not there for this user please import student details.")
                val status = "success"
                val orgstatus = "yes"
                val json: JsValue = Json.obj("courses" -> courseList, "dashboard" -> use, "status" -> status, "org" -> orgstatus, "technology" -> listTechJson, "language" -> listLangJson, "charts" -> chartList, "dropdown" -> dropdown)
                Ok(json).as("application/json")
              }
              else {
                println("markdoc: " + markdoc)
                var markList: List[Marks] = List()
                println("nnnnnnnnnnnnnnnn----: " + markdoc)
                val org_name = markdoc.map(_.as[String]("org_name")).get
                val course_name = markdoc.map(_.as[String]("course_name")).get
                val academicYear = markdoc.map(_.as[String]("academicYear")).get
                val semester = markdoc.map(_.as[String]("semester")).get
                val roll_no = markdoc.map(_.as[String]("roll_no")).get
                val marks = markdoc.map(_.as[List[Marks]]("marks")).get
                for (res <- markdoc) {
                  val marksMongoList = res.getAs[MongoDBList]("marks").get
                  for (i <- 0 to marks.length - 1) {
                    val member = marksMongoList.as[BasicDBObject](i)
                    println(member("subject"))
                    val obj: Marks = Marks(member("subject").toString, member("mark").toString)
                    markList = obj :: markList
                  }
                }

                println(markList)
                //val markListJson = Json.toJson(markList)

                val marksResp: MarksResp = MarksResp(org_name, course_name, academicYear, semester, roll_no, markList)
                val marksRespJson = Json.toJson(marksResp)

                //serilization for json


                /*implicit val anyValWriter = Writes[MarksResp] (marksResp => marksResp match {
                case org_name:String => Json.toJson(org_name)
                case course_name:MarksResp => Json.toJson(course_name)
                case academicYear:MarksResp => Json.toJson(academicYear)
                case semester:MarksResp => Json.toJson(semester)
                case roll_no:MarksResp => Json.toJson(roll_no)
                case _ => throw new RuntimeException("unserializeable type")
              })*/

                val status = "success"
                val orgstatus = "yes"
                val json: JsValue = Json.obj("courses" -> courseList, "dashboard" -> use, "status" -> status, "org" -> orgstatus, "technology" -> listTechJson, "language" -> listLangJson, "charts" -> chartList, "marksRespJson" -> marksRespJson, "dropdown" -> dropdown)
                Ok(json).as("application/json")

              }

            }
            //Ok(Json.toJson(use)).as("application/json")

          }

        }

      }
    )

  }
  def importGetData= Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[Importdata]
    either.fold(
      errors => BadRequest("invalid json person"),
      valid = Importdata => {
        val orgId = Importdata.orgId;
        val query = MongoDBObject("orgId" -> orgId)
        val col = MongoFactory.orgCollection.findOne(query)
        if (col.toString().equalsIgnoreCase("None")) {
          println("organisation not found ")
          Ok("[\t{\n\t\"status\": \"Fail\",\n\t\"error\": \"No organisation Found\"\n}\t]").as("application/json")
        }
        else {
          var sample: List[Item] =  List()
          val orgName = col.map(_.as[String]("orgName")).get
          val academicYear = col.map(_.as[List[String]]("academicYear")).get
          val courses = col.map(_.as[List[Item]]("courses")).get

          // Accessing the array of objects in the DB for getting the individual items , not required, just for example have done this operation

          for (res <- col) {
            var memberInfo = res.getAs[MongoDBList]("courses").get
            for(i <- 0 to courses.length-1) {
             val member = memberInfo.as[BasicDBObject](i)
              // prints the individual name of the inside object
             println(member("courseName"))
             val obj: Item = Item(member("courseName").toString,member("totalClasses").toString,member("totalSemesters").toString,member("academicYear").toString)
            sample = obj :: sample

            }
          }


          // Converting the List[Items] to json inorder to pass the response

          println(sample)
          val courseList = Json.toJson(sample)
          val studentDetails = col.map(_.as[List[String]]("studentDetails")).get
          val dateTimeStamp = col.map(_.as[String]("dateTimeStamp")).get
          val status ="success"

          // creating a json response for the output

          val json: JsValue = Json.obj("courses"->courseList, "orgName" -> orgName , "academicYear" -> academicYear,"studentDetails"->studentDetails,"dateTimeStamp"->dateTimeStamp,"status"->"success"
          )
          Ok(json).as("application/json")
        }
      }
    )
  }


  def importinsert= Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[Order]
    either.fold(
      errors => BadRequest("invalid json"),
      valid = Order => {
      //  val courses = (request.body \ "courses").get

        //println(academicYear(1).get)
        //val items=Order.courses
        val lengthOfCourses = Order.lengthOfCourses
        //val lengthOfAcademicyear = Order.lengthOfAcademicyear
        //println(items)
        /*println(courses)
       // println(courses(1).get)
        //println((courses(1) \ "courseName").as[JsString].value)
        //println((courses(1) \ "totalClasses").as[JsString].value)*/
        // val items1=Order.courses
        val orgid = Order.orgId
        val orgName = Order.orgName
        val dropdown = Order.dropdown
        val query = MongoDBObject("orgId" -> orgid)
        val col = MongoFactory.orgCollection.findOne(query)
        val courses1: List[Item] =  List()
        if (col.toString().equalsIgnoreCase("None")) {
          Ok("[\t{\n\t\"status\": \"fail\",\n\t\"\": \"Invalid Organization id\"\n}\t]").as("application/json")
        }
        else {

          val upval = MongoDBObject(
            "$set" -> MongoDBObject("courses" ->courses1)
          )
          val chk = MongoFactory.orgCollection.update(query,upval)
          val  courses = (request.body \ "courses").get

          for (i <- 0 to lengthOfCourses-1) {




            println((courses(i) \ "courseName").as[JsString].value)
            val coursesbuild = MongoDBObject.newBuilder
            coursesbuild += "courseName" -> (courses(i) \ "courseName").as[JsString].value
            coursesbuild += "totalClasses" -> (courses(i) \ "totalClasses").as[JsString].value
            coursesbuild += "totalSemesters" -> (courses(i) \ "totalSemesters").as[JsString].value
            coursesbuild += "academicYear" -> (courses(i) \ "academicYear").as[JsString].value
            coursesbuild.result


            /* val coursesUpdate = $push("courses" -> coursesbuild.result(),"academicYear" -> academicYear(i).as[JsString].value,"studentDetails" -> studentDetails(i).as[JsString].value)
             MongoFactory.orgCollection.findAndModify(query,coursesUpdate)*/
            val coursesUpdate = $push("courses" -> coursesbuild.result())
            MongoFactory.orgCollection.findAndModify(query,coursesUpdate)

            /*val coursesUpdate1 = $pop("academicYear" -> 1)
            OrgnizationDB.collection.findAndModify(query,coursesUpdate1)*/

          }
          val upval1 = MongoDBObject(
            "$set" -> MongoDBObject("dropdown" -> dropdown)
          )
          val chk1 = MongoFactory.orgCollection.update(query,upval1)
          println("Imported data successfully saved in database!")

          Ok("[\t{\n\t\"status\": \"success\",\n\t\"\": \"Countervalue is updated\"\n}\t]").as("application/json")
        }
      }
    )
  }



  def importStudent= Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[ImportStudent]
    either.fold(
      errors => BadRequest("invalid json person"),

        valid = ImportStudent => {

        val orgid = ImportStudent.orgId
        val orgName = ImportStudent.org_name
        val numberOfStudents = ImportStudent.numberOfStudents
        val dropdown = ImportStudent.dropdown

        val queCounter = MongoDBObject("_id" -> "counter")
        val res = MongoFactory.counterCollection.findOne(queCounter)
        var studentIdcount = res.map(_.as[Int]("studentId")).get
        var marksIdcount = res.map(_.as[Int]("marksId")).get

        var studentId = "student_" + studentIdcount;
        println(studentId)

        var marksId = "marks_" + marksIdcount;
        println(marksId)


        val queryOrg = MongoDBObject("orgId" -> orgid)
        //println(orgid)
        val docOrg = MongoFactory.orgCollection.findOne(queryOrg)
        //println("documents: "+docOrg)

        if(docOrg.toString().equalsIgnoreCase("none"))
        {
          Ok("[\t{\n\t\"status\": \"fail\",\n\t\"massage\": \"Invalid Organization id\"\n}\t]").as("application/json")
        }
          else{

          println("inside else")
          val queryStu = MongoDBObject("studentId" -> studentId)
          val docStu = MongoFactory.studDetailCollection.findOne(queryStu)
          if(docStu.toString().equalsIgnoreCase("none")) {
            for (j <- 0 to numberOfStudents - 1)
            {
              studentIdcount += 1;
              studentId = "student_" + studentIdcount;
              println("first loop")
              val students = (request.body \ "students").get
              val roll_no = (students(j) \ "roll_no").as[JsString].value
              val student_name = (students(j) \ "student_name").as[JsString].value
              val academicYear = (students(j) \ "academicYear").as[JsString].value
              val course_name = (students(j) \ "course_name").as[JsString].value
              //val result_year = (students(j) \ "result_year").as[JsString].value
              val semester = (students(j) \ "semester").as[JsString].value
              val numberOfSubject = (students(j) \ "numberOfSubject")
              println(numberOfSubject.get)
              val marks =(students(j) \ "marks").get

              //inserting student details
              val stuModel = StudentDetails(studentId, roll_no, student_name, orgName, course_name, academicYear)
              insert.insertingStudent(stuModel)


              marksIdcount += 1;
              marksId = "marks_" + marksIdcount;

              val subject = ""
              val mark = ""
              val markss = Marks(subject, mark)

              val marksModel = MarksDetails(marksId, orgName, course_name, academicYear, semester, roll_no, markss)
              insert.insertingMarks(marksModel)

              for (i <- 0 to numberOfStudents - 1) {

                println("second loop")
                val subject = (marks(i) \ "Subject").as[JsString].value
                val mark = (marks(i) \ "Mark").as[JsString].value
                val markss = Marks(subject, mark)



                //println("hello for loop " + marksId)
                val builder = MongoDBObject.newBuilder
                builder += "subject" -> subject
                builder += "mark" -> mark
                builder
                val query = MongoDBObject("_id" -> marksId)
                val coursesUpdate = $push("marks" -> builder.result())
                MongoFactory.marksDetailcollection.findAndModify(query, coursesUpdate)

                /*val coursesUpdate1 = $pop("academicYear" -> 1)
                OrgnizationDB.collection.findAndModify(query,coursesUpdate1)*/
                val upval = MongoDBObject(
                  "$set" -> MongoDBObject("marksId" -> marksIdcount)
                )
                val chk = MongoFactory.counterCollection.update(queCounter,upval)
              } //end of inside loop


            val upval = MongoDBObject(
              "$set" -> MongoDBObject("studentId" ->studentIdcount)
            )
              val chk = MongoFactory.counterCollection.update(queCounter,upval)

            } //end of outer loop
            //println("hello")
            val upval1 = MongoDBObject(
              "$set" -> MongoDBObject("dropdown" -> dropdown)
            )
            val chk1 = MongoFactory.orgCollection.update(queryOrg,upval1)
            println("Imported data successfully saved in database!")
            Ok("[\t{\n\t\"status\": \"success\",\n\t\"massage\": \"Student details save successfully!\"\n}\t]").as("application/json")

          }
          else {
            Ok("[\t{\n\t\"status\": \"fail\",\n\t\"massage\": \"this student is already there in database\"\n}\t]").as("application/json")
          }

        }

      }
    )
  }


  def GetAllMembers = Action(BodyParsers.parse.json) { request =>

    val AllMemberDoc = MongoFactory.memberCollection.find
    //AllMemberDoc.foreach(println)
    var memberListObj: List[MemberObj] = List()

    for(member <- AllMemberDoc)
      {
        val id = member("_id").toString
      val memberId = member("memberId").toString
      println("memberId: " + member("memberId"))
      val firstName = member("firstName").toString
      val lastName = member("lastName").toString
      val emailId = member("emailId").toString
      val password = member("password").toString
      val role = member("role").toString
      val organization = member("organization").toString
      val orgId = member("orgId").toString
      val passwordHistory = member("passwordHistory").toString
      val defaultPasswordFlag = member("defaultPasswordFlag").toString
      val blockFlag = member("blockFlag").toString
      val readonlyFlag = member("readonlyFlag").toString
      val dateTimeStamp = member("dateTimeStamp").toString
      val charts = member("charts").toString

      val memberObj = MemberObj(id,memberId,firstName,lastName,emailId,password,role,organization,orgId,passwordHistory,defaultPasswordFlag,blockFlag,readonlyFlag,dateTimeStamp,charts)
      println(memberObj)
      memberListObj = memberObj :: memberListObj
    }
    println(memberListObj)
    var memberListObjJson = Json.toJson(memberListObj)
    val json: JsValue = Json.obj("status"-> "Success", "members" -> memberListObjJson)
    Ok(json).as("application/json")
      }

  def editFlag= Action(BodyParsers.parse.json) { request =>
    val either = request.body.validate[EditFlag]
    either.fold(
      errors => BadRequest("invalid json person"),

      valid = EditFlag => {
        val flag = EditFlag.actionType
        val emailId = EditFlag.emailId
        println(emailId)
        val queryFlag = MongoDBObject("emailId" -> emailId)
        val docFlag = MongoFactory.memberCollection.findOne(queryFlag)
        println(docFlag)
        val blockFlag = docFlag.map(_.as[Int]("blockFlag")).get
        val defaultPasswordFlag = docFlag.map(_.as[Int]("defaultPasswordFlag")).get
        val readonlyFlag = docFlag.map(_.as[Int]("readonlyFlag")).get
        println("defaultPasswordFlag: " + defaultPasswordFlag + " blockFlag: " + blockFlag + " readonlyFlag: " + readonlyFlag)

        if(docFlag.toString().equalsIgnoreCase("none")){

          Ok("").as("application/json")
        }
        else {
          if (flag.equalsIgnoreCase("block")) {
            if (blockFlag == 0) {
              val upval = MongoDBObject(
                "$set" -> MongoDBObject("blockFlag" -> 1)
              )
              val chk = MongoFactory.memberCollection.update(queryFlag, upval)
              val json: JsValue = Json.obj("status" -> "Success", "Message" -> "User has been blocked!")
              Ok(json).as("application/json")
            }
            else {
              val json: JsValue = Json.obj("status" -> "Fail", "Message" -> "User already block!")
              Ok(json).as("application/json")
            }
          } else {
            if (blockFlag == 1) {
              val upval = MongoDBObject(
                "$set" -> MongoDBObject("blockFlag" -> 0)
              )
              val chk = MongoFactory.memberCollection.update(queryFlag, upval)
              val json: JsValue = Json.obj("status" -> "Success", "Message" -> "User has been Unblocked!")
              Ok(json).as("application/json")

            }
            else {
              val json: JsValue = Json.obj("status" -> "Fail", "Message" -> "User already Unblock!")
              Ok(json).as("application/json")
            }

          }

        }
      }
    )
  }

}



