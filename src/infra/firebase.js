import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
    auth,
    db,
    signInWithEmailAndPassword,
} from "./firebaseConfig";

export default class Firebase {
    persistUser(user) {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(async (userCredential) => {
                    const createdUser = await userCredential.user;
                    await this.createUserInDatabase(user.name, createdUser);
                    console.log("Conta criada com sucesso");
                    resolve(createdUser);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    reject(error);
                });
        });
    }
    async createUserInDatabase(name, user) {
        const userRef = await doc(db, "users/" + user.uid);
        await setDoc(userRef, {
            name: name,
            email: user.email,
            reports: [],
            userId: user.uid,
        });
    }

    signIn(user, setUser, setShowIncorretEmailOrPassword) {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setShowIncorretEmailOrPassword(true);
            });
    }
}
