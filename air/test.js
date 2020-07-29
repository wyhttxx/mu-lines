const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://root:root@localhost:27017/?authSource=admin';

// Database Name
const dbName = 'in';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection=db.collection("CAN")
    collection.find({"linezhs": "青岛-广州"},{projection:{flightNoDisp:true,"lineEng":1,"planDeptTime":1,"_id":0}}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
    })
    // a=await collection.find({"linezhs": "青岛-广州"}).count()
    // collection.find({"linezhs": "青岛-广州"},{flightNoDisp:1,lineEng:1,planDeptTime:1,_id:0}).toArray((res,res1)=>{
    //     console.log(res1)
        
    // })
  client.close();
});
