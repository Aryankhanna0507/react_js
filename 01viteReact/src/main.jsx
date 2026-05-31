import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // yaha pe ham seedha named import kar rahe h isiliye hame creatRoot se pahle ReactDom likhne ki jarurat nahi padi
// seedha ussi function ko hi import kr liya 
// but jab create react app ka use krke ham react project banate h to ham pura module impot karta h 
import App from './App.jsx'
// app ek function hi to jo ham import krke yaha use kar rahe hai
// to function to ham yaha bhi create kar sakte hai 
function Myapp(){
  return (
    <div>
      <h1>MY APP</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target='_blank'>click here to go google</a>
)
// it gets convert into tree like dom structure
// react hamko bahut sare method provide karta hai usme se ek metod h React.createElement
// Syntax
// React.createElement(
//   type,
//   props,
//   children
// )
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click here to visit google2'
)
// Jab aap JSX likhte ho:
// const element = <h1>Hello</h1>;
// React khud JSX ko nahi samajhta. JSX ko pehle Babel (ya build tool) transform karta hai.
// Transformation ke baad code kuch aisa ban jata hai:
// const element = React.createElement(
//   "h1",
//   null,
//   "Hello"
// );
// Aur React.createElement() ek React Element object return karta hai:
// {
//   type: "h1",
//   props: {
//     children: "Hello"
//   }
// }
createRoot(document.getElementById('root')).render( // ye createRoot hi dom create krta hai
  <StrictMode>
    <Myapp/>
    {anotherElement}
    {/* my app is function so instead of writing <Myapp/> we can also write Myapp() but it is not recommended*/}
    {reactElement}
    <App />
  </StrictMode>,
)
// Kya ho raha hai internally?
// const anotherElement = (
//   <a href="https://google.com">Google</a>
// )
// Ye actually ek JavaScript object ban jata hai:
// {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     children: 'Google'
//   }
// }
// React ko jab JSX ke andar {anotherElement} milta hai, to wo is object ko read karke actual DOM element create kar deta hai.
// ***************************************************
// React.createElement() React ka core method hai jo JSX ke peeche use hota hai.
// Jab aap likhte ho:
// <h1>Hello World</h1>

// Babel<-(imp terminology ) isko convert karta hai:

// React.createElement("h1", null, "Hello World");
// Syntax
// React.createElement(
//   type,
//   props,
//   children
// )
// type → tag ya component ("div", "h1", MyComponent)
// props → attributes/object
// children → andar ka content
// Example 1
// const element = React.createElement(
//   "h1",
//   null,
//   "Hello World"
// );

// Equivalent JSX:

// <h1>Hello World</h1>
// Example 2
// const element = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   "Visit Google"
// );

// Equivalent JSX:

// <a href="https://google.com" target="_blank">
//   Visit Google
// </a>
// Example 3: Nested Elements

// JSX:

// <div>
//   <h1>Hello</h1>
//   <p>Welcome</p>
// </div>

// Without JSX:

// const element = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Hello"),
//   React.createElement("p", null, "Welcome")
// );
// React Element Object

// createElement() actual DOM element nahi banata.

// const element = React.createElement(
//   "h1",
//   { className: "heading" },
//   "Hello"
// );

// console.log(element);

// Output kuch aisa hota hai:

// {
//   $$typeof: Symbol(react.element),
//   type: "h1",
//   props: {
//     className: "heading",
//     children: "Hello"
//   }
// }

// Ye ek React Element Object hai.

// Baad me ReactDOM is object ko real DOM me convert karta hai.