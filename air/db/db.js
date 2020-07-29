const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:root@localhost:27017/?authSource=admin';
const mongoclient = new MongoClient(url,{ useUnifiedTopology: true });

const dbName = 'in';
// Use connect method to connect to the Server
function demo(){
    return new MongoClient(url,{ useUnifiedTopology: true }).connect()
}
// demo().then(client=>{
//     const db = client.db(dbName);
// const collection=db.collection("CAN")
// collection.find({"linezhs": "青岛-广州"},{projection:{flightNoDisp:true,"lineEng":1,"planDeptTime":1,"_id":0}}).toArray(function(err, docs) {
//     console.log("Found the following records");
//     console.log(docs)
//     client.close();
// })
// })
//     (err,client)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`Connected successfully to server`);

//     }
// })
  


// a=await collection.find({"linezhs": "青岛-广州"}).count()
// collection.find({"linezhs": "青岛-广州"},{flightNoDisp:1,lineEng:1,planDeptTime:1,_id:0}).toArray((res,res1)=>{
//     console.log(res1)
    
// })


module.exports={demo}