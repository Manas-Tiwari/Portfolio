import React from "react";
import "./tags.styles.css";

const Tag = ({ text }) => {
  return (
    <span className="border-2 border-[#6F6F6F] max-w-fit border-solid m-1 tag-border p-1">
      <span className="font-normal tracking-normal">{text}</span>
    </span>
  );
};

export default Tag;
