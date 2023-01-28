import { useState, useContext, useEffect } from "react";
import { db } from "../../../services/firebaseConfig";
import {
    collection,
    query,
    where,
    onSnapshot,
    doc,
    updateDoc,
    arrayUnion,
    arrayRemove,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebaseConfig";
import classes from "./ReportContent.module.css";
import Report from "./Report";
import AddReport from "./AddReport";
import Context from "../../../contexts/Dashboard/Context";

// const DUMMY_REPORTS = [
//     {
//         id: "r1",
//         year: "2022",
//         month: "Fevereiro",
//         hours: 12,
//         publications: 15,
//         videos: 5,
//         revisits: 3,
//         studies: 2,
//     },
// ];

function ReportContent(props) {
    const [newReportAction] = useContext(Context);
    const [userData, setUserData] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const q = query(
            collection(db, "users"),
            where("userId", "==", user.uid)
        );
        onSnapshot(q, (querySnapshot) => {
            setUserData(
                querySnapshot.docs.map((doc) => {
                    return doc.data();
                })
            );
        });
    }, [user.uid]);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const addReportContentHandler = async (report) => {
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
                    id: report.month + report.year,
                }),
            });
        }
    };

    const removeReportContentHandler = async (reportId) => {
        const element = userData[0].reports.filter((r) => r.id === reportId);
        const reportRef = await doc(db, "users/" + userData[0].userId);
        updateDoc(reportRef, {
            reports: arrayRemove(element[0]),
        });
    };

    return (
        <div className={classes["report-content"]}>
            {newReportAction ? (
                <AddReport onAddReportContent={addReportContentHandler} />
            ) : (
                <></>
            )}

            {userData[0]?.reports?.map((report, index) => (
                <Report
                    key={index}
                    id={report.id}
                    month={report.month}
                    year={report.year}
                    hours={report.hours}
                    publications={report.publications}
                    videos={report.videos}
                    revisits={report.revisits}
                    studies={report.studies}
                    onRemoveReportContent={removeReportContentHandler}
                />
            ))}
            <div className={classes["report-content-footer"]}></div>
        </div>
    );
}

export default ReportContent;
