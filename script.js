var curr=document.getElementById("curr");
var next=document.getElementById("next");



function start(){
   
  var n = parseInt(document.getElementById("input").value);
  console.log(n);
  if(isNaN(n)){
    alert("please enter a number");
   
  }else
    if(n>=1 && n<=9){
        var i=0;
        curr.innerText=i;
        var count=setInterval(function(){
                if(n==0){
                    clearInterval(count);
                    alert("counter stopped");
                }else{
                   
                    next.innerText=i+1;
                    next.classList.add("animate");
                    
                    setTimeout(function(){
                        curr.innerText=i;
                        next.classList.remove("animate");
                        console.log(n);
                        

                    },500)
                } 
                i++;   
                n--;

        },1000)
    }
  else{
    alert("number shoulb be between 0 to 9");
  }


  
}

