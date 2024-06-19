import React from "react";

function Fix({ text, clas }) {
  return <div className={`text-yellow inline ${clas}`}>{text}</div>;
}

export default Fix;
