import Card from './components/Card'
function App() {
let myObj={
  name:"aryan khanan",
  age:20
};
let newArr=[1,2,3,4,5,6];
  return (
    <div>
      <h1 className="bg-black text-white w-200 m-auto mt-3 text-center p-2.5 rounded-2xl">tailwind Css and Props</h1> 
      <div  className="flex justify-center p-10 m-2">
        {/* is tarah se ham ek component se dusre component me data pass kar sakte h */}
        <Card course="chai or react" obj={myObj} array={newArr}/>
        <Card course="hitesh choudhary chai or code" array={newArr}/>
        <Card/>
        {/* aisa krke ham code ki reusability bada sakte h same card ko bar bar likhne ki jagah uss card ko ek jagah likh do aur jaha me requirment ho uska wahi use kr lo  */}
        {/* 
        in react ham code ko component me divide karte h ki ek particular component kya kaam kar raha hai
         */}
  </div>
    </div>
  )
}

export default App
// props-:
// In React, Props (Properties) are a way to pass data from a parent component to a child  component.

// Definition

// Props are read-only values that a parent component sends to a child component so that the child can display or use that data.
// Props are inputs to a React component. They allow data to be passed from a parent component to a child component and make components reusable. Props are read-only and cannot be modified by the child component.
// Props are Read Only

// This is wrong:

// function Student(props) {
//   props.name = "Rohit"; // ❌ Error
// }

// Props should never be modified by the child component.

// React treats props as immutable.
// Destructuring Props

// Instead of:

// function Student(props) {
//   return <h1>{props.name}</h1>;
// }

// we usually write:

// function Student({ name }) {
//   return <h1>{name}</h1>;
// }

// This is called destructuring.
// Real Life Example

// Suppose you have a Student component.

// function Student(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// Now the parent component sends data:

// function App() {
//   return (
//     <>
//       <Student name="Aryan" />
//       <Student name="Rahul" />
//       <Student name="Priya" />
//     </>
//   );
// }
// Output
// Hello Aryan
// Hello Rahul
// Hello Priya

// Here:

// name="Aryan"

// is a prop.

// And inside the child:

// props.name

// accesses that value.

// Why do we use Props?

// Without props:

// function Student() {
//   return <h1>Hello Aryan</h1>;
// }

// Every Student component would show the same data.

// With props:

// <Student name="Aryan" />
// <Student name="Rahul" />
// <Student name="Priya" />

// One component becomes reusable for different data.