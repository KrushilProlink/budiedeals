import React from "react";
import { Grid, ThemeProvider, CssBaseline, createTheme } from "@mui/material";

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

const StaticPageLayout: React.FC<LayoutProps> = ({ children, userType }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
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
        <Grid
          item
          xs={12}
          style={{
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

export default StaticPageLayout;
