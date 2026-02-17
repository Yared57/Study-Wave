require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())

const SYSTEM_PROMPT = `You are "Wave," the AI core of StudyWave.

Your job is to:
- Explain topics clearly and structurally using Markdown.
- ALL mathematical expressions MUST be wrapped in LaTeX delimiters:
  - Use $ ... $ for inline equations.
  - Use $$ ... $$ for block equations.

Formatting Examples (STRICT ADHERENCE REQUIRED):
- Use $\\frac{dy}{dx}$ for inline math.
- Use block format for complex equations:
$$
\\frac{d^2y}{dx^2} + y = 0
$$

Note: Never output double backslashes to the user. Always use a single backslash like \\frac.`


app.post("/api/chat",async (req,res)=>{
    try{
        const {message}=req.body 
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPEN_ROUTER_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "mistralai/mistral-7b-instruct",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${message} with this much as a topic. Please give me an overview on the subject.` }
                ]
            })
        })
        const data=await response.json()
        res.status(200).json({success:true,Data:data})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"Server error"})
    }
})
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})