import React, { Component } from 'react';
import axios from 'axios';
import '../css/tailwind.css';

//components
import Form from './Form';
import Image from './Image';
import Footer from './Footer';

class App extends Component {
  state = {
    term: '',
    images: [],
    status: ''
  };

  componentDidMount() {
    this.fetchImages('Coding');
  }

  fetchImages = async term => {
    this.setState({
      term: term,
      images: [],
      status: 'searching'
    });

    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id:
              'f38d0f1aa104ff3a7ea72fa9a90f0beccff30c1ab3621f28ff13ad5e722caf28',
            query: term
          }
        }
      );
      this.setState({
        status: 'done',
        images: response.data.results
      });
    } catch (error) {
      this.setState({
        status: 'error'
      });
    }
  };

  render() {
    return (
      <div>
        <div className='container mx-auto pt-6 px-4 sm:px-0'>
          <h1 className='text-4xl sm:text-5xl pb-6'>
            Search Images on Unsplash
          </h1>
          <Form fetchImages={this.fetchImages} />
          {this.state.status === 'searching' && (
            <h3 className='text-green-800 text-xl pt-6'>
              Searching for {this.state.term}
            </h3>
          )}
          <p className='pt-6 text-red-800 text-2xl'>
            {' '}
            {this.state.status === 'done' && this.state.images.length === 0 && (
              <h3>
                Sorry, no results {''}{' '}
                <span role='img' aria-label='cry'>
                  😢
                </span>
              </h3>
            )}
          </p>
          <div className='flex flex-wrap'>
            {this.state.images.map(image => (
              <div className='w-1/3 px-4'>
                <Image image={image} key={image.id} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
