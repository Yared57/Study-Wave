import { useState } from "react" 
import getStudytipsFromMistral from "./APAPI";
import Notes from "./Note";
import Header from "./Header";
export default function StudyForm() {
    const [darkMode,setDarkmode]=useState(false)
    const [loading,setLoading]=useState(false)
    const [clicked,setClicked]=useState(false)
    const [note,setNote]=useState("")
    
  function toggletheme(){
    setDarkmode(prev=>!prev)
  }
    
    async function Getresponse(formdata){
        
        const Topic=formdata.get("topic-input")
        if(Topic===""){
            alert("Input Your Prefered Subject first")
            return 
        }
        setLoading(true)
        const response=await getStudytipsFromMistral(Topic)
        setNote(response)
        setClicked(true)
        setLoading(false)

    }


    return (
        <div className={darkMode ? "app dark" : "app"}> 
        
        <main>
        
            <form className="study-form"  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    Getresponse(formData)
                }}>
                <label htmlFor="topic">Topic:</label>
                <input 
                    id="topic"
                    type="text" 
                    placeholder="Differential Equations" 
                    className="ingredient-input"
                    name="topic-input" 
                />

                
                
                
                <button>Create</button>
            </form>
            {loading ? <p>Generating Notes....</p>:null}
            {!loading && clicked ? <Notes response={note}/>:null}

        </main>
        </div>
    );
}