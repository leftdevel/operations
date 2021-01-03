import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useRecoilState } from "recoil";
import ChipHeightAtom from "../state/ChipHeightAtom";

function Chip({ className, onClick, children }) {
  const ref = useRef(null);
  const [chipHeight, setChipHeight] = useRecoilState(ChipHeightAtom);

  useEffect(() => {
    const height = ref.current ? `${ref.current.offsetWidth}px` : 0;
    setChipHeight(height);
  }, [chipHeight, setChipHeight]);

  const Element = onClick ? "a" : "div";

  return (
    <Element ref={ref} style={{ height: chipHeight }} className="chip" onClick={onClick} onKeyUp={onClick}>
      <div className={cx("content bg-light border", className)}>
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
