import { SERVER_API_URL as ENV_SERVER_API_URL } from "./constants";

//  Method constants
export const POST = "POST";
export const PUT = "PUT";
export const PATCH = "PATCH";
export const GET = "GET";
export const DELETE = "DELETE";

// Entity constants

export const LOGIN = {
    ADMIN_USER_LOGIN: `/admin/login`,
    REGISTER_ADMIN: `/admin`,
    ADMIN_USER_PASSWORD_CHANGE: `/admin/change-password`,
    ADMIN_FORGOT_PASSWORD: `/admin/forgot-password`,
    VERIFY_OTP: `/admin/verify-otp`
  };

  export const PRODUCTS = {
    IMG_UPLOAD: `${ENV_SERVER_API_URL}/upload/s3`,
  };