import {Navigate} from "react-router-dom"
import {useAuth} from "../contexts/auth-context"
function PrivateRoute({ children }) {
    const {user: {user}} = useAuth();
    return user ? children : <Navigate to="/login" />;
  }

export default PrivateRoute
  