

export default class ValidateUser {
    #email;
    #password;
    #name;
    #passwordConfirmation
    constructor(name, email, password, passwordConfirmation) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#passwordConfirmation = passwordConfirmation;
    }
    
    isValidEmail() {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        );
        return emailRegex.test(this.#email);
    }
    isValidPassword() {
        const passwordRegex = new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
        );
        return passwordRegex.test(this.#password);
    }
    isValidTwoPasswords() {
        return this.#password === this.#passwordConfirmation;
    }
    isValidName() {
        const nameRegex = new RegExp(/^[A-ZÀ-Ú][a-zà-ú]+( [A-ZÀ-Ú][a-zà-ú]+)*$/);
        if (this.#name.length < 3) {
            return false;
        }
        return nameRegex.test(this.#name);
    }
}