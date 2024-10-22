import React from 'react'; 
import { Box, Modal, Typography, IconButton, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './OTPModal.css'; // Import the CSS file for styles

interface OTPModalProps {
  open: boolean;
  onClose: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="otp-modal-title">
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
          <Typography id="otp-modal-title" variant="h6"></Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          {/* Image in the center */}
          <img src="/path/to/your/image.png" alt="OTP Image" className="otp-image" />
          
          {/* Center aligned text */}
          <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
            Enter OTP
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 }}>
            Please enter the verification code we've sent you on your mobile number.
          </Typography>

          {/* Center aligned text */}
          <Typography variant="body1" sx={{ mt: 1, color: "grey" }}>
            Enter OTP
          </Typography>
          
          {/* OTP Input Fields */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {[...Array(6)].map((_, index) => (
              <TextField
                key={index}
                variant="outlined"
                inputProps={{ maxLength: 1 }} // Limit to one character
                className="otp-input"
                sx={{ flex: 1, mx: 0.5 }} // Adjusts the margin between the text fields
              />
            ))}
          </Box>

          {/* Resend OTP Button in the Bottom Right */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="contained" sx={{ bgcolor: 'yellow', color: "#000", fontSize: '0.6rem', px: 1.5 }}>
              Resend OTP
            </Button>
          </Box>

          {/* Verify Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" sx={{ bgcolor: 'yellow', flex: 1, mx: 0.5, color: "#000" }}>
              Verify
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default OTPModal;
