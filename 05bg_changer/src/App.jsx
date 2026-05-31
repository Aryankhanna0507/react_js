import { useState } from 'react'

function App() {

const [color,setColor]=useState("bg-olive-500");
let chengeColor=(val)=>{
setColor(val)
}
// let chengeColorUsingStyletag=()=>{
//   setColor(val)
// }
  return (
    // <div className={`w-full min-h-screen flex justify-center items-end`} style={{backgroundColor:color}}> aise bhi kar satke ho
    <div className={`w-full min-h-screen flex justify-center items-end ${color}`}>
    <div className='bg-white flex justify-center gap-5 p-3 w-240 rounded-2xl mb-10' >
     <button onClick={()=>chengeColor("bg-red-500")} className='bg-red-500 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Red</button>
     <button onClick={()=>chengeColor("bg-black")} className='bg-black p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Black</button>
     {/* ham yaha par style tag ka use krke bhi kar sakte the  */}
     <button onClick={()=>chengeColor("bg-yellow-500")} className='bg-yellow-500 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Yellow</button>
     {/* <button onClick={()=>chengeColorUsingStyletag("bg-green-500 ")} className='bg-green-500 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Green</button> */}
     <button onClick={()=>chengeColor("bg-green-500 ")} className='bg-green-500 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Green</button>
     <button onClick={()=>chengeColor("bg-pink-600")} className='bg-pink-600 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Pink</button>
     <button onClick={()=>chengeColor("bg-orange-500")} className='bg-orange-500 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Orange</button>
     <button onClick={()=>chengeColor("bg-blue-700")} className='bg-blue-700 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>blue</button>
     <button onClick={()=>chengeColor("bg-amber-900")} className='bg-amber-900 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Brown</button>
     <button onClick={()=>chengeColor("bg-white")} className='bg-white p-1 pl-3.5 pr-3.5 rounded-2xl '>White</button>
     <button onClick={()=>chengeColor("bg-gray-600")} className='bg-gray-600 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Gray</button>
     <button onClick={()=>chengeColor("bg-purple-700")} className='bg-purple-700 p-1 pl-3.5 pr-3.5 rounded-2xl text-white'>Purple</button>
    </div>
    </div>
  )
}

export default App
