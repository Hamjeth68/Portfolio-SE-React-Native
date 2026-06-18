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
          <h2 id="resume-heading" className="text-3xl font-semibold md:text-4xl">
            Resume
          </h2>
          <p className="text-slate-300">A snapshot of my experience, roles, and the products I’ve shipped.</p>
        </Reveal>

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
        >
          <AiOutlineDownload /> Download CV
        </a>

        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>

        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-white/10"
        >
          <AiOutlineDownload /> Download CV
        </a>
      </div>
    </section>
  );
};

export default ResumeNew;
