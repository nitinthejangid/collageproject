package controllers

/**
  * Created by manjumohan on 12/4/17.
  */
import com.mongodb.casbah.Imports._
import common._
object insert  {

  def insertingToken(user2: Userregister1) {
    val mongoObj = buildMongoDbObject3(user2)
    MongoFactory.memberCollection.save(mongoObj)
  }
  def insertingSessiondoc(user3: sessionauth) {
    val mongoObj = buildMongoDbObject4(user3)
    MongoFactory.sessionCollection.save(mongoObj)
  }

  def insertingSession(user2: courses1) {
    val mongoObj = buildMongoDbObject5(user2)
    MongoFactory.memberCollection.save(mongoObj)
  }

  def insertingOrgnization(user4: UserOrg) {
    val mongoObj = buildMongoDbObject6(user4)
    MongoFactory.orgCollection.save(mongoObj)
  }

  def insertingStudent(user5: StudentDetails) {
    val mongoObj = buildMongoDbObject7(user5)
    println("hello:   " + mongoObj)
    MongoFactory.studDetailCollection.insert(mongoObj)

  }

  def insertingMarks(user6: MarksDetails) {
    val mongoObj = buildMongoDbObject8(user6)
    //println("hello:   " + mongoObj)
    MongoFactory.marksDetailcollection.save(mongoObj)

  }
}

