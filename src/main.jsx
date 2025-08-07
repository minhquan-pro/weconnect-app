import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import RootLayout from "./pages/RootLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "./Config/muiConfig";
import RegisterPage from "./pages/auth/RegisterPage";
import AuthLayout from "./pages/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import OTPVeryPage from "./pages/auth/OTPVeryPage";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePages />} />
            <Route element={<AuthLayout />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verify-otp" element={<OTPVeryPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </Provider>,
);
