// src/app/components/AlertButton.js
"use client";

import React from "react";

const AlertButton = ({ message, children }) => {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default AlertButton;
// Add your code here--copy from previous assignment