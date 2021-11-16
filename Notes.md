// first of all don't forget use (.data) when use axios and import axios 

// I pass the state to custoum hock to make it work mapy there is another way I have to search ... 

// in first push I use custom hock to genrate the joke just with input field onchange  

but ... 

in the next push I use the useRef to handel butoon genrate the joke ...  
you cant do that by use state ....

to hanel use ref you have to asign useRef to setState value loke this 

**const genrateJoke = (e) => {
  e.preventDefault() 
  setJokes(jokeRef.current.value) ///
}**


 **then change value and onchange inside from =>>>> ref={jokeRef}**

 