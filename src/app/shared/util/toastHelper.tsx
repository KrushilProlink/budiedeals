// toastHelper.ts
import { toast, ToastOptions } from 'react-toastify';

export const showToast = (message: string, toastType?: string, options?: ToastOptions, ) => {
    toastType === "Success" ? 
    toast.success(message, {
        style: {
          backgroundColor: '#4CAF50', // Green background color for success
          color: 'white', // Text color for better visibility
          ...options?.style, // Allow additional custom styles
        },
        ...options,
      }) : toast.error(message, {
        style: {
          backgroundColor: 'red', // Green background color for success
          color: 'white', // Text color for better visibility
          ...options?.style, // Allow additional custom styles
        },
        ...options,
      });
};
