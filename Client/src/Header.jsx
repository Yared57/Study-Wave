export default function Header({ darkMode, onClick }) {
  return (
      <header className="header">
          <div className="header-left">
              <img src="StudyWave.png" className="imgLogo" alt="Study logo" />
              <span className="header-title">Study Wave</span>
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
