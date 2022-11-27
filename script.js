const clearEl = document.querySelector(".AC");
const ClearLastEl= document.querySelector(".CE");
const display1El=document.querySelector(".display-1")
const display2El=document.querySelector(".display-2")
const tempResultEl=document.querySelector(".temp-result")
const numbersEl=document.querySelectorAll(".number");
const operationEl=document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");


let dis1num="";
let dis2Num="";
let result="null";
let lastInput="";
let haveDot=false;

//we first check if user have dot in innerHtml,on btn pressed if not then we set
//haveDot to true and add dot or other number.
numbersEl.forEach(number=>{
  number.addEventListener("click",(e)=>{
    if(e.target.innerText==="." && !haveDot){
       haveDot=true
    }else if (e.target.innerText==="."&& haveDot){
      return;//return nothing if there is a dot
    }
    dis2Num+=e.target.innerText;
    display2El.innerText=dis2Num
  })
});

function operator(){

  switch (lastInput) {
    case "X":
       return result=parseFloat(result)* parseFloat(dis2Num);
    case "+":
        return result=parseFloat(result)+ parseFloat(dis2Num);
    case "-":
          return result=parseFloat(result)- parseFloat(dis2Num);  
     case "/":
            return result=parseFloat(result)/ parseFloat(dis2Num);   
     case "%":
              return result=parseFloat(result)% parseFloat(dis2Num);  
    default:
      return lastInput ;
    
  }

}

