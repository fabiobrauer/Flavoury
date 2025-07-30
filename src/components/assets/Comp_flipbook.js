import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjsLib from "pdfjs-dist";

// CDN-Worker setzen
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const PDFFlipBook = ({ pdfUrl }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const pageCount = pdf.numPages;

      const loadedPages = [];

      for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        loadedPages.push(canvas.toDataURL());
      }

      // Wenn ungerade Seitenanzahl, leere Seite anhängen
      if (loadedPages.length % 2 !== 0) {
        loadedPages.push(null); // Platzhalter für leere Seite
      }

      setPages(loadedPages);
    };

    loadPdf();
  }, [pdfUrl]);

  return (
      <HTMLFlipBook
        width={700}
        height={900}
        size="stretch"            
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1400}
        showCover={true}
        maxShadowOpacity={0.5}
        flippingTime={800}
        mobileScrollSupport={true}
      >
        {pages.map((src, index) => (
          <div className="page" key={index}>
            {src ? (
              <img
                src={src}
                alt={`Seite ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#fff",
                }}
              />
            )}
          </div>
        ))}
      </HTMLFlipBook>

  );
};

export default PDFFlipBook;
