import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { Navigate } from "react-router-dom";
import LoginContainer from "../components/login/LoginContainer";
import LoginBox from "../components/login/LoginBox";

function Login() {
    const [user, loading] = useAuthState(auth);

    if (!loading) {
        if (user) {
            return <Navigate to="/dashboard" />;
        }

        if (!user) {
            return (
                <LoginContainer>
                    <LoginBox />
                </LoginContainer>
            );
        }
    }
}

export default Login;
