import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const MyProtectedRoute = (Component) => {
    const AuthRoute = () => {

        const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

        const isAuth = !!utenteCorrente.jwtToken;
        if (isAuth) {
            return <Component />;
        } else {
            return <Navigate to="/login" />;
        }
    };

    return AuthRoute;
};
export default MyProtectedRoute;