import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <GalleryItem>
        <Image
          src={webformatURL}
          alt=""
          onClick={() => {
            this.toggleModal();
          }}
        />
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={() => {
              this.toggleModal();
            }}
          />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
