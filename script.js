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

