import { Fragment } from 'react';
import classes from './AddReport.module.css'
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
    <Fragment>
       <div className={classes["modal-background"]}></div>
       <div className={classes["add-report"]}>
            <AddReportForm addReport={getReport}></AddReportForm>           
       </div>
    </Fragment>   
    );
}

export default AddReport;