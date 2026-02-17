import StudyForm from "./Body"
import Documentreader from "./DocumentRender"
export default function StudyWorkspace({ file }) {
    const [assistantOpen, setAssistantOpen] = useState(false)
  
    return (
      <div className="Workspace">
        <div className={`PDF-area ${assistantOpen ? "shrink" : ""}`}>
          <Documentreader file={file} />
        </div>
  
        <div className={`Assistant-panel ${assistantOpen ? "open" : ""}`}>
          <StudyForm />
        </div>
  
        <button 
          className="Toggle-button"
          onClick={() => setAssistantOpen(prev => !prev)}
        >
          {assistantOpen ? "Close AI" : "Open AI"}
        </button>
      </div>
    )
  }
  