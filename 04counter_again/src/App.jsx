import { useState } from 'react'
function App() {
const [counter,setCounter]=useState(0);
// "Counter const hai, phir iski value change kaise ho rahi hai?"
// Reality: counter ko hum directly change nahi kar rahe

// Ye galat hai:

// counter = counter + 1; // ❌ Error

// Kyuki counter const hai.
//React internally state update karta hai aur component ko dobara render karta hai.
// Purana counter change nahi hua.
// React ne component ko fir se chalaya.
// Is baar counter ki nayi value di.
// Purana variable khatam ho gaya, naya render me naya variable create hua.

// React state bhi kuch aise hi kaam karti hai.
// Ye kehna kaafi had tak sahi hai ki har re-render par ek naya counter variable create hota hai
// const [state, setState] = useState(initialValue)

// - state is const.
// - We never modify state directly.
// - setState() does NOT change the variable.
// - setState() tells React to store a new value.
// - React re-renders the component.
// - During the new render, React provides the updated state value.
let increase=()=>{
  // counter=counter+1;->it will give error
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);
  //useState kya krta hai-> jitne bhi update bhejne h ui me ya vairabe me bhi vo usko batches me bhejta hai
  // to isme sare setcounter ka ek batch banega aur aap internally ek hi kaam ko repeat kr rahe ho 
  // When multiple setCounter(counter + 1) calls are made in the same function, React batches them together. Since counter still holds the value from the current render (for example, 0), every call becomes setCounter(1). As a result, React updates the state only once to 1. To perform multiple updates based on the latest state, use the functional form setCounter(prev => prev + 1), where each update receives the most recent state value.
  // bar bar update kaise kare :(solution)->
  // ham prev counter leke ek call back function pass karte h usse update hota h 
  setCounter(prevCounter => prevCounter+1);
  setCounter(prevCounter => prevCounter+1);
  setCounter(prevCounter => prevCounter+1);
  setCounter((prevCounter)=>{
    return prevCounter+1;
  })
}
let decrease=()=>{
  setCounter(counter-1);
}
  return (
    <>
      <h1 className='bg-black text-white m-2 p-3 text-center text-3xl ml-10 mr-10 rounded-2xl'>creating a counter app</h1>
      <div className='flex justify-center gap-20 m-20'>
      <div className='bg-black text-white p-2.5 pl-5 pr-5 rounded-2xl'><button onClick={increase}>increase value</button></div>
      <div  className='bg-black text-white p-2.5 pl-5 pr-5 rounded-2xl' ><button onClick={decrease}>decrease value</button></div>
      
      </div>
        <div className='text-gray-800 bg-blue-600  m-auto text-center w-10 h-10 leading-10 rounded-full'>{counter}</div>
    </>
  )
}

export default App
