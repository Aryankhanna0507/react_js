import { useState,useCallback,useEffect,useRef} from 'react'
// also learn about useRef->jab kisi bhi cheez ka referance lena hota hai to useref hook aata hai 
// useCallback hook is used in this project -> learn it from the react.dev
function App() {
const [length,setLength]=useState(8);
const [numberAllowed,setNumberAllowed]=useState(false);
const [characterAllowed,setCharacterAllowed]=useState(false);
const [password,setPassword]=useState("");
// useRef hook
const passwordRef=useRef(null);
const passwordGenerator=useCallback(()=>{ // yaha per hamne usecallback isiliye likha taki ye call ko optimize kr sake
  // ye memoize kr leta hai jitna ho sake maximum ho sakta hai pura function hi memorize kr le ya phir uska kuch part ko kr le memorize taki vo cheeze resuse ho paye
  // isme ham depandancy array bhi dete hai 
  // mtlb inn ke basis pe function ko memorize kr lo 
  //  jaise iss valee me depandancy array me hamne bhrja hai length and manyi more 
  // mtlb lenght ke basis par memorize kr lo similiarly jo bhi bheja h uska basis pe memorize kr lo function ko 
  // bina usecallback ke bhi same chalta h lekin usecallback ko use karna accha tareeka hota h 
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed){
    str+="0123456789";
  }
  if(characterAllowed){
    str+="@#!~$%^&*(){}[]=+_-";
  }
  for(let i=1;i<=length;i++){
    let idx=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(idx);
  }
  setPassword(pass)
},[length,numberAllowed,characterAllowed,setPassword]);
//  ab ham chahte h ki jaise ki page load ho ye function call ho jaye 
// aise  hi call kr do 
// passwordGenerator();
// but this will give error-
// Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
// learn about the useEffect 
// useEffect is a React Hook that lets you perform side effects in a function component after it renders.
// useEffect is a React Hook used to perform side effects in function components. It runs after rendering and can be configured to run on every render, only once, or whenever specified dependencies change.
// Syntax:
// syntax inlclude function and dependancy array 
// useEffect(() => {
//   // side effect code
// }, []);
// What is a Side Effect?

// A side effect is anything that happens outside of rendering UI.

// Examples:
// Fetching data from an API
// Setting a timer (setInterval, setTimeout)
// Updating the document title
// Accessing local storage
// Adding event listeners
// Why do we need useEffect?

// React components should mainly focus on:

// State → JSX → UI

// But sometimes we need to do extra work after React updates the UI.

// That's where useEffect comes in.
// How does it work?
// useEffect(() => {
//   console.log("Component rendered");
// });

// Flow:

// Component renders.
// React updates the DOM.
// useEffect runs.
// Common Usage Patterns
// 1. Run on Every Render
// 2. Run Only Once (on Mount)
// 3. Run When a State Changes
// ess tarah se kar sakte hai
useEffect(()=>{ // jab bhi hamra pge load hota  h tb call hota h ya phir isko depandancy me kuch bhi change hua tab call ho jata hhai
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select(); // ? isiliye lagaya h agr null hua mtlb koi value nahi hui to nahi chalega
  passwordRef.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password);
})
// Difference between UseEffect and useCallback dependencies
// 1.useEffect dependencies are used to call function again whenever any changes are found in dependencies
// 2.useCallback dependencies are used to memoize function again whenever any changes are found in dependencies
  return (
    // <h1 className='bg-amber-400'> hello </h1>
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        id='inputRange'
        value={length}
         className='cursor-pointer'
         onChange={(e)=>setLength(e.target.value)}
          />
          <label htmlFor='inputRange'>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} 
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultValue={characterAllowed}
              id="characterInput"
              onChange={()=>{
                setCharacterAllowed((prev)=>!prev)
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>

    </>
  )
}

export default App
