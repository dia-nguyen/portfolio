import React, { useState, useEffect } from "react";
import "./Loader.css";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setLoading(false);
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <div className={`loader-container${loading ? " loading" : ""}`}>
      <div className="loader-overlay"></div>
      <div className="loader-content">
        <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        <p>Starting Up...</p>
      </div>
    </div>
  );
}

export default Loader;
