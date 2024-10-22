/*  eslint-disable @typescript-eslint/no-misused-promises */
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  // TIMEOUT,
  API_KEY,
  SERVER_API_URL as ENV_SERVER_API_URL,
} from "./constants";
// import { logout } from "../shared/components/authentication";
import { showToast } from "../shared/util/toastHelper";

export const HTTP_CALL = async (
  endPoint?: any,
  type?: any,
  params?: any,
  body?: any
) => {
  return new Promise(function (resolve, reject) {
    const url = endPoint;
    // Add Your Key Here!!!
    axios.defaults.headers.common = {
      "X-API-Key": API_KEY,
    };
    return axios({
      method: type,
      url: `${ENV_SERVER_API_URL}${url}`,
      headers: {
        Accept: "*/*",
        Authorization: localStorage.getItem("accessToken")
          ? "Bearer " + localStorage.getItem("accessToken")
          : "",
      },
      data: body,
      params,
    })
      .then((response) => {
        if (
          response.status === 200 ||
          response.status === 201 ||
          response.status === 204
        ) {
          return resolve(response);
        }
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          // logout();
        }
        return reject(err.response);
      });
  });
};

export const CUSTOM_ERROR_MSG = (msg: any) => {
  if (msg) {
    showToast(msg, "Error", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const HANDLE_ERROR = (errorRes: {
  data: { errorMessage: any; message: any };
  statusText: any;
}) => {
  if (errorRes) {
    const errMsg =
      errorRes?.data?.errorMessage ||
      errorRes?.data?.message?.[0]?.message ||
      errorRes?.data?.message ||
      errorRes?.statusText ||
      `Something went wrong`;
    showToast(errMsg, "Error", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
