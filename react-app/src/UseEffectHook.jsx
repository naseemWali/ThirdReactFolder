    import React, {useEffect,useState } from 'react';


    const MyComponent = () => {

    const [count,setCount]=useState(0);
    // second usestate for second useeffect;
    const[count2,setCount2]=useState(0);
   
   useEffect(()=>{
      console.log('useEffect componnet1');   // these useEffect will run/update  when we give state variable/useState  to  dependency array otherwise it will run only one time after componenetdid mount/mounting.
      console.log('useEffect componnet2');                                    // we can run this also on statevariable by giving state variable to dependency array[].
   },[]);

   useEffect(()=>{
    console.log('count2 got updated',count2); 
     return function () {
        console.log('returning value is ',count2);
        
     }

    
   },[count2]) // here in dependency array i give first usefffect count and its own count2 to print two thing at once click that are console.log('useEffect component ') and console.log('count2 got updated'); by clicking on click me count2 button but it is showing when we click on click me button ;  []

   return(
    
    <div>
    <h4>useEffect file <button>Am I  increasing {count}</button></h4>
    <p>{count2}</p>
    <button onClick={()=>setCount(count+1)}>click me</button>
    <button onClick={()=>{setCount2(count2+1)}}>clickme count2</button>
    </div>
    
    )


    }


   export default MyComponent;