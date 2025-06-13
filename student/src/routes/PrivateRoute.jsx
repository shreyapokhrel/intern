import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("PrivateLayout");
  return isLoggedIn ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
