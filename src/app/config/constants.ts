
export {
 
};

const config = {
  VERSION: process.env.VERSION,
};

export default config;
export const APP_ENV = process.env.REACT_APP_APP_ENV ?? "development";
export const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
export const CDN_URL = process.env.REACT_APP_CDN_URL;
export const ORIGINAL_MEDIA_BUCKET_URL =
  process.env.REACT_APP_ORIGINAL_MEDIA_BUCKET_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const IMAGE_BASE_PATH_BUCKET_URL =
  process.env.REACT_APP_COMMON_ASSETS_URL ??
  "https://casapadel-common.s3.eu-west-1.amazonaws.com/";
export const PLACE_ID = "";
export const STATUS_UPDATE_IMAGE =
  "https://s3-alpha-sig.figma.com/img/985c/2c20/359643988c88078740c49da0a7608395?Expires=1701043200&Signature=nhqGXQASMgdpMqV4D66IUj5usW0H6p3a1I4EHNeJxGoy57igFDuS7G3zLCTF4x8fhUbNhv5EsLaGiNIjU8QusKzsnt~pVa742MgbMT1FwA6ow0M0Ot6oSo89XiKdAbUKqMLExs2QT3Mx4PlfSkm7tv7e-D6i17tTjo5N9b2FYS53-F3Itul58G6iyuYKuEd3z7rMbSOyk0Jg4aRCY7JSKpvD8NPf-BJkdq0dI4YiHrfRoxyyEIhQ0WIxq65UQW-vQDxTjDYCIV4khk585DDdAkkKDFBMaDAc4d8BWdOevaBic5DaCHxHmPn-YI1bBgic2c1Qsk58WEBh9B8wgJh-0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
export const USER_MANAGEMENT_URL = `${SERVER_API_URL}/users`;
export const DASHBOARD_URL = `${SERVER_API_URL}/dashboard`;

export const TIMEOUT = 1 * 60 * 1000;

export const DEFAULT_PAGESIZE = 10;

export const VALIDATION = {
  ALPHABETS_SPACE: /^[a-zA-Z ]*$/,
};

export const USER_ROLE = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

export const AUTHORITIES = {
  CLUB_ADMIN: "CLUB_ADMIN",
};
export const messages = {
  DATA_ERROR_ALERT: "Internal Error",
};
export const APP_AUTH_TOKEN_KEY = "AUTH_TOKEN";
export const APP_DATE_FORMAT = "DD/MM/YY HH:mm";
export const APP_TIMESTAMP_FORMAT = "DD/MM/YY HH:mm:ss";
export const APP_LOCAL_DATE_FORMAT = "DD/MM/YYYY";
export const APP_LOCAL_DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const APP_LOCAL_DATETIME_FORMAT_CUSTOM = "YYYY-MM-DD HH:mm";
export const APP_LOCAL_DATETIME_MS_FORMAT = "YYYY-MM-DD HH:mm:ss.SSS";
export const APP_LOCAL_DATETIME_FORMAT_Z = "YYYY-MM-DDTHH:mm Z";
export const APP_WHOLE_NUMBER_FORMAT = "0,0";
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = "0,0.[00]";
export const LOGIN_PAGE_TITLE = "Login";
export const FORGOT_PASSWORD_PAGE_TITLE = "Forgot Password";
export const CHANGE_PASSWORD_PAGE_TITLE = "Change Password";
export const NEW_PASSWORD_PAGE_TITLE = "New Password";
export const VERIFY_OTP_PAGE_TITLE = "Verify OTP";
export const SUCCESS_PASSWORD_CHANGE_PAGE_TITLE = "Success Password Change";
export const LOGIN_PAGE_SUB_TITLE =
  "Please log in and let's pick up where you left off";
export const FORGOT_PASSWORD_PAGE_SUB_TITLE =
  "No problem! Please enter your email to start the recovering process";
export const VERIFY_OTP_PAGE_SUB_TITLE =
  "Please enter your OTP to access create new password";
export const NEW_PASSWORD_PAGE_SUB_TITLE =
  "Please enter your new password to gain access to the portal";
export const SUCCESS_PASSWORD_CHANGE_PAGE_SUB_TITLE =
  "Your new password has been successfully created";
export const FORGOT_PASSWORD = "Forgot Password?";
export const DIDNT_RECEIVED_OTP_TEXT = "Didn't received it?";

export const INTCONSTANTS = {
  INT_MAX: 2147483647,
};

// List of allowed file extensions while uploading
export const ALLOWED_UPLOAD_FILE_EXTENSIONS = [
  ".csv",
  ".out",
  ".txt",
  ".xls",
  ".xlsx",
  ".pdf",
  ".jpg",
  ".png",
];

export const CHAR_LIMIT = {
  LIMIT_150: 150,
};

export enum UserType {
  CUSTOMER = "customer",
  ADMIN = "club_admin",
}
export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}
export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHERS = "others",
  ALL = "all",
  MIXED = "mixed",
}

export enum NotificationType {
  SMS = "sms",
  EMAIL = "email",
  PUSH = "push",
}

export enum APIStatus {
  SUCCESS = "success",
  ERROR = "error",
  OK = "ok",
}

export enum TIMEFRAME {
  DAILY = "daily",
  WEEKLY = "weekly",
  CUSTOM = "custom",
}

export enum LocationType {
  POINT = "Point",
}

export enum PaymentType {
  CREDIT = "credit",
  DEBIT = "debit",
}

export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  TIME_OUT = "time-out",
  FAILED = "failed",
  REJECTED = "rejected",
}

export enum ProductPurchaseStatus {
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  FAILED = "failed",
}

export enum BookingPaymentType {
  CARD = "card",
  CASH = "cash"
}

export enum Type {
  PUBLIC = "public",
  PRIVATE = "private",
}

export const Slots = {
  SLOTS: [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ],
};

export const dayNames = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export enum ActionTypes {
  CREATE = "create",
  EDIT = "edit",
}

export enum PaidOptions {
  UNPAID = "Unpaid",
  PAID = "Paid",
}

export enum categoryBySex {
  MALE = "male",
  FEMALE = "female",
  OTHERS = "others",
  ALL = "all",
  MIXED = "mixed",
}

export const yesOrNo = [
  { label: "Yes", value: "1" },
  { label: "No", value: "0" },
];

export const statusList = [
  { label: "Active", id: "active", value: "active" },
  { label: "Inactive", id: "inactive", value: "inactive" },
];

export const stockTypes = [
  { label: "In Stock", id: "1" },
  { label: "Out of Stock", id: "0" },
];

export const vatOptions = [
  { label: "Yes", id: "1" },
  { label: "No", id: "0" },
];

export const paymentTypes = [
  { label: "Cash", id: "cash" },
  { label: "Subscription", id: "1" },
];

/**
 * Handle time format to display in HH:MM Am|PM
 * @function
 * @returns options
 */
export const options: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  hour12: true, // Use 12-hour clock format
};

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const twitterBaseURL = "https://twitter.com/intent/tweet?url=";
export const instagramBaseURL = "https://www.instagram.com/?url=";

export const productCancellationHours = [4, 8, 12, 16, 72];

export const endUsers = "End Users";
export const adminUsers = "Admin Users";
export const product = "Product";
export const users = "Users";
export const apparelList = "Apparel List";
export const userPurchaseList = "User Purchase List";
export const membershipProducts = "Membership Products";
export const userMemberships = "User Memberships";
export const coupons = "Coupons";
export const currency = {
  euro: "€",
};
