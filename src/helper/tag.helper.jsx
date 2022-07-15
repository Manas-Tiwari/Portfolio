import React from 'react';


const Tag = ({ tagName, children, ...props }) =>
  React.createElement(tagName, props, children);

export default Tag;