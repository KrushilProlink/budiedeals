import React, { useState } from "react";
import { Box, Typography, IconButton, Card, CardMedia, CardContent, Link, CardHeader } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 7; // Number of items to display at once

  // Function to handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'right' && currentIndex + itemsPerPage < products.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    } else if (direction === 'left' && currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  // Calculate the visible products
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
  const hasNext = currentIndex + itemsPerPage < products.length;
  const hasPrev = currentIndex > 0;

  return (
    <Card sx={{ mb: 2, p: 2, mx: 1 }}>
      {/* Section Header with "See All" */}
      <CardHeader
        title={<Typography variant="h5" sx={{ fontWeight: 'bold' }}>{title}</Typography>}
        action={
          <Link href="#" underline="hover" sx={{ fontSize: '14px', color: '#007185', alignSelf: 'center' }}>
            See All
          </Link>
        }
        sx={{ p: 0, mb: 2 }}
      />

      <Box sx={{ position: 'relative' }}>
        {/* Scrollable Product Grid */}
        <Box
          sx={{
            display: 'flex',
            overflowX: 'hidden',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${(currentIndex / itemsPerPage) * (100 / 7)}%)`,
          }}
        >
          {visibleProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: { xs: '80%', sm: '45%', md: '30%', lg: '14%' }, // Responsive widths
                margin: '0 5px', // Add margin for spacing between cards
                paddingLeft: '5px', // Left padding
                paddingRight: '5px', // Right padding
                border: '1px solid lightgrey',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: 'none', // Remove default shadow
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', padding: '10px' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="body1" sx={{ fontSize: '10px' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  From {product.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Navigation Arrows */}
        {products.length > itemsPerPage && (
          <>
            <IconButton
              onClick={() => handleScroll('left')}
              disabled={!hasPrev} // Disable if at the start
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
              }}
            >
              <ArrowBack />
            </IconButton>

            <IconButton
              onClick={() => handleScroll('right')}
              disabled={!hasNext} // Disable if at the end
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
              }}
            >
              <ArrowForward />
            </IconButton>
          </>
        )}
      </Box>
    </Card>
  );
};

export default ProductSection;
