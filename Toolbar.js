// src/app/components/Toolbar.js
import React from "react";
import AlertButton from "./AlertButton"; 

const Toolbar = () => {
  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Uploading!", children: "Upload File" },
    { message: "Deleting!", children: "Delete File" },
  ];

  return (
    <div>
      <div>
        {buttons.map((button, index) => (
          <AlertButton 
            key={index} 
            message={button.message}>
            {button.children}
          </AlertButton>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;

// Add your code here