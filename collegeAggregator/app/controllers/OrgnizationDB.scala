package controllers

/**
  * Created by manjumohan on 14/4/17.
  */
import com.mongodb.casbah.MongoConnection

object OrgnizationDB {
  private val SERVER = "192.168.1.241"
  private val PORT   = 27017
  private val DATABASE = "collegeAggregator"
  private val COLLECTION = "organizations"
  val connection = MongoConnection(SERVER)
  val collection = connection(DATABASE)(COLLECTION)
}