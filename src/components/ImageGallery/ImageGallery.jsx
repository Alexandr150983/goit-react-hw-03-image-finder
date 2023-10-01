import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => (
  <Gallery>
    {images.map(image => (
      <ImageGalleryItem
        key={image.webformatURL}
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        onImageClick={onImageClick}
      />
    ))}
  </Gallery>
);
