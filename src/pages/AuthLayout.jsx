import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="w-[450px] rounded border bg-dark-200 p-8 shadow-2xl">
        <img src="/public/weconnect-logo.png" alt="" className="m-auto mb-6" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
