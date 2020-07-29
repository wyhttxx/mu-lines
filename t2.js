b=0
function a(b){
    return new Promise((resolve,reject)=>{
        if(b){
            resolve(b)
        }else{
            reject(b)
        }
    })
}
a(b).then(result=>console.log('then:',result)).catch(result=>console.log('catch:',result))
let demo=async ()=>{
    let result=await a(b)
    return result
}
demo().then(result=>console.log(result)).catch(result=>console.log(result))