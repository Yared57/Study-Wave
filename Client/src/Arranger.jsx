import { useState, useRef, useEffect } from "react";
import StudyForm from "./Body";
import Documentreader from "./DocumentRender";

export default function StudyWorkspace({ file }) {
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [panelWidth, setPanelWidth] = useState(450); // Initial width in pixels
  const isResizing = useRef(false);

  
  const startResizing = (e) => {
    isResizing.current = true;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResizing);
    document.body.style.cursor = "col-resize"; // Visual feedback
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResizing);
    document.body.style.cursor = "default";
  };

  const resize = (e) => {
    if (!isResizing.current) return;
    // Calculate new width: window width minus current mouse X position
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth > 200 && newWidth < window.innerWidth * 0.8) {
      setPanelWidth(newWidth);
    }
  };

  return (
    <div className="Workspace">
      {/* PDF Area: It takes the remaining width */}
      <div 
        className="PDF-area" 
        style={{ width: assistantOpen ? `calc(100% - ${panelWidth}px)` : "100%" }}
      >
        <Documentreader file={file} />
      </div>

      {/* The Resizer Handle (Only show if AI is open) */}
      {assistantOpen && (
        <div className="resizer" onMouseDown={startResizing} />
      )}

      {/* Assistant Panel */}
      <div 
        className={`Assistant-panel ${assistantOpen ? "open" : ""}`}
        style={{ width: assistantOpen ? `${panelWidth}px` : "0px" }}
      >
        <StudyForm />
      </div>

      <button 
        className="Toggle-button"
        onClick={() => setAssistantOpen(prev => !prev)}
      >
        {assistantOpen ? "Close Wave" : "Open Wave"}
      </button>
    </div>
  );
}