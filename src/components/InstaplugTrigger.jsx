import { useEffect, useRef, useState } from "react";
import InstaplugWidget from "./InstaplugWidget";

const InstaplugTrigger = () => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect(); // load only once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* THIS is where Instagram feed will render */}
      <div id="fed5b504-7987-4da6-9641-8154cdd2857a"></div>

      {load && <InstaplugWidget />}
    </div>
  );
};

export default InstaplugTrigger;