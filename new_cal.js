var pre=-1,post=-1,op1="",op2="",displayVal="",total=0,arr=[];
var c=["*","/"];

function getNumberClicked(id){
   displayVal+=document.getElementById(id).value;
   document.getElementById('output').value=displayVal 
   
}
function getOpertorClicked(id){    
    var c,d,e,f=[]
   if(document.getElementById(id).value!="="){ 
        c=arr.push(displayVal);
        i=0
        var rrr=arr[c-2]
        if(rrr=="*"||rrr=="/") {
            console.log(Number(c-2)+"fwd:"+arr[c-3]*arr[c-1])  
            let g=arr[c-3]*arr[c-1]
            let h=arr[c-3]/arr[c-1]          
            // d=arr[-1]
            console.log(arr)
            d=arr.pop()
            while(i<2)
            {f.push(arr.pop())                
            // console.log(arr)
             i++
            }
            // console.log("f:")
            // console.log(arr)
            console.log(arr+";;;;g"+g+"|||||h"+h+"--d---"+d)
            // console.log(Number(arr[c-1]) + ":"+ Number(arr[c-3]))
            if(rrr=="*"){
                arr.push(String(g))
            }
           else{
               arr.push(String(h))
            }
            
            // arr.push("+")
            // arr.push(d)
        }
        arr.push(document.getElementById(id).value)
        // console.log(c)
        displayVal=""
         // console.log(arr)
    }
    else{
        c=arr.push(document.getElementById("output").value)
        alert(arr)
        displayVal=""
        tot(arr)
        // calc(Number(arr[0]),Number(arr[2]),arr[1])
        // total12()//yo milaudai xu
        
        // console.log(arr)
    }
    // if(arr[c-2])
    // console.log(arr)
    
}
function tot(vc){
var i=0,calc
var sub1=[];
sub1=vc
console.log(sub1[1])
    // for(i=0;i<sub1.length;i++)
    {
        // if(sub1.length>2)
        if(sub1[1]=="+"||sub1[1]=="-")
        {        
            calc=0;
            // if(!(sub1[1]>="0"&&sub1[1]<="9"))
            {
                switch(sub1[1]){
                    case '+':calc=Number(sub1[0])+Number(sub1[2]);
                    alert(calc)
                             break;
                    case '-':
                                calc=Number(sub1[0])-Number(sub1[2]);
                                alert(calc)
                                break;
                }
                sub1=sub1.slice(3)
                sub1.unshift(String(calc))
                // alert(calc+"::"+sub1)
                tot(sub1)
            }
        }
        else{
            alert("result is"+sub1)
        }
    }
}
function total12(){
    for(let i=0;i<arr.length;i++){
        // for(let j=0;j<2;j++)
        {
            // console.log(arr[i]==arr[j])
            // if(arr[i]==arr[j]){
                if(arr[i]=="*"||arr[i]=="/"){
                    console.log(arr.slice(i,3))
                    precedence(arr.slice(i,3),i);
                // j++
            }
        }
    }
}
function precedence(p,r){
    let calc1;
    // console.log(p)
    // console.log(arr[r])
    if(arr[r]=="*"){        
         calc1=Number(p[0])*Number(p[2])       
    }
    if(arr[r]=="/"){
        calc1=Number(p[0])/Number(p[2])
    }
   alert(calc1)
}
function calc(p,q,op){
        switch(op){
            case '+':total=Number(p)+Number(q)
                    console.log(p+op+q+"Total:"+total)
                    break;
            case'-':total=Number(p)-Number(q)
                    console.log(p+op+q+"Total:"+total)
                    break;
            case '*':total=Number(p)*Number(q)
                    console.log(p+op+q+"Total:"+total)
                        break;
        }
        pre=total
        // return total
        //alert(total)
    }
