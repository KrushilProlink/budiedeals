import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton, Modal, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FlagIcon from '@mui/icons-material/Flag'; // Replace this with the Indian flag if you have one
import OTPModal from "../OTP/OTPModal";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [isPhoneMode, setIsPhoneMode] = useState(true); // State to toggle between phone and email
  const [inputValue, setInputValue] = useState(''); // State for input value (phone/email)
  const [showOtpModal, setShowOtpModal] = useState(false); // State to control OTP modal visibility

  const handleContinue = () => {
    if (inputValue) {
      setShowOtpModal(true); // Show OTP modal if input is provided
    } else {
      alert("Please enter a valid " + (isPhoneMode ? "phone number" : "email"));
    }
  };

  const handleUseEmailInstead = () => {
    setIsPhoneMode(!isPhoneMode); // Toggle between phone and email input
    setInputValue(''); // Clear the input field
  };

  return (
    <>
      <Modal open={open} onClose={onClose} aria-labelledby="login-modal-title">
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 320, 
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 2,
          borderRadius: 2,
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography id="login-modal-title" variant="h6"></Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
{/* Product Images */}
<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {[1, 2, 3, 4].map((product) => (
              <img
                key={product}
                src={`https://via.placeholder.com/50x50`} // Replace with actual product images
                alt={`Product ${product}`}
                style={{ width: 50, height: 50, marginRight: 8 }}
              />
            ))}
          </Box>
          {/* Namaste Icon and Let's Get Started */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            {/* Replace FlagIcon with Namaste Icon */}
            
            <Typography variant="h6">Namasthe!  <EmojiPeopleIcon sx={{ color: '#1976d2', fontSize: 20 }} /> Let’s Get Started</Typography>
          </Box>

          {/* Instruction Text */}
          <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
            Please enter the {isPhoneMode ? "phone number" : "email"}
          </Typography>

          

          {/* Input Field for Phone or Email */}
          <TextField
            variant="outlined"
            fullWidth
            placeholder={isPhoneMode ? "Phone Number" : "Email"}
            InputProps={{
              startAdornment: isPhoneMode && (
                <InputAdornment position="start">
                  <FlagIcon sx={{ fontSize: 24 }} /> {/* Indian flag on the left */}
                </InputAdornment>
              ),
            }}
            sx={{ mt: 3 }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input state
          />

          {/* Use Email Instead */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer' }}
              onClick={handleUseEmailInstead}
            >
              {isPhoneMode ? "Use Email Instead" : "Use Phone Instead"}
            </Typography>
          </Box>

          {/* Continue Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#FEEE00', mt: 2, color: "#000" }} // Grey background for the button
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      </Modal>

      {/* OTP Modal */}
      <OTPModal open={showOtpModal} onClose={() => setShowOtpModal(false)} />
    </>
  );
};

export default LoginModal;
