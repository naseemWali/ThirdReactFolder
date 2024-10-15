
import React,{useEffect,useState} from "react";

const Timer=()=>{
  
const[time,setTime]=useState(0);
useEffect(()=>{
console.log('add');

  const timing=setInterval(()=>{setTime(time+1)  // we can also make by using setTimeout function easily but we do it by using clear interval in return or also called cleanup function inside useEffect .the cleanup function or return function is the one which return the prvious value and it  not alllow to executed the new one til the previuos is not executed.
    console.log(timing);                         // In JavaScript, clearInterval() is used to stop an interval that was previously created using setInterval(). When you call setInterval(), it repeatedly executes a function or code block at specified intervals (in milliseconds). However, if you want to stop the repetition at some point, you can use clearInterval().
  },1000);

 return function(){
  console.log('remove');
  clearInterval(timing);
 };

},[time])

return(
    
     <div className="container  my-5" style={{border:'2px solid black',width:'23%',height:'30%',margin:'2% 37%'}}>
     <h3 style={{textAlign:'center'}}>counter</h3>
     <p style={{textAlign:'center'}}>Current Time is : <b><em>{time} seconds </em></b></p>
     </div>
    

)



}
export default Timer;