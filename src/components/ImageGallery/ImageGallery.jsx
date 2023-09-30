import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => (
  <Gallery>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        onImageClick={onImageClick}
      />
    ))}
  </Gallery>
);

export default ImageGallery;
