import { Fragment } from 'react';
import classes from './AddReport.module.css'
import AddReportForm from './AddReportForm';

function AddReport(props) {
    const getReport = (enteredValues) => {
        const newReport = {
            ...enteredValues,  
        };
        props.onAddReportContent(newReport);
    }

    return (
    <Fragment>
       <div className={classes["modal-background"]}></div>
       <div className={classes["add-report"]}>
            <AddReportForm onGetReport={getReport} buttonText="Adicionar"></AddReportForm>           
       </div>
    </Fragment>   
    );
}

export default AddReport;