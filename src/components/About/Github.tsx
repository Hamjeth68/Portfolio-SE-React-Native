import React from "react";

const Github: React.FC = () => {
  return (
    <div className="space-y-4 text-center">
      <h3 className="text-2xl font-semibold tracking-tight text-ink">
        Days I <span className="text-gradient-animate">code</span>
      </h3>
      <div className="card-surface flex flex-col items-center gap-3 p-6 text-soft">
        <p className="text-sm text-muted">
          View my GitHub contribution history directly on GitHub.
        </p>
        <a
          href="https://github.com/hamjeth"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Open GitHub profile
        </a>
      </div>
    </div>
  );
};

export default Github;
