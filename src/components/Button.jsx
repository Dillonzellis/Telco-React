import React from "react";

function Button({ btnLink, btnText }) {
  return (
    <div>
      <a
        className="inline-flex rounded-full bg-accent-400 px-4 py-2 font-bold capitalize"
        href={btnLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {btnText}
      </a>
    </div>
  );
}

export default Button;
