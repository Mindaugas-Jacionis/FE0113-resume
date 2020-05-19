import React from "react";
import "./index.css";

import Title from "../Title";
import Separator from "../Separator";

function ContentBlock({ children, title, className }) {
  const classes = `ContentBlock ${className}`;

  return (
    <div className={classes}>
      <Title level="3">{title}</Title>
      <Separator />
      {children}
    </div>
  );
}

export default ContentBlock;
