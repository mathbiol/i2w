var hello = ()=>{
    return 'hello world at '+Date()
}

if(typeof(define)!=='undefined'){
    define({
        hello: hello
    });
}
