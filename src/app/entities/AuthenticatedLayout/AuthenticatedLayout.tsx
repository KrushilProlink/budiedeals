import React, { useState } from "react";
import {
  Grid,
  ThemeProvider,
  CssBaseline,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useAuth } from "../../../AuthContext";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

interface LayoutProps {
  children?: React.ReactNode;
  userType?: any;
}

const AuthenticatedLayout: React.FC<LayoutProps> = ({ children, userType }) => {
  const { profileData } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:600px)");

  let notRequiredBottomPadding = window.location.pathname === "/overview";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let showSideBar = (isMobile && isSidebarOpen) || !isMobile;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
      />
      <Grid
        container
        spacing={2}
        sx={{
          height: "calc(100vh - 64px)",
          overflowY: "hidden",
          marginTop: "-1px",
        }}
        className="scroll-hide"
      >
        {/* isMobile=true and isSidebarOpen=true/false sidebar will show/hide,  isMobile=false and isSidebarOpen=true/false sidebar will minimize and maximize the sidebar,  */}
        {showSideBar && (
          <Grid
            item
            xs={12}
            style={{
              position: "fixed",
              height: "calc(100vh - 64px)",
              top: "64px",
              overflowY: "auto",
            }}
          >
            <Sidebar
              userType={userType}
              isSidebarOpenOrMinimize={isSidebarOpen}
            />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          style={{
            marginLeft: isMobile
              ? isSidebarOpen
                ? "290px"
                : "20px"
              : isSidebarOpen
              ? "290px"
              : "100px",
            padding: notRequiredBottomPadding
              ? "16px 16px"
              : "8px 16px 100px 16px",
            background: "#fafafb",
            overflowY: "scroll",
            height: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AuthenticatedLayout;
