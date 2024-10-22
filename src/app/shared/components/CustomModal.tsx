import React from 'react'; 
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  return (
    <Modal 
      open={open} 
      onClose={onClose} 
      aria-labelledby="modal-title" 
      aria-describedby="modal-description"
    >
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 320, // Same width as LoginModal
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 2, // Consistent padding
        borderRadius: 2,
        zIndex: 1300 // Set a high z-index
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography id="modal-title" variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ mt: 1 }}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
