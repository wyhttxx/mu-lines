const{demo}=require('../db/db')
// function find(){
//     return new Promise((resolve,reject)=>{
//         demo().then((client)=>{
//             const db = client.db('in');
//             const collection=db.collection("CAN")
//             collection.find({"linezhs": "青岛-广州"},{projection:{flightNoDisp:true,"lineEng":1,"planDeptTime":1,"_id":0}}).toArray(function(err, docs) {
//                 // client.close();
//                 resolve(docs)
//             })
//         })
//     })
// }
const find=async (linezhs)=>{
    const client=await demo()
    const db = client.db('in');
    const collection=db.collection("CAN")
    let {deptAirportDisp}=linezhs
    console.log(linezhs,deptAirportDisp)
    const result=await collection.find({"deptAirportDisp": deptAirportDisp},{projection:{flightNoDisp:true,"lineEng":1,"planDeptTime":1,"_id":0}}).toArray()
    await client.close()
    return result
}
// 查询进出港的全航线
async function findAllByjc(inout,jc){
    const client=await demo()
    const db = client.db(inout);
    const collection=db.collection(jc)

    console.log(typeof(jc))
    const result=await collection.find({},{projection:{

        "_id":0,
        "carrier":1,
        "flightNo":1,
        "deptAirport":'1',
        "arrAirport":'1',
        "lineEng":1,
        "planDeptTime":1,
        "planArrTime":1,
        "acType":1,
        "arrAirportDisp":1,
        "deptAirportDisp":1,
        "linezhs":1

        
    }}).toArray()
    await client.close()
    return result
}
// 查询2地航线
async function findByLine(dept,arr){
    const client=await demo()
    const db = client.db('out');
    const collection=db.collection(dept)

    const result=await collection.find({"arrAirport": arr},{
        projection:{
            "_id":0,
            "carrier":1,
            "flightNo":1,
            "deptAirport":'1',
            "arrAirport":'1',
            "lineEng":1,
            "planDeptTime":1,
            "planArrTime":1,
            "acType":1,
            "arrAirportDisp":1,
            "deptAirportDisp":1,
            "linezhs":1
        }}).toArray()
    await client.close()
    return result
}
// 查询航线详情


// function find(){
//     demo().then((client)=>{
//         return client.db('in').collection('CAN').find({"linezhs": "青岛-广州"},{projection:{flightNoDisp:true,"lineEng":1,"planDeptTime":1,"_id":0}})
//     }).then((docs)=>{
//         console.log(docs)
//         return client.close()
//     }).then((result)=>console.log(result))
// }
// find()
// demo().then(client=>{
//     const db = client.db(dbName);
// const collection=db.collection("CAN")
// collection.find({"linezhs": "青岛-广州"},{projection:{flightNoDisp:true,"lineEng":1,"planDeptTime":1,"_id":0}}).toArray(function(err, docs) {
//     console.log(docs)
//     client.close();
// })
// })
module.exports={
    find,
    findAllByjc,
    findByLine
}