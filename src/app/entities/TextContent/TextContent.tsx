import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import textContentData from '../../shared/data/textContent.json'; // Import the JSON file

// Define the type for your content state
type ContentItem = {
    heading: string;
    content: string;
  };
  
  const TextContent = () => {
    // Explicitly type the state as an array of ContentItem
    const [content, setContent] = useState<ContentItem[]>([]);
  
    useEffect(() => {
      // Set the content state with the imported JSON data
      setContent(textContentData);
    }, []);
  
    return (
      <Box sx={{ padding: '16px' }}>
        {content?.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '16px' }}>
            <Typography variant="h6" sx={{ color: 'darkgrey', fontWeight: 'bold' }}>
              {item?.heading}
            </Typography>
            {item?.content && (
              <Typography variant="body1" sx={{ color: 'lightgrey' }}>
                {item?.content}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  };
  
  export default TextContent;
