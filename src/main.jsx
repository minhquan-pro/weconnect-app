import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import RootLayout from "./pages/RootLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "./Config/muiConfig";
import RegisterPage from "./pages/RegisterPage";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>,
);
