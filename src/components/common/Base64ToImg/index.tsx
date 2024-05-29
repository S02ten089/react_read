import React from 'react';

interface Base64ToImgProps {
  base64String: string;
  alt?: string;
}

const Base64ToImg: React.FC<Base64ToImgProps> = ({ base64String, alt }) => {
  const imageSrc = `data:image/jpeg;base64,${base64String}`;

  return (
    <img src={imageSrc} alt={alt} />
  );
};

export default Base64ToImg;
