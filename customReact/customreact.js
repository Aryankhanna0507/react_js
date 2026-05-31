// (in react )let see function jo tag (function jo html) return karta hai usko ract kaise dekhta hai
const reactElement={ 
// react try to make the tree of the element-
type:'a',
props:{ // uski properties kya kya hai (it is an object)
  href:'https://www.google.com',
  target:'_blank'
},
Children:'click here to visit google.com'
// this is how react see a element
}
const mainContainer=document.querySelector("#root");
function customRender(reactElement,mainContainer){
  // this code is note good because yaha ham ek ek kreke attribute set kar rahe h 
  // agr aur attribute aa jayenge to it will create problems 
  /*
  const domElement=document.createElement(reactElement.type);
  domElement.innerHTML=reactElement.Children;
  domElement.setAttribute('href',reactElement.props.href);
  domElement.setAttribute('target',reactElement.props.target);
  mainContainer.appendChild(domElement);
  */
//  loop based code
 const domElement=document.createElement(reactElement.type);
 domElement.innerHTML=reactElement.Children;
  // Object.entries(reactElement.props).forEach(([key,value])=>{
  //    domElement.setAttribute(key,value);
  // });
  // instead of this we can also use for in loop which is used to traverse objects
  for(const prop in reactElement.props){
    if(prop==='chiildren') continue; 
    domElement.setAttribute(prop,reactElement.props[prop]);
  }
   mainContainer.appendChild(domElement);
}
customRender(reactElement,mainContainer);
// kafi hadd tak react me bhi internally isi tarah se kaam hota hai
// now go to vite and learn 