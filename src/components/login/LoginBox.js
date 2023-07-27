import { useState, useContext, useEffect } from "react";
import classes from "./LoginBox.module.css";
import logo from "../../assets/ministry-logo.png";
import UserContext from "../../contexts/Login/UserContext";
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import signIn from "../../core/signIn";

function LoginBox() {
    const [email, setEmail] = useState("");
    const [showIncorretEmailOrPassword, setShowIncorretEmailOrPassword] =
        useState(false);
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);
    const { setMyUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setMyUser(user);
        }
    }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

    const updateEmail = (event) => {
        setShowIncorretEmailOrPassword(false);
        setEmail(event.target.value);
    };

    const updatePassword = (event) => {
        setShowIncorretEmailOrPassword(false);
        setPassword(event.target.value);
    };

    return (
        <section className={classes.container}>
            <img alt="Logo do Ministry" src={logo} className={classes.logo} />
            <div className={classes["login-container"]}>
                <input
                    value={email}
                    onChange={updateEmail}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={password}
                    onChange={updatePassword}
                    type="password"
                    placeholder="Senha"
                />
                <div className={classes.footer}>
                    {showIncorretEmailOrPassword && (
                        <p>Email ou senha incorretos</p>
                    )}
                    <button
                        tabIndex="0"
                        onClick={() =>
                            signIn(
                                email.trim(),
                                password.trim(),
                                setMyUser,
                                setShowIncorretEmailOrPassword
                            )
                        }
                    >
                        Entrar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default LoginBox;
