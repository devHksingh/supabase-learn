import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import SmoothieCard from "../components/SmoothieCard";


const Home = () => {
  const [fetchError,setfetchError] = useState(null)
  const [smothies,setSmothies] = useState(null)
  const [orderBy,setOrderBy] = useState('created_at')

  const handleDelete =(id)=>{
    setSmothies(prevSmoothies =>{
      return prevSmoothies.filter(sm=>sm.id !== id)
    })
  }

  useEffect(()=>{
    const fetchSmoothies = async ()=>{
      const {data,error} = await supabase
        .from('smoothies')
        .select()
        .order(orderBy,{ascending:false})
      
      if(error){
        setfetchError(`Could not fetch the smoothies`)
        setSmothies(null)
        console.log(error);
      }
      if(data){
        setSmothies(data)
        console.log(data);
        setfetchError(null)
      }
    }

    fetchSmoothies()
  },[orderBy])

  return (
    <div className="page home">
        {fetchError && (<p>{fetchError}</p>)}
        {smothies && (
          <div className="smoothies">
            <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('rating')}>Rating</button>
            {orderBy}
          </div>
            <div className="smoothie-grid">
              {smothies.map(smoothie =>(
                // <div key={smoothie.id}>
                //   <h2>{smoothie.title}</h2>
                //   <p>{smoothie.method}</p>
                //   <p>{smoothie.rating}</p>
                // </div>
                <SmoothieCard 
                key={smoothie.id} 
                smoothie={smoothie} 
                onDelete ={handleDelete}
                />
              ))}
            </div>
          </div>
          
        )}
    </div>
  )
}

export default Home