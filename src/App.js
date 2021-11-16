import React, { useState } from 'react' 
import useJokeState from './hook/useJokeState' 


export default function App() {  

  const [jokes,setJokes] = useState('')  

  const [result,setReaslt] = useState('')    

const  randomJokes = useJokeState(jokes,setReaslt,result)


  return (
    <div>   
      <center>
      <h1> &#128514;  Genratoer the  Joke  &#128514; </h1> 
      </center>
      <input type="text" placeholder='chose random number' value={jokes}  onChange={(e) => setJokes(e.target.value) } />
      <button >  </button> 
      <h2> {result}  &#128514;  </h2>
    </div>
  )
}
