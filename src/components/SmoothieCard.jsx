import { Link } from "react-router-dom";
import { Pencil,Trash } from 'lucide-react';
import supabase from '../config/supabaseClient'

function SmoothieCard({ smoothie }) {
  
    console.log('smoothie :',smoothie);
    const handleDelete = async()=>{
      const {data,error}= await supabase
         .from('smoothies')
         .delete()
         .eq('id',smoothie.id)
         .select()

    if(error){
      console.log(error);
    }
    if(data){
      console.log('deleted data',data);

    }

    }
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons flex font-light gap-4 mt-4">
        <Link to={'/'+smoothie.id}>
          <Pencil className="text-blue-600 cursor-pointer"/>
        </Link>
        <Trash className="text-red-600 cursor-pointer" onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default SmoothieCard