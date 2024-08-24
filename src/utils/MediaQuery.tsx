import React, { useState, useEffect } from "react"; // Certifique-se de que React está sendo importado

function MediaQuery(maxWidth?: number) {
  const pixel = maxWidth ? maxWidth : "1000";
  const query = `(max-width: ${pixel}px)`;

  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = (event: any) => setMatches(event.matches);

    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default MediaQuery;
