package controllers

/**
  * Created by manjumohan on 11/4/17.
  */
import com.mongodb.casbah.MongoConnection

object MongoFactory {
  private val SERVER = "192.168.1.241"
  private val PORT   = 27017
  private val DATABASE = "collegeAggregator"
  private val MEMBERCOLLECTION = "members"
  private val COUNTERCOLLECTION = "counter"
  private val SESSIONCOLLECTION = "session"
  private val ORGCOLLECTION = "organizations"
  private val StudDetailCOLLECTION = "studentDetails"
  private val MarksDetailCOLLECTION = "marksDetails"
  private val LanguagesCOLLECTION = "Languages"
  private val TechnologiesCOLLECTION = "Technologies"

  val connection = MongoConnection(SERVER)
  val memberCollection = connection(DATABASE)(MEMBERCOLLECTION)
  val counterCollection = connection(DATABASE)(COUNTERCOLLECTION)
  val sessionCollection = connection(DATABASE)(SESSIONCOLLECTION)
  val orgCollection = connection(DATABASE)(ORGCOLLECTION)
  val studDetailCollection = connection(DATABASE)(StudDetailCOLLECTION)
  val marksDetailcollection = connection(DATABASE)(MarksDetailCOLLECTION)
  val languagescollection = connection(DATABASE)(LanguagesCOLLECTION)
  val technologiescollection = connection(DATABASE)(TechnologiesCOLLECTION)

}