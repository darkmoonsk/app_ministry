import { useState, useContext} from 'react';

import './ReportContent.css'
import Report from './Report'
import AddReport from './AddReport'
import Context from '../body/Context';


const DUMMY_REPORTS = [
    {
        id: "r1",
        month: "Fevereiro",
        hours: 12,
        publications: 15,
        videos: 5,
        revisits: 3,
        studies: 2,
    }
];  

function ReportContent(props){
    const [reports, setReports] = useState(DUMMY_REPORTS);
    const [newReportAction] = useContext(Context);

     const addReportContentHandler = (report) => {
        setReports((prevReports) => [
            report, ...prevReports
        ]);
        console.log(reports);
    } 

    console.log(reports);

    return (
        <div className="ReportContent">               
                {newReportAction?
                    <AddReport onAddReportContent={addReportContentHandler}/>
                :
                    <div></div>
                }
           
            {reports.map((report, index) => (
                <Report
                    key={index}
                    month={report.month}
                    hours={report.hours}
                    publications={report.publications}
                    videos={report.videos}
                    revisits={report.revisits}
                    studies={report.studies}
                />
            ))}
            <div className="report-content-footer"></div>
        </div>
    );
}

export default ReportContent;