import { useState } from 'react'
import Post from './Comoponent/Post/Post'
import './App.css'
import PostContainer from './Comoponent/Post-container/Post-container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 


    <PostContainer/>

    </>
      
  )
}

export default App
