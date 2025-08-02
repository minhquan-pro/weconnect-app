import { Outlet } from "react-router-dom";
import "@fontsource-variable/public-sans";

const RootLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
