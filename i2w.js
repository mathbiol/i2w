console.log('i2w.js loaded :-)')

i2w=function(){
    return 'hello at '+Date()
}
i2w.ole=function(){   
    return 'ole att '+Date()
}

console.log(i2w())
console.log(i2w.ole())

if(!typeof(define)){
    define({
        hello:i2w.hello,
        hello:i2w.ole
    }) 
}

if(!typeof(exports)){
    exports.hello=i2w.hello
    exports.hello=i2w.ole
}
    

/*
http = require('http')
http.createServer(function(req,res){
    let lala='lala'
    res.write(i2w.ole())
    res.end('Hello World att '+Date());
    console.log('called at '+Date())
}).listen(8001)
*/