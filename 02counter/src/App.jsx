import { useState } from 'react' // hook
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
// let counter=0;
// let increase=()=>{
//   counter=counter+1;
//   // counter update ho raha hai, lekin UI re-render nahi ho rahi.
//   console.log("increasing the value!!"+counter);
// }
// counter update ho raha hai, lekin UI re-render nahi ho rahi.

// Aapka code:

// let counter = 0;

// let increase = () => {
//   counter = counter + 1;
//   console.log(counter);
// }

// Jab button click hota hai:

// counter ki value memory me 1 ho jati hai.
// Console me 1 print ho jata hai.
// Lekin React ko pata hi nahi chalta ki UI update karni hai.
// Isliye screen par ab bhi counter 0 dikhta hai.
// React ka Rule

// React sirf do situations me re-render karta hai:

// State change ho (useState)
// Props change ho

// Normal variables (let, const, var) change hone par React re-render nahi karta.

// Ek aur important baat

// Har render par component function dobara execute hota hai.

// function App() {
//   let counter = 0;
// }

// Matlab jab bhi App render hoga:

// let counter = 0;

// fir se run hoga.

// Isliye normal variable component ka data store karne ke liye use nahi karte.
// solution using useState
// useState->it is resposible to change the state (here chages does't mean that it update the value) is change ko propogate kiya jata h aapke ui (dom ke andar)
// Definition of useState

// useState is a React Hook that allows a function component to store and manage state (data) and automatically re-render the component when that state changes.
// Syntax:
// const [state, setState] = useState(initialValue);
// How does useState work?
// const [count, setCount] = useState(0);

// React does three things:

// 1. Creates a state variable
// count

// Current value of the state.

// Initially:

// count = 0

// because we passed 0 to useState.

// 2. Creates a setter function
// setCount

// This function is used to update the state.

// Example:

// setCount(5);

// React updates the stored state value to 5.

// 3. Triggers a re-render

// When setCount() is called:

// setCount(count + 1);

// React:

// Updates the state.
// Calls the component function again.
// Creates new JSX.
// Compares it with the previous virtual DOM.
// Updates only the changed parts of the real DOM.
let [counter,setCounter]=useState(0);
let increase=()=>{
  counter=counter+1;
  setCounter(counter)
  console.log(counter);
}
let decrease=()=>{
  if(counter==0) {
    console.log("it has its minimum value!!");
    alert("has its minimum value");
  }else{
     counter=counter-1;
  setCounter(counter);
  console.log(counter);
  }
 
}
  return (
    <>
    <h1>creating a counter project</h1>
    <h2 >counter {counter}</h2>
    <div><button onClick={increase}>click to increase value</button></div>
    <div><button onClick={decrease}>click to decrease value</button></div>
    </>
  )
}

export default App
// normal value ko update karoge to vo ui pe jake change nahi hoga 
// this the main power of react pahle ui pe jo bhi change hoga vo react karega aap nahi 
// # React State Notes
// *******************************************************************
// ## 1. Normal Variables

// ```js
// let counter = 0;
// ```

// * React normal variables ko track nahi karta.
// * Variable change hone par UI update nahi hoti.
// * Re-render hone par variable fir se initialize ho jata hai.

// Example:

// ```js
// counter = counter + 1;
// ```

// Console value change hogi, UI nahi.

// ---
// solution using hook (react me jo bhi changes hota h vo hooks ki help se hote h)
// ## 2. State
// Hook kya hota hai?

// Hook ek special function hota hai jo React ke features ko function components ke andar use karne deta ha

// State is data that React tracks.

// ```js
// const [counter, setCounter] = useState(0);
// ```

// * counter → current value
// * setCounter → value update karne wala function

// ---

// ## 3. Why useState?

// State change hone par React:

// 1. New state save karta hai.
// 2. Component ko re-render karta hai.
// 3. UI update karta hai.

// ---

// ## 4. Updating State

// ```js
// setCounter(counter + 1);
// ```

// Never do:

// ```js
// counter = counter + 1;
// ```

// because React ko update ka pata nahi chalega.

// ---

// ## 5. Component Re-render

// Component function har render par dobara execute hota hai.

// ```js
// function App() {
//   console.log("rendered");
// }
// ```

// Har state update par ye function fir se chalega.

// ---

// ## 6. Rule to Remember

// Normal Variable → React track nahi karta.

// State Variable → React track karta hai.

// UI me dikhane wala data almost always state me rakhna chahiye.
