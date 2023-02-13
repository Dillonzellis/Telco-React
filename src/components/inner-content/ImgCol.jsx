import React from "react";

function ImgCol({ imgSrc, imgAlt, imgSrcSet, imgClass }) {
  return (
    <div className="[ img-col ]">
      {imgSrc && (
        <img
          className={`${imgClass} rounded-sm`}
          src={imgSrc}
          alt=""
          srcset=""
        />
      )}
    </div>
  );
}

export default ImgCol;
