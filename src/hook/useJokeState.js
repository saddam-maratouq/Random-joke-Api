import axios from 'axios'
import  { useEffect } from 'react' 


const useJokeState = (jokes,setReaslt) => {
   
   
  

    useEffect(() => {
    
        const jokesData = async () =>{  
    
          let params = {
    
            headers: {
              Accept: "application/json"
            }
          }
        
        const request =   await   axios.get("https://icanhazdadjoke.com/",params )
         
          console.log(request.data.joke);   // data always with axios  'sly mistake '
    
          setReaslt(request.data.joke)
          
        } 
    
        if (!jokes) {
            setReaslt('')
        }
        const timeSearch = setTimeout(() => {
          
          if (jokes) {
            jokesData();  
          }
    
        }, 1500);
    
        return () => {clearTimeout(timeSearch) }
    
      }, [jokes,setReaslt])   

    
}

export default useJokeState
