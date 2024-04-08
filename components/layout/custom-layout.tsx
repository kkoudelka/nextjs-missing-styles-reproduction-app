import classes from "./custom-layout.module.css";
import React from "react";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.customLayout}>
      <div className={classes.left}>Left</div>
      <div className={classes.content}>{children}</div>
      <div className={classes.right}>Right</div>
    </div>
  );
};
