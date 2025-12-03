import React from "react";

const Github: React.FC = () => {
  return (
    <div className="space-y-4 text-center">
      <h3 className="text-2xl font-semibold">
        Days I <span className="text-brand-200">code</span>
      </h3>
      <div className="card-surface flex flex-col items-center gap-3 p-6 text-slate-200">
        <p className="text-sm text-slate-300">
          View my GitHub contribution history directly on GitHub.
        </p>
        <a
          href="https://github.com/hamjeth"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
        >
          Open GitHub profile
        </a>
      </div>
    </div>
  );
};

export default Github;
