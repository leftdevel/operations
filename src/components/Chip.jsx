import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classname";

function Chip({ className, onClick, children }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ height: 0 });

  useEffect(() => {
    const height = ref.current ? `${ref.current.offsetWidth}px` : 0;
    setStyle({ height });
  }, []);

  const Element = onClick ? "a" : "div";

  return (
    <Element ref={ref} style={style} className={cx("chip", className)} onClick={onClick} onKeyUp={onClick}>
      <div className="content bg-light border">
        <h1>{children}</h1>
      </div>
    </Element>
  );
}

Chip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Chip.defaultProps = {
  children: "",
  className: "",
  onClick: null,
};

export default Chip;
