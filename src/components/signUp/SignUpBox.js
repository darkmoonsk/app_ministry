import { useContext, useState } from "react";
import classes from "./SignUpBox.module.css";
import UserContext from "../../contexts/Login/UserContext";
import RegisterUser from "../../core/registerUser";

function SignUpBox() {
    const { setMyUser } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [showError, setShowError] = useState(false);

    const updateName = (event) => {
        setShowError(false);
        setName(event.target.value);
    };
    const updateEmail = (event) => {
        setShowError(false);
        setEmail(event.target.value);
    };
    const updatePassword = (event) => {
        setShowError(false);
        setPassword(event.target.value);
    };
    const updatePasswordConfirmation = (event) => {
        setShowError(false);
        setPasswordConfirmation(event.target.value);
    };

    const handleSignUp = async (
        name,
        email,
        password,
        passwordConfirmation
    ) => {
        const registerUser = new RegisterUser();
        const user = await registerUser.execute(
            name.trim(),
            email.trim(),
            password.trim(),
            passwordConfirmation.trim(),
            setShowError
        );
        setMyUser(user);
    };

    return (
        <div className={classes.container}>
            <label htmlFor="name">Nome completo</label>
            <input value={name} onChange={updateName} id="name" type="text" />
            <label htmlFor="email">Email</label>
            <input
                value={email}
                onChange={updateEmail}
                id="email"
                type="email"
            />
            <label htmlFor="password">Senha</label>
            <input
                value={password}
                onChange={updatePassword}
                id="password"
                type="password"
            />
            <label htmlFor="password-confirmation">Confirme a senha</label>
            <input
                value={passwordConfirmation}
                onChange={updatePasswordConfirmation}
                id="password-confirmation"
                type="password"
            />
            <div className={classes.footer}>
                {showError && <p>{showError}</p>}
                <button
                    onClick={() =>
                        handleSignUp(
                            name,
                            email,
                            password,
                            passwordConfirmation
                        )
                    }
                >
                    Registrar-se
                </button>
            </div>
        </div>
    );
}

export default SignUpBox;
