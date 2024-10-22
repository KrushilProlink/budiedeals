import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import queryClient from "./app/shared/util/queryClient";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
          <PrivateRoute />
        </Sentry.ErrorBoundary>
      </AuthProvider>
    </QueryClientProvider>
  </Router>
  );
}

export default App;
