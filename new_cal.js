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
             i++
            }
            // console.log(arr+";;;;g"+g+"|||||h"+h+"--d---"+d)
            if(rrr=="*"){
                arr.push(String(g))
            }
           else{
               arr.push(String(h))
            }
            
        }
        arr.push(document.getElementById(id).value)
        displayVal=""
         // console.log(arr)
    }
    else{
        c=arr.push(document.getElementById("output").value)
        alert(arr)
        displayVal=""
        refactor();
        tot(arr)
        
    }
}
function refactor(){
    var rrr=arr[arr.length-2]
    alert(rrr)
    if(rrr=="*"||rrr=="/"){
        let g=Number(arr[arr.length-1])*Number(arr[arr.length-3])
        let h=Number(arr[arr.length-1])/Number(arr[arr.length-3])
        let i=0
        while(i<=2){
            arr.pop()
            i++
        }
        if(rrr=="*"){
            arr.push(g)
        }
        else{
            arr.push(h)
        }
        alert(arr)
    }
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
