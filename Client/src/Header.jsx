import { useState } from "react"
export default function Header({ darkMode, onClick }) {
    const [file,setFile]=useState(null)
    function handleFile(e){
        setFile(e.target.files[0])
      }
  return (
      <header className="header">
          <div className="header-left">
              <img src="StudyWave.png" className="imgLogo" alt="Study logo" />
              <span className="header-title">Study Wave</span>
          </div>
            <div className="header-center">
                <input type="file" 
                accept="audio/mp3"
                onChange={handleFile}/>
                {file?
                <div className="audio-player"><audio controls>
               <source src={URL.createObjectURL(file)} type="audio/mpeg" />
            </audio>
            </div>:null}
            
            </div>
          <div className="header-right">
              <label className="switch">
                  <input 
                      type="checkbox"
                      checked={darkMode}
                      onChange={onClick}
                  />
                  <span className="slider"></span>
              </label>
          </div>
      </header>
  )
}
