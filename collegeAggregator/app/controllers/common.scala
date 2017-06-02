package controllers

/**
  * Created by manjumohan on 11/4/17.
  */
import com.mongodb.casbah.Imports._
object common {

  def buildMongoDbObject(user1: User1): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "emailId" -> user1.emailId
    builder += "password" -> user1.password

    builder.result
  }

  def buildMongoDbObject4(sessionauth: sessionauth): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "sessionId" -> sessionauth.sessionid
    builder += "emailId" -> sessionauth.emailId
    builder += "sessionToken" -> sessionauth.sessionToken
    builder += "date" -> sessionauth.dateTimeStamp
    builder += "memberId" -> sessionauth.memberId

    builder.result
  }


  def buildMongoDbObject3(userregister: Userregister1): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "_id" -> userregister._id
    builder += "memberId" -> userregister.memberId
    builder += "firstName" -> userregister.firstName
    builder += "lastName" -> userregister.lastName
    builder += "emailId" -> userregister.emailId
    builder += "password" -> userregister.password
    builder += "role" -> userregister.role
    builder += "organization" -> userregister.organization
    builder += "orgId" -> userregister.orgId
    builder += "passwordHistory" -> userregister.passwordHistory
    builder += "defaultPasswordFlag" -> userregister.defaultPasswordFlag
    builder += "blockFlag" -> userregister.blockFlag
    builder += "readonlyFlag" -> userregister.readonlyFlag
    builder += "dateTimeStamp" -> userregister.dateTimeStamp
    builder += "charts" -> userregister.charts
    builder.result
  }

  def buildMongoDbObject5(courses1: courses1): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "courseName" -> courses1.courseName
    builder += "totalClasses" -> courses1.totalClasses
    builder += "totalSemesters" -> courses1.totalSemesters
    builder += "academicYear" -> courses1.academicYear
    builder.result


  }

  def buildMongoDbObject6(courses2: UserOrg): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "orgId" -> courses2.orgId
    builder += "orgName" -> courses2.orgName
    builder += "academicYear" -> courses2.academicYear
    builder += "courses" -> courses2.courses
    builder += "studentDetails" -> courses2.studentDetails
    builder += "dateTimeStamp" -> courses2.dateTimeStamp
    builder += "dropdown" -> courses2.dropdown
    builder.result

  }

  def buildMongoDbObject7(courses3: StudentDetails): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "_id" -> courses3._id
    builder += "roll_no" -> courses3.roll_no
    builder += "student_name" -> courses3.student_name
    builder += "org_name" -> courses3.org_name
    builder += "course_name" -> courses3.course_name
    builder += "acc_year" -> courses3.acc_year
    builder.result

  }

  def buildMongoDbObject8(courses4: MarksDetails): MongoDBObject = {
    val builder = MongoDBObject.newBuilder
    builder += "_id" -> courses4._id
    builder += "org_name" -> courses4.org_name
    builder += "course_name" -> courses4.course_name
    builder += "academicYear" -> courses4.academicYear
    builder += "semester" -> courses4.semester
    builder += "roll_no" -> courses4.roll_no
    builder += "marks" -> MongoDBList()
    builder.result

  }


}