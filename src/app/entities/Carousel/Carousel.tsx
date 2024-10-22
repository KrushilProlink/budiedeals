import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const ImageCarousel: React.FC = () => {
    // const [images, setImages] = useState<string[]>([]); // State to hold fetched images
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Fetch images from the API
  /* useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data); // Assuming the API returns an array of image URLs
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []); */

  // Sample images
  const images = [
    'https://f.nooncdn.com/mpcms/EN0001/assets/2fe1abc5-3e4a-407b-9000-44bedc595178.png?format=avif',
    'https://f.nooncdn.com/mpcms/EN0001/assets/bfe8814c-26a2-4ecc-875b-c9e347555594.png?format=avif',
    'https://f.nooncdn.com/mpcms/EN0001/assets/502790cf-5b46-442d-bac7-1d5ef7735547.png?format=avif',
    'https://f.nooncdn.com/mpcms/EN0001/assets/afb626c8-b7a0-4c96-a924-e0aa7247aa3a.png?format=avif',
  ];

  // Show a loading indicator or message while fetching images
  /* if (loading) {
    return (
      <Box sx={{ textAlign: 'center', padding: 2 }}>
        <p>Loading images...</p>
      </Box>
    );
  } */

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', height: "35vh" }}>
      <Slider {...settings}>
        {images?.map((src, index) => (
          <Box key={index} sx={{ width: '100%' }}>
            <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
