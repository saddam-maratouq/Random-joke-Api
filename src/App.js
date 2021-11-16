import React, { useRef, useState } from 'react' 
import useJokeState from './hook/useJokeState' 


export default function App() {  

  const jokeRef= useRef(null)

  const [jokes,setJokes] = useState('')  

  const [result,setReaslt] = useState('')    

 useJokeState(jokes,setReaslt,result) 


const genrateJoke = (e) => {
  e.preventDefault() 
  setJokes(jokeRef.current.value) 
} 
 
  return (
    <div>   
      <center>
      <h1> &#128514;  Genratoer the  Joke  &#128514; </h1> 
      </center> 

      <form >
      <input type="text" placeholder='chose random number' ref={jokeRef} />
      <button onClick={genrateJoke} > Genrate </button> 
      </form> 

      <h2> {result}  &#128514;  </h2>
    </div>
  )
}
