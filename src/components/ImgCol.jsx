import React from "react";

function ImgCol({ imgSrc }) {
  return (
    <div className="[ img-col ]">
      {imgSrc && <img src={imgSrc} alt="" srcset="" />}
    </div>
  );
}

export default ImgCol;
