import React, { useState } from "react";
import { Box, IconButton, Badge, Typography, Divider } from "@mui/material";
import { ShoppingCart, AccountCircle, FavoriteBorder } from "@mui/icons-material";
import LoginModal from "../SignIn/LoginModal";

const IconSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Toggle Modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* Sign In */}
      <IconButton color="inherit" onClick={handleOpen}>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Sign in
        </Typography>
        <AccountCircle />
      </IconButton>

      <Divider orientation="vertical" flexItem sx={{ height: 40, mx: 1 }} />

      {/* Wishlist */}
      <IconButton color="inherit">
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Wishlist
        </Typography>
        <Badge badgeContent={2} color="error">
          <FavoriteBorder />
        </Badge>
      </IconButton>

      <Divider orientation="vertical" flexItem sx={{ height: 40, mx: 1 }} />

      {/* Bag */}
      <IconButton color="inherit">
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          Bag
        </Typography>
        <Badge badgeContent={4} color="error">
          <ShoppingCart />
        </Badge>
      </IconButton>

      {/* Modal for Sign in */}
      <LoginModal open={open} onClose={handleClose} />
    </Box>
  );
};

export default IconSection;
