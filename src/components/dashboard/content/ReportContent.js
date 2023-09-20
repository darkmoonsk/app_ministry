import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../infra/firebaseConfig";
import classes from "./ReportContent.module.css";
import Report from "./Report";
import AddReport from "./AddReport";
import EditReport from "./EditReport";
import { DashboardContext } from "../../../contexts/Dashboard/DashboardContext";
import UserContext from "../../../contexts/Login/UserContext";
import Firebase from "../../../infra/firebase";
import { filterContext } from "../../../contexts/Filters/FiltersContext";
import filterReports from "../../../core/filterReports";
import AddHours from "../modals/AddHours";

function ReportContent(props) {
    const [ filteredReports , setFilteredReports ] = useState();
    const { newReportAction, editReportAction, addHoursAction } = useContext(DashboardContext);
    const { userData, setUserData } = useContext(UserContext);
    const { filter} = useContext(filterContext);
    const [user] = useAuthState(auth);
    
    const firebase = new Firebase();

    useEffect(() => {
        if(user) {
            firebase.getUserData(user, setUserData);
        }// eslint-disable-next-line
    }, [user, setUserData]); 

    useEffect(() => {
        if(userData[0]) {
            setFilteredReports(filterReports(userData[0].reports, filter));
        }
    }, [userData, filter]);


    return (
        <div className={classes["report-content"]}>
            {newReportAction ? (
                <AddReport userData={userData} />
            ) : (
                <></>
            )}
            {editReportAction ? (
                <EditReport userData={userData} />
            ) : (
                <></>
            )}
            {addHoursAction ? (
                <AddHours userData={userData} />
            ) : (
                <></>
            )}

            {filteredReports?.map((report, index) => (
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
                    onRemoveReportContent={() => firebase.removeReport(report.id, userData)}
                    reportData={report}
                />
            ))}
            <div className={classes["report-content-footer"]}></div>
        </div>
    );
}

export default ReportContent;
