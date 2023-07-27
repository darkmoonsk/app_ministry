import User from "./user";
import ValidateUser from "./validateUser";
import Firebase from "../infra/firebase";

export default async function signIn(email, password, setUser, errorState) {
    const validateUser = new ValidateUser("", email, password);
    if (!validateUser.isValidName || !validateUser.isValidPassword) {
        errorState(true);
        return;
    }
    errorState(false);
    const user = new User("", email, password);
    const firebase = new Firebase();

    await firebase.signIn(user, setUser, errorState);
}
