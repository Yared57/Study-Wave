import { useState } from "react";

export default function Header({ onClick, currentTheme }) {
  const [file, setFile] = useState(null);
  const [pomodoroTimer,setPomodoroTimer]=useState(0)  
  function handleFile(e) {
    // Only update if a file was actually selected
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }
  function Timer(Time){
    const seconds=Time*60
    const Timer=new Date(seconds)

  }

  return (
    <header className="header">
      {/* LEFT: Logo and Branding */}
      <div className="header-left">
        <img src="StudyWave.png" className="imgLogo" alt="Study logo" />
        <span className="header-title">Study Wave</span>
      </div>

      {/* CENTER: Audio Player Logic */}
      <div className="header-center">
       {/* <div className="popmodro">
        {!pomodoroTimer?<label> Select Timer
        <select>
            <option value={15}>15 minute</option>
            <option value={15}>30 minute</option>
            <option value={15}>45 minute</option>
            <option value={15}>60 minute</option>
            <option value={15}>75 minute</option>
            <option value={15}>90 minute</option>
            <option value={15}>105 minute</option>
            <option value={15}>120 minute</option>
        </select>
        </label>:null}
        {pomodoroTimer?<div>

            </div>:null}
        <button>Start Timer</button>
        </div>*/}
       
        
        <input 
          type="file" 
          accept="audio/mp3" 
          onChange={handleFile} 
        />
        {file && (
          <div className="audio-player">
            <audio controls key={file.name}> 
              <source src={URL.createObjectURL(file)} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>

      {/* RIGHT: Theme Toggle */}
      <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {currentTheme ? "Night" : "Day"}
        </span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={currentTheme} 
            onChange={onClick} 
          />
          <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}