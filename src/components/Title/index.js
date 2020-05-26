import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function Title({ level, children }) {
  const Tag = level > 6 || level < 1 ? "h1" : `h${level}`;

  return <Tag className="Title">{children}</Tag>;
}

Title.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "5", "6"]),
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  level: "1",
};

Title.displayName = "AwesomeTitle";

export default Title;
