import { useState, useContext, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import {
    collection,
    query,
    where,
    onSnapshot,
    doc,
    updateDoc,
    arrayUnion,
} from "firebase/firestore";

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

    useEffect(() => {
        const q = query(collection(db, "users"), where("userId", "==", "test"));
        onSnapshot(q, (querySnapshot) => {
            setUserData(
                querySnapshot.docs.map((doc) => {
                    return doc.data();
                })
            );
        });
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const addReportContentHandler = async (report) => {
        if (userData) {
            console.log("Usuario existe: ", userData);
            const reportExist = userData[0].reports.find(
                (data) =>
                    data.month === report.month && data.year === report.year
            );
            if (reportExist) {
                console.log("O relatorio já existe");
            } else {
                console.log("O relatorio não existe");
                const userRef = doc(db, "users", "tGSAe0tJgkpKeqnrBw1c");
                await updateDoc(userRef, {
                    reports: arrayUnion({
                        year: report.year,
                        month: report.month,
                        hours: report.hours,
                        publications: report.publications,
                        videos: report.videos,
                        revisits: report.revisits,
                        studies: report.studies,
                    }),
                });
            }
        }
    };

    return (
        <div className={classes["report-content"]}>
            {newReportAction ? (
                <AddReport onAddReportContent={addReportContentHandler} />
            ) : (
                <div></div>
            )}

            {userData[0]?.reports?.map((report, index) => (
                <Report
                    key={index}
                    month={report.month}
                    year={report.year}
                    hours={report.hours}
                    publications={report.publications}
                    videos={report.videos}
                    revisits={report.revisits}
                    studies={report.studies}
                />
            ))}
            <div className={classes["report-content-footer"]}></div>
        </div>
    );
}

export default ReportContent;
