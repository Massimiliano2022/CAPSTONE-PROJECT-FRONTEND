import { useSelector } from "react-redux";
import MyLogin from "./MyLogin";

const MyProtectedRoute = (Component) => {
    const AuthRoute = () => {

        const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

        const isAuth = !!utenteCorrente.jwtToken;
        if (isAuth) {
            return <Component />;
        } else {
            //return <Navigate to="/login" />;
            return <MyLogin/>
        }
    };

    return AuthRoute;
};
export default MyProtectedRoute;