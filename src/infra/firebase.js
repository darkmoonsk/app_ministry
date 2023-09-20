import { createUserWithEmailAndPassword } from "firebase/auth";
import {
    doc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    collection,
    query,
    where,
    onSnapshot,
} from "firebase/firestore";
import { auth, db, signInWithEmailAndPassword } from "./firebaseConfig";

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

    getUserData(user, userDataState) {
        const q = query(
            collection(db, "users"),
            where("userId", "==", user.uid)
        );
        onSnapshot(q, (querySnapshot) => {
            userDataState(
                querySnapshot.docs.map((doc) => {
                    return doc.data();
                })
            );
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

    async saveReport(report, userData) {
        console.log("Usuario existe: ", userData);
        const reportAlreadyExist = userData[0].reports.find(
            (data) => data.month === report.month && data.year === report.year
        );
        if (reportAlreadyExist) {
            console.log("O relatorio já existe");
        } else {
            console.log("O relatorio não existe");
            const userRef = doc(db, "users", userData[0].userId);
            await updateDoc(userRef, {
                reports: arrayUnion({
                    year: report.year,
                    month: report.month,
                    hours: report.hours,
                    publications: report.publications,
                    videos: report.videos,
                    revisits: report.revisits,
                    studies: report.studies,
                    id: report.id,
                }),
            });
        }
    }

    async updateReport(report, reportToEdit, userData) {
        console.log("Usuario existe: ", userData);
        const reportAlreadyExist = userData[0].reports.filter(
            (data) => data.id === reportToEdit.id
        );
        const reportIdExist = userData[0].reports.filter(
            (data) => data.id === report.id
        );
        console.log(reportIdExist)
        if (reportAlreadyExist) {
            console.log("O relatorio já existe");
            const userRef = doc(db, "users", userData[0].userId);
            await updateDoc(userRef, {
                reports: arrayRemove(reportAlreadyExist[0]),
            });
            await updateDoc(userRef, {
                reports: arrayUnion({
                    year: report.year,
                    month: report.month,
                    hours: report.hours,
                    publications: report.publications,
                    videos: report.videos,
                    revisits: report.revisits,
                    studies: report.studies,
                    id: report.id,
                }),
            });
        }
    }

    async removeReport(reportId, userData) {
        const element = userData[0].reports.filter((r) => r.id === reportId);
        const reportRef = await doc(db, "users/" + userData[0].userId);
        updateDoc(reportRef, {
            reports: arrayRemove(element[0]),
        });
    }
}
