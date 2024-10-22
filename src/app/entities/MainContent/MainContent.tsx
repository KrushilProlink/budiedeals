import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header'; // Adjust the import path as necessary
import ImageCarousel from '../Carousel/Carousel'; // Adjust the import path as necessary
import ProductSection from "../ProductSection/ProductSection";
import BannerSection from "../BannerSection/BannerSection";
import TextContent from '../TextContent/TextContent'; 
import Footer from "../Footer/Footer";
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface Banner {
  id: number;
  imageUrl: string;
}

const MainContent: React.FC = () => {
  const [electronicsProducts, setElectronicsProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample fallback product data
  const fallbackElectronicsProducts: Product[] = [
    { id: 1, name: 'Product 1', image: 'https://f.nooncdn.com/p/pnsku/N70105580V/45/_/1725965005/42e61dba-7a45-4c48-93c6-081a26548a2e.jpg?format=avif&width=240', price: '$100' },
    { id: 2, name: 'Product 2', image: 'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240', price: '$200' },
    { id: 3, name: 'Product 3', image: 'https://f.nooncdn.com/p/v1654769861/N53330556A_2.jpg?format=avif&width=240', price: '$100' },
    { id: 4, name: 'Product 4', image: 'https://f.nooncdn.com/p/pnsku/N70089361V/45/_/1723115906/126a2d5f-f8c0-44e9-a9ab-3fc5662cdeb6.jpg?format=avif&width=240', price: '$200' },
    { id: 5, name: 'Product 5', image: 'https://f.nooncdn.com/p/pnsku/N22795303A/45/_/1728551712/894d2ee5-bab6-4d85-8764-c894ab33d75e.jpg?format=avif&width=240', price: '$100' },
    { id: 6, name: 'Product 6', image: 'https://f.nooncdn.com/p/pnsku/N70071628V/45/_/1715328403/4189042f-bd8c-44a6-a4e2-4df6b1eef022.jpg?format=avif&width=240', price: '$200' },
    { id: 7, name: 'Product 7', image: 'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240', price: '$100' },
    { id: 8, name: 'Product 8', image: 'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240', price: '$200' },
    { id: 9, name: 'Product 9', image: 'https://f.nooncdn.com/p/pnsku/N70071628V/45/_/1715328403/4189042f-bd8c-44a6-a4e2-4df6b1eef022.jpg?format=avif&width=240', price: '$100' },
    { id: 10, name: 'Product 10', image: 'https://f.nooncdn.com/p/v1654769861/N53330556A_2.jpg?format=avif&width=240', price: '$200' }
  ];

  const fallbackTrendingProducts: Product[] = [
    { id: 1, name: 'Product 1', image: 'https://f.nooncdn.com/p/pnsku/N70105580V/45/_/1725965005/42e61dba-7a45-4c48-93c6-081a26548a2e.jpg?format=avif&width=240', price: '$100' },
    { id: 2, name: 'Product 2', image: 'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240', price: '$200' },
    { id: 3, name: 'Product 3', image: 'https://f.nooncdn.com/p/v1654769861/N53330556A_2.jpg?format=avif&width=240', price: '$100' },
    { id: 4, name: 'Product 4', image: 'https://f.nooncdn.com/p/pnsku/N70089361V/45/_/1723115906/126a2d5f-f8c0-44e9-a9ab-3fc5662cdeb6.jpg?format=avif&width=240', price: '$200' },
    { id: 5, name: 'Product 5', image: 'https://f.nooncdn.com/p/pnsku/N22795303A/45/_/1728551712/894d2ee5-bab6-4d85-8764-c894ab33d75e.jpg?format=avif&width=240', price: '$100' },
    { id: 6, name: 'Product 6', image: 'https://f.nooncdn.com/p/pnsku/N70071628V/45/_/1715328403/4189042f-bd8c-44a6-a4e2-4df6b1eef022.jpg?format=avif&width=240', price: '$200' },
    { id: 7, name: 'Product 7', image: 'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240', price: '$100' },
    { id: 8, name: 'Product 8', image: 'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240', price: '$200' },
    { id: 9, name: 'Product 9', image: 'https://f.nooncdn.com/p/pnsku/N70071628V/45/_/1715328403/4189042f-bd8c-44a6-a4e2-4df6b1eef022.jpg?format=avif&width=240', price: '$100' },
    { id: 10, name: 'Product 10', image: 'https://f.nooncdn.com/p/v1654769861/N53330556A_2.jpg?format=avif&width=240', price: '$200' }
  ];

  const fallbackBanners: Banner[] = [
    { id: 1, imageUrl: 'https://f.nooncdn.com/mpcms/EN0001/assets/e774506d-194f-49df-8ef6-039a820391a5.png?format=avif' },
    { id: 2, imageUrl: 'https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif' },
    // Add more banners as needed...
  ];

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const electronicsResponse = await axios.get('/api/electronics-products'); // Replace with your actual API
        const trendingResponse = await axios.get('/api/trending-products'); // Replace with your actual API
        const bannerResponse = await axios.get('/api/banners'); // Replace with your actual API

        // Validate response before setting state
        if (Array.isArray(electronicsResponse.data) && electronicsResponse.data.length) {
          setElectronicsProducts(electronicsResponse.data);
        } else {
          setElectronicsProducts(fallbackElectronicsProducts);
        }

        if (Array.isArray(trendingResponse.data) && trendingResponse.data.length) {
          setTrendingProducts(trendingResponse.data);
        } else {
          setTrendingProducts(fallbackTrendingProducts);
        }

        if (Array.isArray(bannerResponse.data) && bannerResponse.data.length) {
          setBanners(bannerResponse.data);
        } else {
          setBanners(fallbackBanners);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        // Set fallback values on error
        setElectronicsProducts(fallbackElectronicsProducts);
        setTrendingProducts(fallbackTrendingProducts);
        setBanners(fallbackBanners);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <Header />
      <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/e774506d-194f-49df-8ef6-039a820391a5.png?format=avif" />
      <ImageCarousel />
      <ProductSection title="Best of Electronics" products={electronicsProducts} />
      <ProductSection title="Trending for the Day" products={trendingProducts} />
      {/*{banners?.map((banner) => (
        <BannerSection key={banner.id} imageUrl={banner.imageUrl} />
      ))} */}
      <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif" />
        <ProductSection title="Laptop Sale" products={electronicsProducts} />
        <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif" />
        <ProductSection title="Top Deals" products={electronicsProducts} />
        <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif" />
        <ProductSection title="Maximize Your Savings" products={electronicsProducts} />
        <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif" />
        <ProductSection title="Top Selling Smartphones" products={electronicsProducts} />
        <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif" />
        <ProductSection title="Best in Beauty" products={electronicsProducts} />
        <BannerSection imageUrl="https://f.nooncdn.com/mpcms/EN0001/assets/c69ac9c1-8eff-481c-8ff8-67dc33804102.png?format=avif" />
        <TextContent />
        <Footer />
      {/* Add more sections and banners as needed */}
    </>
  );
};

export default MainContent;
