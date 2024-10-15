
import './App.css';
import React, {useEffect,useState} from 'react';
import UseEffectHook from './UseEffectHook';
import Timer from './Timer'

function App() {
const[visible,setInvisible]=useState(false);

useEffect(()=>{
console.log('app component');

},[visible])
  
  
  return (
  <div className='app'>
    hello app.js
    {
    visible?<UseEffectHook/>
    :null
    }
    <button onClick={()=>setInvisible(!visible)}>switch button</button>
     
     <Timer/>
     
    </div>

  );
}
export default App;
