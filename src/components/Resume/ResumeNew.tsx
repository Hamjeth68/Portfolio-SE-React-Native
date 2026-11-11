import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/HamjethMisree.pdf";
import Reveal from "../Reveal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew: React.FC = () => {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 1100 ? 1.4 : width > 768 ? 1.1 : 0.75;

  return (
    <section className="relative py-14 md:py-20" aria-labelledby="resume-heading">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <Reveal className="space-y-2">
          <p className="section-kicker">Experience</p>
          <h2 id="resume-heading" className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Resume
          </h2>
          <p className="text-soft">A snapshot of my experience, roles, and the products I’ve shipped.</p>
        </Reveal>

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          <AiOutlineDownload /> Download CV
        </a>

        <div className="w-full overflow-hidden rounded-xl border border-line bg-surface/80 p-4 shadow-card">
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <AiOutlineDownload /> Download CV
        </a>
      </div>
    </section>
  );
};

export default ResumeNew;
