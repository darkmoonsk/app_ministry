import { useState, useContext,useEffect } from "react";
import classes from "./LoginBox.module.css";
import logo from "../../assets/ministry-logo.png";
import UserContext from "../../contexts/Login/UserContext";
import { signInWithEmailAndPassword, auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import account from "../../services/account";

function LoginBox() {
    const [email, setEmail] = useState("");
    const [showIncorretEmailOrPassword, setShowIncorretEmailOrPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);
    const {setMyUser} = useContext(UserContext);
    
    useEffect(() => {
        if(user) {
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

    const signIn = (email, password) => {       
        if (account.validateEmailAndPassword(email, password)) {
            setShowIncorretEmailOrPassword(false);

            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setMyUser(user);
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setShowIncorretEmailOrPassword(true);
            });
        } else {
            setShowIncorretEmailOrPassword(true);
        }
    };

    return (
        <section className={classes.container}>
            <img alt="Logo do Ministry" src={logo} className={classes.logo} />
            <div className={classes["login-container"]}>
                <input
                    value={email}
                    onChange={updateEmail}
                    type="text"
                    placeholder="Email"
                />
                <input
                    value={password}
                    onChange={updatePassword}
                    type="password"
                    placeholder="Senha"
                />
                <div className={classes.footer}>
                    {showIncorretEmailOrPassword && <p>Email ou senha incorretos</p>}
                    <button onClick={() => signIn(email, password)}>Entrar</button>
                </div>
            </div>
        </section>
    );
}

export default LoginBox;
