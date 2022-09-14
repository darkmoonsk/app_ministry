import './AddReport.css'
import AddReportForm from './AddReportForm';

function AddReport(props) {
    const getReport = (enteredValues) => {
        const newReport = {
            id: Math.random().toString,
            ...enteredValues,  
        };
        props.onAddReportContent(newReport);
    }

    return (
       <div className="add-report">
            <AddReportForm addReport={getReport}></AddReportForm>
       </div>
    );
}

export default AddReport;