import Chai from "./chai"
function App() {
  return (
    <Chai/>
    // <h1></h1> it will give erroe because jsx should be enclosed in the single tag 
    //solution-> sabko ek div me wrap kr do ya phir 
    // ek fragment return kr do <></>
  )
}


export default App
