import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

function Chip({ children }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ height: 0 });

  useEffect(() => {
    const height = ref.current ? `${ref.current.offsetWidth}px` : 0;
    setStyle({ height });
  }, []);

  return (
    <div ref={ref} style={style} className="chip">
      <div className="content bg-light border">
        <h1>{children}</h1>
      </div>
    </div>
  );
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Chip;
