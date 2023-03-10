import React from "react";

function Button({ btnLink, btnText, wrapperClass }) {
  return (
    <div className={wrapperClass}>
      <a
        className="btn-shadow inline-flex rounded-full bg-accent-400 px-4 py-2 font-bold capitalize text-white duration-200 hover:-translate-y-0.5 hover:scale-105"
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
