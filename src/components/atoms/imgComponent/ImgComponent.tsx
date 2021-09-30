import { FC } from "react";

interface ImgComponentInterface {
  imgName: string;
  alt: string;
}

const ImgComponent: FC<ImgComponentInterface> = ({ imgName, alt }) => {
  const srcImg = require(`../../../assets/${imgName}`).default;
  return <img src={srcImg} alt={alt}></img>;
};

export default ImgComponent;
