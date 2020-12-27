import React from "react";
import PropTypes from "prop-types";
import Chip from "./Chip";

function ChipGroup({ options }) {
  return (
    <div className="chipGroup">
      {options.map((option, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Chip key={`${i}_${option}`}>{option}</Chip>
      ))}
    </div>
  );
}

ChipGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChipGroup;
