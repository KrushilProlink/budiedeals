import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { byteConverter } from "app/shared/util/byteConverter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { showToast } from "app/shared/util/toastHelper";
import { ActionTypes } from "app/config/constants";
import { uploadImageToS3 } from "app/shared/util/ImageUploadApiService";

interface ProductImagesProps {
  productImagesData?: any;
  setProductImagesData?: React.Dispatch<React.SetStateAction<any>>;
  action?: string;
  formData?: any;
  handleChange?: any;
  hasValues?: boolean;
  setHasValues?: any;
  imgData?: any;
  setImgData?: any;
  submitCount?: any;
  setFieldValue?: any;
  errors?: any;
  images?: any;
  accept?: any;
  name?: any;
  id?: any;
  multiple?: boolean;
}

export const FileUploadField: React.FC<ProductImagesProps> = ({
  productImagesData,
  setProductImagesData,
  action,
  images,
  accept,
  name,
  id,
  multiple,
  setFieldValue,
}) => {
  const { t } = useTranslation();

  const displayFileName = (element: any) => {
    return element
      ?.split("/")
      ?.pop()
      ?.substring(element?.split("/")?.pop()?.indexOf("_") + 1)
      ?.replace(/%20/g, "_")
      ?.replace(/%28/g, "_")
      ?.replace(/%286/g, "_")
      ?.replace(/%29/g, "_")
      ?.replace(/[^\w\d.]+/g, "_") // Replace spaces and special characters (except dot) with underscores
      ?.replace(/_+/g, "_") // Replace consecutive underscores with a single underscore
      ?.replace(/^_+|_+$/g, "");
  };
  const [draggedFile, setDraggedFile] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const [imagePreviews, setImagePreviews] = useState<
    {
      index: number;
      imageUrl: string;
      originalName: string;
    }[]
  >(
    productImagesData?.attachments?.map((ele: any, index: number) => ({
      index,
      imageUrl: ele || "",
      originalName: displayFileName(ele),
    })) || []
  );

  useEffect(() => {
    if (action === ActionTypes?.CREATE) {
      if (productImagesData?.attachments?.length === 0) {
        setImagePreviews(
          productImagesData?.attachments?.map((_: any, index: number) => ({
            index,
            imageUrl: "",
            originalName: "",
          }))
        );
      } else {
        setImagePreviews(
          productImagesData?.attachments?.map((ele: any, index: number) => ({
            index,
            imageUrl: ele || "",
            originalName: displayFileName(ele),
          }))
        );
      }
    }

    // Cleanup function
    return () => {
      setImagePreviews([]);
    };
  }, []);

  // useEffect(() => {
  //   if (action === ActionTypes?.EDIT) {
  //     setImagePreviews(
  //       productImagesData?.attachments?.map((ele: any, index: number) => ({
  //         index,
  //         imageUrl: ele || "",
  //         originalName: displayFileName(ele),
  //       }))
  //     );
  //   }
  // }, [action, imagePreviews?.length, productImagesData?.attachments]);

  const uploadImages = async (selectedFiles: any) => {
    try {
      const formData = new FormData();
      selectedFiles.forEach((file: any) => formData.append("files", file));

      const uploadImageAPIResponse = await uploadImageToS3(formData);
      return uploadImageAPIResponse;
    } catch (error) {
      // Handle error
      showToast(t("imageUploadedError"), "Error", {
        position: toast.POSITION.TOP_RIGHT,
      });
      throw error;
    }
  };

  const updateAttachments = (newAttachments: any) => {
    setFieldValue(
      `${name}`,
      Array.isArray(images) ? [...images, ...newAttachments] : newAttachments
    );
  };

  const showToastMessage = (message: any, type: any) => {
    showToast(message, type, { position: toast.POSITION.TOP_RIGHT });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.addEventListener(
      "dragover",
      function (e) {
        e = e;
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      "drop",
      function (e) {
        e = e;
        e.preventDefault();
      },
      false
    );
    setIsDragActive(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.addEventListener(
      "dragover",
      function (e) {
        e = e;
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      "drop",
      function (e) {
        e = e;
        e.preventDefault();
      },
      false
    );
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.addEventListener(
      "dragover",
      function (e) {
        e = e;
        e.preventDefault();
      },
      false
    );
    setIsDragActive(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);

    if (e.dataTransfer.files.length > 0) {
      const selectedFiles = Array.from(e.dataTransfer.files);
      setDraggedFile(selectedFiles);
      // Filter unwanted file extensions
      const allowedFileExtensions = ["jpg", "jpeg", "png"];
      const validFiles = selectedFiles.filter((file) => {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        return fileExtension && allowedFileExtensions.includes(fileExtension);
      });

      if (validFiles.length !== selectedFiles.length) {
        // Display error message for invalid file extensions
        showToastMessage(
          "Invalid file format. Please select file format: JPG, JPEG or PNG.",
          "Error"
        );
        return;
      }

      try {
        const response = await uploadImages(selectedFiles);

        if (response.statusCode === 200) {
          const responseData = response?.data;
          const newAttachments = Array.isArray(responseData)
            ? responseData?.map((ele: any) => ele?.Location?.Location)
            : [];
          updateAttachments(newAttachments);
          showToastMessage(t("imageUploadedSuccessfully"), "Success");
        } else {
          showToastMessage(t("imageUploadedError"), "Error");
        }
      } catch (error) {
        showToastMessage(t("imageUploadedError"), "Error");
      }
    }
  };

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      // Filter unwanted file extensions
      const allowedFileExtensions = ["jpg", "jpeg", "png"];
      const validFiles = selectedFiles.filter((file) => {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        return fileExtension && allowedFileExtensions.includes(fileExtension);
      });

      if (validFiles.length !== selectedFiles.length) {
        // Display error message for invalid file extensions
        showToastMessage(
          "Invalid file format. Please select file format: JPG, JPEG or PNG.",
          "Error"
        );
        return;
      }

      try {
        const response = await uploadImages(selectedFiles);

        if (response.statusCode === 200) {
          const responseData = response?.data;
          const newAttachments = Array.isArray(responseData)
            ? responseData?.map((ele: any) => ele?.Location?.Location)
            : [];
          updateAttachments(newAttachments);

          showToastMessage(t("imageUploadedSuccessfully"), "Success");
        } else {
          showToastMessage(t("imageUploadedError"), "Error");
        }
      } catch (error) {
        showToastMessage(t("imageUploadedError"), "Error");
      }

      //setImages((prevImages) => [...prevImages, ...selectedFiles]);
      e.target.value = "";
    }
  };

  const handleImageRemove = (index: number) => {
    if (Array.isArray(images)) {
      const updatedImages = images.filter((_, i) => i !== index);
      setFieldValue(name, updatedImages);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id={id}
        accept="image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <label htmlFor={id}>
        <Button
          variant="outlined"
          component="span"
          sx={{
            width: "100%",
            height: "189px",
            border: "1px solid #E0E0E0",
            padding: "51px 117px, 51px, 117px",
            display: "inline-block",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          <CloudUploadIcon style={{ marginTop: "35px", color: "black" }} />
          <Typography
            variant="button"
            display="block"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            {t("clickToUpload")}{" "}
            <span style={{ color: "grey" }}>{t("dragDrop")}</span>
          </Typography>
          <Typography variant="body2" display="block" sx={{ color: "black" }}>
            {t("youCanUpload")}
          </Typography>
        </Button>
      </label>
      <Box display="flex" flexWrap="wrap">
        {images?.map((image: any, index: number) => (
          <Grid
            container
            spacing={2}
            style={{ marginTop: "10px" }}
            key={image[index]}
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <img
                src={image}
                alt={`Uploaded ${index + 1}`}
                style={{ maxWidth: "100%", maxHeight: "180px" }}
              />
            </Grid>
            <Grid item xs={5}>
              {displayFileName(image)}
              {image?.size && (
                <Typography>{byteConverter(image?.size)}</Typography>
              )}
            </Grid>
            <Grid item xs={3}>
              <IconButton
                color="primary"
                onClick={() => handleImageRemove(index)}
                sx={{ float: "right" }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
};
