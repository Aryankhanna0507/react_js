import Chai from "./chai"
// how will you inject js (variables here ) 
// for this we can use curly braces syntax {} isko bolte h expression or evaluated expression 
// isme ham puri js nahi likhte h bss evaluated result lihkte hai 
// baki java script return ke bahar likh sakte h ya phir function ke bahar likhe lo 
// means jsx me ham js ka keval expression likh sakte h statement nahi 
// Rule yaad rakho
// Function ke bahar → normal JavaScript.
// Function ke andar, return se pehle → normal JavaScript.
// JSX ke andar {} → sirf JavaScript expressions (jo value return karein).
function App() {
  return (
    <Chai/>
    // <h1></h1> it will give error because jsx should be enclosed in the single tag 
    //solution-> sabko ek div me wrap kr do ya phir 
    // ek fragment return kr do <></>
    // jo function aap import kr rahee ho wo ek component hi hai
    // best practices 
    // chahe vite ka use krke banao ya phir normal react ka use krke in component function ka name must be capitalize otherwise it will give us eror sath me file ka name bhi capitalize hi rakha kro 
    // some library will force you ki component ka naam jsx ke rakho na ki keval js se ex-vite
  )
}


export default App
// **************************************** very important
// Bilkul. React function component me aap JavaScript ko do jagah use kar sakte ho:

// 1. return se pehle normal JavaScript

// Yahaan aap variables, loops, calculations, function calls sab kar sakte ho.

// function App() {
//   const name = "Aryan";
//   const age = 21;

//   const message = `My name is ${name}`;

//   return (
//     <div>
//       <h1>{message}</h1>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// Yahaan name, age, message sab normal JavaScript hai.

// 2. JSX ke andar {} ke through

// JSX ke andar directly statements nahi, sirf JavaScript expressions likh sakte ho.

// function App() {
//   const name = "Aryan";

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{2 + 3}</h2>
//       <h3>{name.toUpperCase()}</h3>
//     </div>
//   );
// }

// Yeh sab expressions hain jo value produce karte hain.

// Kya nahi likh sakte?
// function App() {
//   return (
//     <div>
//       {const name = "Aryan"}   // ❌ Error
//     </div>
//   );
// }

// Kyunki const ek statement hai, expression nahi.

// Similarly:

// {
//   if (true) {
//     return <h1>Hello</h1>;
//   }
// }

// ❌ Error

// If condition kaise likhte hain?

// Ternary operator ya logical AND use karte hain.

// function App() {
//   const isLoggedIn = true;

//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
//     </div>
//   );
// }
// Function ke bahar bhi JavaScript likh sakte ho
// const name = "Aryan";

// function App() {
//   return <h1>{name}</h1>;
// }

// Ye bhi valid hai.

// Rule yaad rakho
// Function ke bahar → normal JavaScript.
// Function ke andar, return se pehle → normal JavaScript.
// JSX ke andar {} → sirf JavaScript expressions (jo value return karein).

// Isliye React me common pattern hota hai:

// function App() {
//   const name = "Aryan";
//   const age = 21;

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{age >= 18 ? "Adult" : "Minor"}</h2>
//     </div>
//   );
// }

// Yahaan calculation aur variable declaration return se pehle hui, aur JSX ke andar unki values {} ke through render hui.
