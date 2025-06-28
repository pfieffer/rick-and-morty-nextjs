import React, { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt }) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div>
      {!isError ? (
        <img src={src} alt={alt} onError={handleError} />
      ) : (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }}>
          Image not available
        </div>
      )}
    </div>
  );
};

export default ImageLoader;