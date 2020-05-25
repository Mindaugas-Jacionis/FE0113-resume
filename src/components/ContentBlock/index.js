import React from "react";
import classnames from "classnames";
import "./index.css";

import Title from "../Title";
import Separator from "../Separator";

function ContentBlock({ children, title, className, isLight }) {
  const classes = classnames("ContentBlock", className);

  return (
    <div className={classes}>
      <Title level="3">{title}</Title>
      <Separator className="my-4" />
      {children}
    </div>
  );
}

export default ContentBlock;
