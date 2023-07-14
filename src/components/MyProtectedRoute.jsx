import { useSelector } from "react-redux";
import MyMain from "./MyMain";

const MyProtectedRoute = (Component) => {
    const AuthRoute = () => {

        const utenteCorrente = useSelector(state => state.utenteCorrente.userData);

        const isAuth = !!utenteCorrente.jwtToken;
        if (isAuth) {
            return <Component />;
        } else {
            return <MyMain/>;
        }
    };

    return AuthRoute;
};
export default MyProtectedRoute;