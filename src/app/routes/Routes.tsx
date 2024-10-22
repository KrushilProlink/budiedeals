import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import AuthenticatedLayout from "../entities/AuthenticatedLayout/AuthenticatedLayout";
// Lazy-loaded components
const Header = lazy(() => import("app/entities/Header/Header"));
const Products = lazy(() => import("app/entities/products/products"));
const ProductDetails = lazy(() => import("app/entities/products/productDetails"));
const MainContent = lazy(() => import("app/entities/MainContent/MainContent"));
const Payment = lazy(() => import("app/entities/payment/payment"));
// const Dashboard = lazy(() => import("app/entities/Dashboard/Dashboard"));

export const UnauthenticatedRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/*<Route path="/signIn" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/verifyOTP" element={<OTPVerification />} />
        <Route path="/:userType/signIn" element={<SignIn />} />
        
        <Route path="/changePassword" element={<NewPassword />} />
        <Route path="/successChangePassword" element={<SuccessPassword />} />
        <Route path="*" element={<Navigate to="/signIn" />} /> */}
        <Route path="/product" element={<Products />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Suspense>
  );
};

export const AuthenticatedRoutes = ({ userType }: any) => {
  return (
    <AuthenticatedLayout userType={userType}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Header />} />
          <Route index element={<MainContent />} />
        </Routes>
      </Suspense>
    </AuthenticatedLayout>
  );
};
