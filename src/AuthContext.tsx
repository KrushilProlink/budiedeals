import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    useMemo,
  } from "react";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import { USER_ROLE } from "./app/config/constants";
  
  interface AuthContextProps {
    children: ReactNode;
  }
  
  interface AuthContextType {
    isAuthenticated: boolean;
    login: (
      username: string,
      password: string,
      userType: string,
      redirectUrl?: string
    ) => Promise<void>;
    logout: () => void;
    setIsAuthenticated?: any;
    setLoggedUserData?: any;
    user?: any;
    profileData?: any;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch<AppDispatch>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const [profileData, setProfileData] = useState<any>();
  
    const urlCheck = [
      "/signIn",
      "/forgotPassword",
      "/changePassword",
      "/verifyOTP",
      "/successChangePassword",
      "/app/",
    ];
  
    const loginHandler = async (
      username: string,
      password: string,
      userType: string,
      redirectUrl?: string
    ) => {
      try {
       
      } catch (error) {
        // Handle authentication error
        console.error("Authentication failed", error);
      }
    };
  
    const logoutHandler = () => {
      // Store the current URL in localStorage before logging out
      localStorage.setItem("logoutRedirectUrl", window.location.pathname);

    };
  
    // Memoize the context value using useMemo
    const contextValue = useMemo(
      () => ({
        isAuthenticated,
        setIsAuthenticated,
        user,
        profileData,
        setLoggedUserData: setUser,
        login: loginHandler,
        logout: logoutHandler,
      }),
      [isAuthenticated, user, profileData]
    );
  
    return (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  