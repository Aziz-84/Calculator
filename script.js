const clearEl = document.querySelector(".C");
const ClearLastEl= document.querySelector(".CE");
const display1El=document.querySelector(".display-1")
const display2El=document.querySelector(".display-2")
const tempResultEl=document.querySelector(".temp-result")
const numbersEl=document.querySelectorAll(".number");
const operationEl=document.querySelectorAll(".operation");
const equalEL = document.querySelector(".equal");


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
operationEl.forEach(operation=>{
  operation.addEventListener("click",(e)=>{
   if(!dis2Num)return;
   haveDot=false;
   const operationName=e.target.innerText;
   if(dis1num&&dis2Num&&lastOperation){
    operator()
   }else{
     result=parseFloat(dis2Num)
   }
   clearVar(operationName)
   lastOperation=operationName;
  })
 })
//clear function
function clearVar(name=""){
  dis1num+=dis2Num+ " " + name +" ";  //we are putting result 
  //from dis2Num to dis1num varible
  display1El.innerHTML=dis1num; //then i are showing result in first display
  display2El.innerText=""; // we clear the display 2
  dis2Num=""; // clear dis2Num varible
  tempResultEl.innerHTML=result  //we arw storing result in tempdisplay
  }
  
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

equalEL.addEventListener("click",()=>{
  if(!dis1num||!dis2Num)return;
  haveDot=false;
  operator();
  clearVar();
  display2El.innerText=result;
  tempResultEl.innerText="";
  dis2Num=result;
  dis1num="";
})

clearEl.addEventListener("click",()=>{
  display1El.innerHTML="";
  display2El.innerHTML="0";
  dis1num="";
  dis2Num="";
  result="";
  tempResultEl.innerHTML="";
})

ClearLastEl.addEventListener("click",()=>{
  display2El.innerHTML="0";
  dis2Num="";

})
