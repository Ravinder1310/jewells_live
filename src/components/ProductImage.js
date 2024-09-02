import React, { useState, useEffect } from 'react';
import "./images.css";

const ProductImages = ({ product }) => {
  const baseURL = process.env.REACT_APP_API;

  const images = [
    { name: `${baseURL}/${product.photo1}`, vw: '355w' },
    { name: `${baseURL}/${product.photo2}`, vw: '481w' },
    { name: `${baseURL}/${product.photo3}`, vw: '584w' }
  ];

  // Default to the first image in the list
  const [selectedImage, setSelectedImage] = useState(images[0].name);

  // Update selected image if product changes
  useEffect(() => {
    setSelectedImage(images[0].name);
  }, [product]);

  const handleImageClick = (image) => {
    setSelectedImage(image.name);
  };

  return (
    <div className="product-images">
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === image.name ? 'active' : ''}`}
            onMouseEnter={() => handleImageClick(image)}
          >
            <img src={image.name} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <div className="main-image">
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default ProductImages;
