const koa=require('koa')
const app=new koa()
const Router=require('koa-router')
const from =new Router()
const to=new Router()
const{find,findAllByjc,findByLine}=require('../controller/data')
// 跟据航线查询 详情
to.get('/line',async(ctx,next)=>{
    let query=ctx.query
    let {from,to}=query
    result=await findByLine(from.toUpperCase(),to.toUpperCase())
    ctx.body={
        result,
    }
})
// 进出港 根据机场
to.get('/:inout/:jc',async(ctx,next)=>{
    result=await findAllByjc(ctx.request.path.split('/')[1],ctx.request.path.split('/')[2].toUpperCase())
    ctx.body={
        result,
        // inout:ctx.request.path.split('/')[1],
        // jc:ctx.request.path.split('/')[2]
    }
})



// to.get('/:tap',(ctx,next)=>{
//     ctx.body=ctx.params
// })
// from.get('/',(ctx)=>{
//     ctx.body={
//         query:ctx.query,
//         qs:ctx.querystring,
//         route:ctx.request.path
//     }
// })
// from.use('/from/:fap/to',to.routes(),to.allowedMethods())
app.use(to.routes())
app.listen(3000)