const Koa=require('koa')
const Router=require('koa-router')
const bodyParser=require('koa-bodyparser')
const mysql=require('mysql')
const router=new Router()
const app=new Koa()
MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'blog'
}
const conn=mysql.createConnection(MYSQL_CONF)
conn.connect(err=>{
    if(err) throw err
    console.log('数据库连接成功')
})
function exec(sql){
    return new Promise((resolve,reject)=>{
        conn.query(sql,(err,result)=>{ //两个参数
            if (err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
}
const escape=mysql.escape
const addUser=async (id,username,password,job)=>{ //sql字符串加单引号
    let sql=` 
    insert into tb_users (id,username,password,job)
    values (${id}, '${username}', '${password}', '${job}');
    `
    // console.log(sql)
    let result=await exec(sql)
    // console.log(result)
    return result
}
app.use(bodyParser())

// app.use(async ctx=>{
//     let author=ctx.request.query.author
//     console.log(author)
//     ctx.body='author'
// })
router.post('/adduser',async(ctx,next)=>{
    let {id,username,password,job}=ctx.request.body
    console.log(ctx.request.body)
    ctx.body=await addUser(id,username,password,job)
})
app.use(router.routes()) //very important 还要放最下面
app.listen(3000)