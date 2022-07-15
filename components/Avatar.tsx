import React from "react";

interface Props {
  url: string;
  className: string;
}

function Avatar({ url, className }: Props): JSX.Element {
  return (
    <img
      className= {` h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      alt="profil pic"
    />
  );
}

export default Avatar;
