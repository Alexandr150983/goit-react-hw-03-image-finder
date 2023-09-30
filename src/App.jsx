import React, { Component } from 'react';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import AppContainer from 'App.styled';
import Button from 'components/Button/Button';
import CustomLoader from 'components/Loader/Loader';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  loadMoreImages = () => {
    this.setState({ isLoading: true }, () => {
      this.fetchImages();
    });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const apiKey = '38906051-b75951c25e9106fdf3cf1ae5b';
    const perPage = 12;

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearch = query => {
    this.setState({ query, page: 1, images: [] }, this.fetchImages);
  };
  handleImageClick = largeImageURL => {
    console.log('Image clicked:', largeImageURL);
  };
  scrollToLoad = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleLoadMore = () => {
    this.fetchImages();
    this.scrollToLoad();
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <AppContainer>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.loadMoreImages} />}
        {isLoading && <CustomLoader />}
        {error && <p>Error: {error.message}</p>}
      </AppContainer>
    );
  }
}

export default App;
