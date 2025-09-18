import Counter from './counter'
import Batman from './batman'
import Users from './user'
import Friends from './frends'
import Posts from './post'
import './App.css'
import { Suspense } from 'react'

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// const fetchFriends = async() =>{
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// return res.json();
// }

const fetchPosts = async() => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
return res.json()
}









function App() {

  // const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();

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
      
      <Suspense fallback={<h3>Post are Comeing....</h3>}>
      <Posts postPromise={postPromise}> </Posts>
      </Suspense>
      
      {/* <Suspense fallback={<h3>Loding...</h3>}>
        <Users fetchUsers = {fetchUser}></Users>
      </Suspense>

      <Suspense fallback={<h3>friends coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
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
