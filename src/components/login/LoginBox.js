import { useState, useContext,useEffect } from "react";
import classes from "./LoginBox.module.css";
import logo from "../../assets/ministry-logo.png";
import {MyContext} from "../../contexts/Login/AppContext";
import { signInWithEmailAndPassword, auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function LoginBox() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);
    const {setMyUser} = useContext(MyContext);
    
    useEffect(() => {
        if(user) {
            setMyUser(user);
            
        }
    }, [user]); // eslint-disable-line react-hooks/exhaustive-deps
    
    const updateEmail = (event) => {
        setEmail(event.target.value);
    };

    const updatePassword = (event) => {
        setPassword(event.target.value);
    };

    const signIn = (email, password) => {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g
        );
        const passwordRegex = new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
        );

        if (emailRegex.test(email) && passwordRegex.test(password)) {
            alert("Email e senha válidos");

            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setMyUser(user);
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        } else {
            alert("Email ou senha inválidos");
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
                <button onClick={() => signIn(email, password)}>Entrar</button>
            </div>
        </section>
    );
}

export default LoginBox;
