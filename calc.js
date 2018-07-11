console.log('calc.js loaded')

// create ca calculator

// 1 - Vanila JS

calcJS = (div)=>{
    div=div||document.createElement('div')
    // UI
    var h ='<h3>Calculator in plain JS</h3>'
    h += '<p><textarea id="expression" style="color:maroon;width:100%;border-width=0px"></textarea> <br><button id="doit">=</button> <span id="result" style="color:green"></span></p>'
    h += '<table>'
    h += '<tr><td>1</td><td>2</td><td>3</td><td>+</td></tr>'
    h += '<tr><td>4</td><td>5</td><td>6</td><td>-</td></tr>'
    h += '<tr><td>7</td><td>8</td><td>9</td><td>*</td></tr>'
    h += '<tr><td>(</td><td>0</td><td>)</td><td>/</td></tr>'    
    //h += '<tr><td id="mem1"></td><td></td><td></td><td></td></tr>'
    h += '</table>'
    h += '<p><button id="CLR"> CLR </button> <button id="mem"> Mem </button></p>'
    h += '<p id="mem1" style="color:blue"></p>'
    div.innerHTML=h
    document.body.appendChild(div)
    // event listeners
    var expression = div.querySelector('#expression')
    expression.style.borderWidth='0px'
    var result = div.querySelector('#result')
    var mem1 = div.querySelector('#mem1')
    div.querySelectorAll('td').forEach((el)=>{
        el.width='20px'
        el.onclick=()=>{
            expression.value += el.textContent
        }
        if(el.textContent.match(/^\d+$/)){
            el.style.color='blue'
        }else{
            el.style.color='maroon'
        }
        el.onmouseover=()=>{
            el.style.cursor='hand'
            //debugger
        }
        
    })
    
    div.querySelector('#doit').onclick=()=>{
        result.textContent=eval(expression.value)
    }
    div.querySelector('#CLR').onclick=()=>{
        expression.value=''
    }
    div.querySelector('#Mem').onclick=()=>{
        mem1.textContent=result.textContent
    }
    mem1.onclick=()=>{
        expression.value+=mem1.textContent
    }
    mem1.onmouseover=()=>{
        mem1.style.cursor="hand"
    }


    return div
}
setTimeout(calcJS,100)
// 2 - Using Vue


/*
A = function(){
    this.created=Date()
    this.hello=(x)=>{
        x=x||'person '
        return 'hello '+x
    }
}

A.ola = (x)=>{
    x=x||'person '
        return 'ola '+x
}
*/