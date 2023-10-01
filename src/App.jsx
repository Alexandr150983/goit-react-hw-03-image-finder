import React, { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppContainer } from 'App.styled';
import { Button } from 'components/Button/Button';
import { CustomLoader } from 'components/Loader/Loader';
import { getImages } from 'components/servise/ApiService';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImages();
    }
  }

  loadMoreImages = () => {
    const { page, totalHits } = this.state;

    if (page * 12 < totalHits) {
      this.setState(
        prevState => ({
          isLoading: true,
          page: prevState.page + 1,
        }),
        () => {
          this.fetchImages();
        }
      );
    }
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    getImages(query, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          isLoading: false,
          totalHits: response.data.totalHits,
        }));
      })
      .catch(error => this.setState({ error, isLoading: false }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearch = query => {
    this.setState({ query, page: 1, images: [], totalHits: 0 });
  };

  scrollToLoad = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, isLoading, error, totalHits } = this.state;

    return (
      <AppContainer>
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={images} />
        {!isLoading && images.length > 0 && images.length < totalHits && (
          <Button onClick={this.loadMoreImages} />
        )}
        {isLoading ? <CustomLoader /> : null}
        {error && <p>Error: {error.message}</p>}
      </AppContainer>
    );
  }
}
