import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"

const Create = () => {

  const navigate = useNavigate()

  const [title,setTitle] = useState('')
  const [method,setMethod] = useState('')
  const [rating,setRating] = useState('')
  const [formError,setFormError] = useState(null)

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!title ||!method ||!rating){
      setFormError("Kindly fill all fields correctly. ")
      return
    }

    console.log(title,rating,method);

    // add to supabase
    
    const {data,error} = await supabase
        .from('smoothies')
        .insert([{title,method,rating}])
        .select()
    if(error){
      console.log(error);
      setFormError("Kindly fill all fields correctly. ")
    }
    if(data){
      console.log(data);
      setFormError(null);
      navigate('/')
    }
  }

  return (
    <div className="page create ">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            className="text-slate-800"
            onChange={(e)=> setTitle(e.target.value)}
          />
          
          <label htmlFor="method">Method:</label>
          <textarea
            className="text-slate-800"
            id="method"
            value={method}
            onChange={(e)=> setMethod(e.target.value)}
          />

          <label htmlFor="rating">Rating:</label>
          <input
            className="text-slate-800"
            type="number"
            id="rating"
            value={rating}
            onChange={(e)=> setRating(e.target.value)}
          />
          
          <button className="border ml-2 p-2">Create Smoothie Recipe</button>

          {formError && <p className="error">{formError}</p>}
        </form>
    </div>
  )
}

export default Create