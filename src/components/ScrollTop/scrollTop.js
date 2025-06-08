// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrollt auf den Seitenanfang, wenn sich der Pfad ändert
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
