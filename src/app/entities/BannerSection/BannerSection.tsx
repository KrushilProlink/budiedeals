import React from 'react';
import { Box } from '@mui/material';

interface BannerSectionProps {
  imageUrl: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({ imageUrl }) => {
  return (
    <Box >
      <img src={imageUrl} alt="Banner" style={{ width: '100%', height: 'auto' }} />
    </Box>
  );
};

export default BannerSection;
