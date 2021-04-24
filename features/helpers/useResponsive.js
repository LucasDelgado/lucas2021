import { useState, useEffect } from 'react';

const useResponsive = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };   
    media.addEventListener('change',listener);
    return () => media.removeEventListener('change',listener);
  }, [matches, query]);

  return matches;
}

export default useResponsive;