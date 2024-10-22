import React, { useState } from "react"; 
import { Box, Typography, Divider, Popover, List, ListItem, ListItemText } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledNavbar = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFFFFF", // White background for navbar
  overflow: "hidden", // Prevent overflow
  marginTop: "10px",
  marginBottom: "10px",
  width: "100%", // Full width of the page
  justifyContent: "space-between", // Ensure even spacing between items
  padding: "0 20px" // Add padding to the sides
}));

const MenuItem = styled(Typography)(({ theme }) => ({
  flexShrink: 0, // Prevent flex items from shrinking
}));

const categories = [
  "MOBILE STORE",
  "ELECTRONICS",
  "MEN FASHION",
  "WOMEN FASHION",
  "BEAUTY CARE",
  "HOME NEEDS",
  "BABY CARE",
  "SPORTS HUB",
  "HEALTH & NUTRITION",
  "TOYS",
  "OPEN BOX",
];

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  // Handle click on All Categories
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing of the popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Determine if the popover is open
  const open = Boolean(anchorEl);
  const id = open ? "categories-popover" : undefined;

  return (
    <>
      <StyledNavbar>
        {/* First menu with dropdown */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleClick}>
          <Typography variant="body2" fontWeight="bold">
            All Categories
          </Typography>
          <ExpandMore />
        </Box>

        {/* Grey line */}
        <Divider orientation="vertical" flexItem sx={{ height: 30, mx: 2, backgroundColor: "gray" }} />

        {/* Menu items */}
        {categories.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem variant="body2">{item}</MenuItem>
          </React.Fragment>
        ))}
      </StyledNavbar>

      {/* Popover for All Categories */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <List sx={{ width: 250, padding: 1 }}>
          {categories.map((category, index) => (
            <ListItem button key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default Navbar;
