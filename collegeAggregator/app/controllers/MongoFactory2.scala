package controllers
import com.mongodb.casbah.MongoConnection
object MongoFactory2 {
  private val SERVER = "192.168.1.241"
  private val PORT   = 27017
  private val DATABASE = "collegeAggregator"
  private val COLLECTION = "session"
  private val COLLECTION1= "organizations"
  val connection = MongoConnection(SERVER)
  val collection = connection(DATABASE)(COLLECTION)
  val collection1 = connection(DATABASE)(COLLECTION1)


}