import { Outlet } from "react-router-dom";
import "@fontsource-variable/public-sans";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../redux/slices/snackbarSlice";

const RootLayout = () => {
  const { open, message, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  return (
    <div>
      <Outlet />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert
          //   onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RootLayout;
