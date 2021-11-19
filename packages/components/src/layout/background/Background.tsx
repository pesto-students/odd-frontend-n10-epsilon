import { url } from "inspector";
import React from "react";
 const backgroundImage = require("../../assets/background.svg").default;

const style: React.CSSProperties = {
  backgroundImage: `url(${backgroundImage})`,
  height: "90%",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "absolute",
};
const BackgroundLayout = (props: any) => {
  return <div style={style}>{props.children}</div>;
};

export default BackgroundLayout;
