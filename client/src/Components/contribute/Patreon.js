import React, { useState } from "react";
import "./Patreon.css";

const Patreon = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    // Create a new element
    const el = document.createElement("textarea");
    // Set the value to the text you want to copy
    el.value = text;
    // Make the element temporarily visible
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    // Select the text
    el.select();
    // Copy the text
    document.execCommand("copy");
    // Remove the element
    document.body.removeChild(el);
    setCopied(true);
  };

  return (
    <div className="patreon-container">
      <h5>Help bring Afterlands to life</h5>
      <button onClick={() => copyToClipboard("https://www.andromasoft.net")}>
        {copied ? "Copied to clipboard" : "Share"}
      </button>

      <p>
        Every contribution counts, free alpha access with a donation of $20 or
        more
      </p>
      <a href="https://www.patreon.com/yourpage">Patreon</a>
    </div>
  );
};

export default Patreon;
