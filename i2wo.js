console.log('loaded i2wo.js ... maybe from observable')

if(typeof(define)!=='undefined')){
    define(function(){
        return{
            hello:function(){
                var h = 'hello at '+Date()
                console.log(h)
                return h
            }
        }
    })
}