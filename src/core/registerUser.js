import Firebase from "../infra/firebase";
import User from "./user";
import ValidateUser from "./validateUser";
export default class RegisterUser {
    async execute(name, email, password, passwordConfirmation, errorState) {
        const validateUser = new ValidateUser(
            name,
            email,
            password,
            passwordConfirmation
        );
        if (!validateUser.isValidName(name)) {
            errorState("Nome inválido");
            return;
        }
        if (!validateUser.isValidEmail(email)) {
            errorState("Email inválido");
            return;
        }
        if (!validateUser.isValidPassword(password)) {
            errorState("Senha inválida");
            return;
        }
        if (!validateUser.isValidTwoPasswords(password, passwordConfirmation)) {
            errorState("Senhas não conferem");
            return;
        }
        const user = new User(name, email, password);

        const firebase = new Firebase();
        try {
            const persistedUser = await firebase.persistUser(user);
            return persistedUser;
        } catch (error) {
            console.log(error.message);
        }
    }
}
