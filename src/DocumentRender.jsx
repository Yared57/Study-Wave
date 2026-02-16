import './index.css'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useState } from 'react'
import { Document,Page,pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()
export default function Documentreader() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      
      setPageNumber(1); 
    }
  
    return (
      <div className='Document-container'>
        <div className="Document-Header">
          <Document 
            file="/Electrical.pdf" 
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p>Loading PDF...</p>}
          >
            <Page height={750} pageNumber={pageNumber} />
          </Document>
        </div>
  
        {/* Modern Floating Toolbar */}
        <div className="Toolbar">
          <button 
            disabled={pageNumber <= 1} 
            onClick={() => setPageNumber(prev => prev - 1)}
          >
            ‹
          </button>
          
          <span className="page-info">
            {pageNumber} / {numPages || "..."}
          </span>
  
          <button 
            disabled={pageNumber >= numPages} 
            onClick={() => setPageNumber(prev => prev + 1)}
          >
            ›
          </button>
        </div>
      </div>
    );
  }