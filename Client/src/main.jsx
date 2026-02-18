import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Documentreader from './DocumentRender'
import StudyWorkspace from './Arranger'
import Header from './Header'
import { useState } from 'react'
function Display(){
  const [file,setFile]=useState(null)
  const [LofiMode,setLofiMode]=useState(false)
  function LofiSynthMode(){
      setLofiMode(prev=>!prev)
  }
  function handleFile(e){
    setFile(e.target.files[0])
  }
  return (
    <>
    <Header onClick={LofiSynthMode}/>
       <>
      {!file && (
        <div className="Welcome-container">
          <h1 className="Welcome-title">StudyWave</h1>
          <p className="Welcome-subtitle">
            Upload your PDF and start learning with your AI companion.
          </p>

          <label className="Upload-card">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFile}
              hidden
            />
            <span className="Upload-icon">📄</span>
            <span className="Upload-text">Choose a PDF</span>
          </label>
        </div>
      )}

      {file && <StudyWorkspace file={file} Theme={LofiMode}/>}
    </>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display/>
  </StrictMode>,
)
