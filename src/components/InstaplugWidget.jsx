import { useEffect } from "react";

const InstaplugWidget = () => {
  useEffect(() => {
    // Avoid loading twice
    if (window.instaplugLoaded) return;

    const script = document.createElement("script");
    script.src = "https://app.instaplug.app/platform/instaplug.js";
    script.async = true;

    script.onload = () => {
      window.instaplugLoaded = true;

      if (window.renderApp) {
        window.renderApp({
          containerId: "fed5b504-7987-4da6-9641-8154cdd2857a",
          domain: "https://app.instaplug.app/",
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
};

export default InstaplugWidget;