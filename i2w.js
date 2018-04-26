console.log('i2w.js loaded :-)')

exports.hello = function(){
    return 'Hello at '+Date()
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