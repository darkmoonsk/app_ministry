import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

const account = {
    validateName: function (name) {
        const nameRegex = new RegExp(/^[A-ZÀ-Ú][a-zà-ú]+( [A-ZÀ-Ú][a-zà-ú]+)*$/);

        if (name.length < 3) {
            return false;
        }
        return nameRegex.test(name);

    },

    validateEmailAndPassword: function (email, password) {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        );
        const passwordRegex = new RegExp(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
        );
        return emailRegex.test(email) && passwordRegex.test(password);
    },

    validatePassword: function (password1, password2) {
        return password1 === password2 && password1.length > 0 && password2.length > 0;
    }, 

    createUserInDatabase: async function (name, user) {
        const userRef = await doc(db, "users/" + user.uid);
        await setDoc(userRef, {
            name: name,
            email: user.email,
            reports: [],
            userId: user.uid,
        });
    },

    createUser: async function (name, email, password) {
        if (!this.validateEmailAndPassword(email, password)) {
            console.log("Email ou senha inválidos");
            return;
        }
		return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = await userCredential.user;
                //console.log(user);
                await this.createUserInDatabase(name, user);
                console.log("Conta criada com sucesso");
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                reject(error);
            });
		});
    },
};

export default account;
