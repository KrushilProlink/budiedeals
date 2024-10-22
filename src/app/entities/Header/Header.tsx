import React from "react";
import { Toolbar, Grid, Box, Divider, Typography, InputBase } from "@mui/material";
import LanguageSwitcher from "app/entities/Header/LanguageSwitcher";
import IconsSection from "app/entities/Header/IconSection";
import Navbar from "app/entities/Header/Navbar";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

const StyledAppBar = styled("div")(() => ({
  backgroundColor: "#FEEE00", // Yellow background
  borderBottom: "1px solid #d3d3d3",
  position: "sticky",
  top: 0,
  zIndex: 2
}));

const StyledSearchBar = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff", // White background for search bar
  borderRadius: "4px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
  width: "100%",
}));

const StyledSearchIconWrapper = styled("div")(() => ({
  backgroundColor: "black", // Black background for search icon
  padding: "8px",
  borderRadius: "0 4px 4px 0",
  cursor: "pointer",
}));

const StyledToolBar = styled("div")(() => ({
  paddingLeft: "8px",
  paddingRight: "5px",
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledToolBar>
        <Grid container alignItems="center" spacing={2}>

          {/* Logo and Delivery Info */}
          <Grid item xs={12} sm={3} md={2}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                alt="Buddie Deals Logo"
                src="/path/to/logo.png" // Replace with actual logo path
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
              <Divider
                orientation="vertical" flexItem sx={{ height: 40, mx: 1 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2">Delivery in</Typography>
                <Typography variant="body1" fontWeight="bold">
                  your location
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Search Bar Section */}
          <Grid item xs={12} sm={5} md={6}>
            <Box sx={{ flexGrow: 1 }}>
              <StyledSearchBar>
                <InputBase
                  placeholder="What are you looking?"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ flexGrow: 1 }}
                />
                <StyledSearchIconWrapper>
                  <Search style={{ color: "#fff" }} /> {/* White search icon */}
                </StyledSearchIconWrapper>
              </StyledSearchBar>
            </Box>
          </Grid>
          
          {/* Language Switcher and Icons Section */}
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end", // Align items to the right
                alignItems: "center", // Align them vertically
                flexWrap: "wrap", // Wrap elements in smaller screens
                gap: 1,
              }}
            >
              <LanguageSwitcher />
              <Divider
                orientation="vertical" flexItem sx={{ height: 40, mx: 1 }}
              />
              <IconsSection />
            </Box>
          </Grid>
          {/* Navigation Bar */}
          <Navbar />
        </Grid> 
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default Header;
