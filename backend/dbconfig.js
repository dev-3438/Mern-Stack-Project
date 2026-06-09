import {MongoClient} from 'mongodb'
const url = "mongodb+srv://bdev53143_db_user:4b5d52oheMW7LPGR@cluster0.awbnxhn.mongodb.net/?appName=Cluster0"
export const collectionName = "todo"
const dbName = "node-project"
const client = new MongoClient(url)








export const connection = async ()=>{
   const connect = await client.connect();
   return connect.db(dbName)
}