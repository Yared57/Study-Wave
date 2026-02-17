import './index.css'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

  export default function Documentreader({ file }) {

    const [numPages, setNumPages] = useState(null)
    const [scale, setScale] = useState(1.2)
    const [darkMode, setDarkMode] = useState(false)
    const [selectedPage, setSelectedPage] = useState(1)
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages)
    }
  
    return (
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Loading PDF...</p>}
      >
        <div className={`Reader-layout ${darkMode ? "dark" : ""}`}>
  
          {/* Sidebar */}
          <div className="Sidebar">
            {numPages &&
              Array.from(new Array(numPages), (_, index) => (
                <div
                  key={index}
                  className={`Thumbnail ${selectedPage === index + 1 ? "active" : ""}`}
                  onClick={() => {
                    setSelectedPage(index + 1)
                    document
                      .getElementById(`page_${index + 1}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Page pageNumber={index + 1} width={100} />
                </div>
              ))}
          </div>
  
          {/* Main Viewer */}
          <div className="Document-container">
  
            <div className="Topbar">
              <button onClick={() => setScale(prev => prev - 0.2)}>-</button>
              <span>{Math.round(scale * 100)}%</span>
              <button onClick={() => setScale(prev => prev + 0.2)}>+</button>
              <button onClick={() => setDarkMode(prev => !prev)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
  
            {numPages &&
              Array.from(new Array(numPages), (_, index) => (
                <div
                  key={index}
                  id={`page_${index + 1}`}
                  className="Page-wrapper"
                >
                  <Page pageNumber={index + 1} scale={scale} />
                </div>
              ))}
          </div>
  
        </div>
      </Document>
    )
  }
  