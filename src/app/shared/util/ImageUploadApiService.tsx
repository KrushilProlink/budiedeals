import axios, { AxiosRequestConfig } from "axios";
import { PRODUCTS } from "app/config/API.constants";

export const uploadImageToS3 = async (
  formData: FormData,
  config?: { onUploadProgress?: any }
) => {
  const uploadImageAPI = PRODUCTS.IMG_UPLOAD;

  const axiosConfig: AxiosRequestConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("accessToken")
        ? "Bearer " + localStorage.getItem("accessToken")
        : "",
    },
    onUploadProgress: config?.onUploadProgress,
  };

  const response = await axios.post(uploadImageAPI, formData, axiosConfig);

  return response?.data;
};
