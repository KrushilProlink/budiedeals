import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

const LanguageSwitcher: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body2">English</Typography>
      <IconButton color="inherit" size="small">
        <TranslateIcon />
      </IconButton>
    </Box>
  );
};

export default LanguageSwitcher;
