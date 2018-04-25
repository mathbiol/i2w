console.log('i2w.js loaded :-)')

i2w=function(){
    return 'hello at '+Date()
}
i2w.ole=function(){
    return 'ole at '+Date()
}

console.log(i2w())

/*
if(exports){
    exports.hello=i2w
}

export {
    i2w
}
*/