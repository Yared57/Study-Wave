export default async function getStudytipsFromMistral(Subjectmatter) {

    

    const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message:Subjectmatter
        })
    })
    if (!response.ok){
        const err=await response.text()
        console.log(err)
        throw new Error("Api Failed")
    }
    const data = await response.json()

    return data.Data.choices[0].message.content
}

