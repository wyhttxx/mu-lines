const mysql=require('mysql')
const Koa=require('koa')
const Router=require('koa-router')
const router=new Router()
const app=new Koa()
MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'fatpig'
}
const conn=mysql.createConnection(MYSQL_CONF)
conn.connect(err=>{
    if(err) throw err
    console.log('数据库连接成功')
})
function n(){
    return new Promise((resolve,reject)=>{
        conn.query('SELECT * FROM m_user',(error,result)=>{
            if(error){
                reject(error)
            }
            resolve(result)
    })
})}
/*(async ()=>{
    let a=await n()
    console.log(a)
})()*/
// nt行为，console.log已经提醒几次了是一个function 不加()
// .then() is not a function
/*let a
(async ()=>{
    a=await n().then(result=>console.log(result,'2'))
    console.log(a,'1')
})()*/
// 要不就.then处理掉要不就await 
// await error静默处理，try catch

/*(async ()=>{
    console.log(await n().then(result=>console.log(result,'2')),'1')
})()*/

/*router.get('/',async(ctx,next)=>{
    ctx.status=200
    ctx.body=await n()
})*/

/*router.get('/',async(ctx,next)=>{
    // ctx.status=200
    n().then(result=>{
        ctx.body=result
    })
})
not found*/
/*
router.get('/',async(ctx,next)=>{
    ctx.status=200
    await n().then(result=>{
        ctx.body=result
    })
})
*/

(async ()=>{
    let a
   console.log(await n().then(result=>a=result))
    console.log(a,'1')
})()

router.get('/',async(ctx,next)=>{
    // ctx.status=200
    let a
    console.log(n().then(result=>{
        console.log(result)
    }))
    
})
// .then里的是能拿到的，返回的是pending

app.use(router.routes())
app.listen(3000)