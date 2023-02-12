import React from "react";

function ImgCol({ imgSrc }) {
  return (
    <div className="[ img-col ]">
      {imgSrc && (
        <img className="content-shadow-left" src={imgSrc} alt="" srcset="" />
      )}
    </div>
  );
}

export default ImgCol;
