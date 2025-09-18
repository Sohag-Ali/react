import Counter from './counter'
import Batman from './batman'
import './App.css'

function App() {

 function handelClick(){
  alert("i am click")
 }
 const handelClick2 = () => {
  alert("i am click 2")
 }

 const handelClickAdd= (num) => {
  const newnum = num + 5;
  alert(newnum);
 }
  return (
    <>
      
      <h1>Vite + React</h1>
      <Batman></Batman>
      <Counter></Counter>
      {/* <button>Click Me</button> */}
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>

      <button onClick={() => handelClickAdd(10)}>Click add 5</button>

    </>
  )
}

export default App
