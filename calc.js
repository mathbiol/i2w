console.log('calc.js loaded')

// note how only "vanila JS" is used (no frameworks) to assemble a self-contained calculator in a div element

calcJS = (div)=>{
    div=div||document.createElement('div')
    // UI
    var h ='<h3>Calculator in <a href="https://github.com/mathbiol/i2w/blob/master/calc.js" target="_blank" style="color:blue;background-color:yellow">plain JS</a>.</h3>'
    h += '<p><textarea id="expression" style="color:maroon;background-color:WhiteSmoke;width:100%;border-width=0px;font-size:large"></textarea> <br><button id="doit" style="font-size:large">=</button> <span id="result" style="color:green;font-size:large"></span></p>'
    h += '<table>'
    h += '<tr><td>1</td><td>2</td><td>3</td><td>+</td></tr>'
    h += '<tr><td>4</td><td>5</td><td>6</td><td>-</td></tr>'
    h += '<tr><td>7</td><td>8</td><td>9</td><td>*</td></tr>'
    h += '<tr><td>(</td><td>0</td><td>)</td><td>/</td></tr>'
    h += '<tr><td>&pi;</td><td>.</td><td>log</td><td>^</td></tr>'   
    h += '</table>'
    h += '<p><button id="CLR"> CLR </button> <button id="Mem"> Mem </button> <button id="Bck"> Bck </button></p>'
    h += '<p id="mem1" style="color:blue"></p>'
    div.innerHTML=h
    
    // event listeners
    var expression = div.querySelector('#expression')
    expression.style.borderWidth='0px'
    var result = div.querySelector('#result')
    var mem1 = div.querySelector('#mem1')
    div.querySelectorAll('td').forEach((el)=>{
        el.width='20px'
        el.onclick=()=>{
            var str=el.textContent
            switch(str) {
                case 'π':
                    str='Math.PI'
                    break;
                case 'log':
                    str='Math.log10('
                    break;
                case '^':
                    str='**'
                    break;
            }
            expression.value += str
        }
        if(el.textContent.match(/^[\d\.]+$/)){
            el.style.color='blue'
            el.style.backgroundColor='yellow'
            el.style.border='solid'
            el.style.textAlign='center'
        }else{
            el.style.color='maroon'
            el.style.textAlign='center'
            el.style.backgroundColor='orange'
        }
        el.onmouseover=()=>{
            el.style.cursor='hand'
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
    div.querySelector('#Bck').onclick=()=>{
        expression.value=expression.value.slice(0,-1)
    }
    mem1.onclick=()=>{
        expression.value+=mem1.textContent
    }
    mem1.onmouseover=()=>{
        mem1.style.cursor="hand"
    }
    return div
}

// AMD module 
if(typeof(define)!='undefined'){ // if being called as a module
    define({
        calculator:(div)=>{
            setTimeout(()=>{
                calcJS(div)
            },1000)
        },
        created:Date(),
        url:'https://beta.observablehq.com/@jonasalmeida/i2w',
        description:'showing how a div element encoded with a little math can be imported in Observable'
        
    })
}else{ 
    setTimeout(()=>{
        document.body.appendChild(calcJS()) // <-- try this line in the console multiple times for independent calculators:
    },100)
}