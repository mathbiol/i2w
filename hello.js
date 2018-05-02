var hello = ()=>{
    return 'hello world at '+Date() +  Date().getTimezoneOffset(); //added timezone
}

if(typeof(define)!=='undefined'){
    define({
        hello: hello
    });
}
