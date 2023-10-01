import React, { Component } from 'react';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.classList.add('modal-opened');
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.classList.remove('modal-opened');
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <ModalImage src={this.props.largeImageURL} alt="" />
        </ModalContainer>
      </Overlay>
    );
  }
}
