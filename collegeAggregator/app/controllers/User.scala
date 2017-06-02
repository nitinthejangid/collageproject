package controllers

import scala.collection.mutable.ListBuffer

/**
  * Created by manjumohan on 11/4/17.
  */


case class User1 (emailId: String, password: String)
case class Sessionclass (sessionid: String)
case class Fetchclass (firstName: String,lastName: String,role:String,organization: String,defaultPasswordFlag: Int,orgId:String,status: String)
case class Fetchuserclass (sessionid: String)
//case class yaxispayload(org_name: String,course_name: String, academicYear: String, semester: String,subject:String,yaxis:String)
case class yaxispayload(org_name: String,widgetName: String, xaxis: String, course_name: List[String], academicYear: List[String],semester: List[String],subject:List[String],yaxis:String, chartType: String)
case class User3 (passwordHistory: List[String])
case class sub (value:String)
case class resulttest(a:String,b:Double)
case class User2 (sessionId: String, actionType: String,oldpassword:String, newpassword:String)
case class sessionauth (sessionid: String, emailId:String, sessionToken: String,dateTimeStamp:String, memberId: String)

case class Userregister (firstName: String,lastName: String,emailId:String,password:String,role:String,organization: String)

case class Item(name: String,totalClasses :String,totalSemesters:String,academicYear:String)
case class Order(orgId:String,orgName: String,dropdown:String, lengthOfCourses:Int)
case class Items(name: String,totalClasses :String,totalSemesters:String,academicYear:String,technology: String, language: String)
case class Widgetdata(orgId:String,org_name: String,course_name: Array[String],academicYear:Array[String], semester:Array[String], subject:Array[String], xaxis:String,yaxis:String,chartType:String,WidgetName:String)
case class chartData(org_name: String,course_name: List[String],academicYear:List[String], semester:List[String], subject:List[String], xaxis:String,yaxis:String,chartType:String,WidgetName:String)
case class deleteData(orgId:String,WidgetName:String,chartType:String)
case class courses (courseName: String,totalClasses : Integer ,totalSemesters:Integer,academicYear:String)
case class courses1 (courseName: String,totalClasses : Integer ,totalSemesters:Integer,academicYear:String)
case class UserOrg (orgId: String, orgName: String, academicYear: List[String], courses:List[Item], studentDetails: List[String], dateTimeStamp: String, dropdown: String)

case class Userregister1(_id: String, memberId: String, firstName: String,lastName: String,emailId:String,password:String,role:String,organization: String,orgId: String, passwordHistory: ListBuffer[String],defaultPasswordFlag:Int, blockFlag:Int, readonlyFlag: Int, dateTimeStamp: String,charts:List[chartData])

case class TransResponse(status: String, sessionid: String)

case class Importdata (orgId: String)

case class Marks(subject: String, mark: String)

case class ImportStudent(orgId:String, org_name:String, numberOfStudents: Int, dropdown: String)

case class StudentDetails(_id: String,roll_no: String,student_name: String,org_name: String, course_name: String, acc_year: String)
case class MarksDetails(_id: String,org_name: String, course_name:String, academicYear: String, semester: String, roll_no: String, marks:Marks)
case class MarksResp(org_name: String,course_name: String, academicYear: String, semester: String, roll_no: String, marks: List[Marks])

case class TechObj(technology: String, weightage: String)
case class MemberObj(id: String,memberId: String,firstName: String,lastName: String,emailId: String, password:String, role: String, organization:String, orgId:String, passwordHistory: String, defaultPasswordFlag:String, blockFlag:String, readonlyFlag:String, dateTimeStamp:String, charts:String)
case class EditFlag(emailId: String,actionType: String)