import React from "react";
import headerStyle from "./header.css";

export default ({ children }) => (
  <div className={headerStyle.header}>{children}</div>
);
