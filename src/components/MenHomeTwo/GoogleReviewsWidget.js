import React, { useEffect, useRef } from "react";

function GoogleReviewsWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Laden des Elfsight-Skripts
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = "elfsight-script"; // ID hinzufügen, um doppelte Skripts zu vermeiden
      document.body.appendChild(script);
    }

    // Eine Timeout-Funktion, um dem Widget Zeit zum Laden zu geben
    const timeoutId = setTimeout(() => {
      if (widgetRef.current) {
        // Force layout recalculation
        widgetRef.current.style.display = "none";
        void widgetRef.current.offsetHeight; // Trigger reflow
        widgetRef.current.style.display = "block";
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="elfsight-app-69763e43-f806-42c2-a72a-c54e4892223f"
      style={{
        minHeight: "600px",
        width: "100%",
        overflow: "hidden",
        position: "relative", // Position hinzufügen für bessere Stabilität
      }}
    />
  );
}

export default GoogleReviewsWidget;