import React from 'react'; // it is the core foundational libaary (which is used to take he reference)
import ReactDOM from 'react-dom/client'; // it is the implementation of the react on web just like react native is the implementation of ract on mobile app
// the above two libraries are used to manipulate the web dom 
import AuthPage from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//website has its dom but react also creats it own dom(ReactDOM) which is called the virtual dom 
// then it compare the virtual dom with the main dom and 
// visulize the difference and after that it will update only those part of the main dom that are different from the virtual dom 
// createrRoot is the method defined in the reactDom
// and then we are just writing our basic js
//div with root id present in the index.html and storing its reference into root
root.render(
  <React.StrictMode>
    <AuthPage />
  </React.StrictMode>
);
// render the AuthPage tag but in html there is no tag named AuthPage 
// AuthPage we are importing this and this is basically a function that return a html 
// we are writing html through javascript 
// Writing HTML inside JavaScript is commonly called JSX when working with React.
// we can create our cutom tags
// JSX stands for:
// JavaScript XML
// It lets you write HTML-like syntax inside JavaScript.
// createRoot-> it expects ki mujhe html se ek element select krke de do