import React from "react";

type PreloaderProps = {
  isLoading: boolean;
};

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader-spinner" />
    </div>
  );
};

export default Preloader;
