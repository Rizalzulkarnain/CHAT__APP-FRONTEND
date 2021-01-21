import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ component: Component, ...props }) => {
  const isLoggedInUser = useSelector((state) => state.auth);
  const { isLoggedIn } = isLoggedInUser;

  return (
    <Route
      {...props}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoutes;
