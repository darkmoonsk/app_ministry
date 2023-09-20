import { Fragment } from 'react';
import classes from './AddReport.module.css'
import AddReportForm from './AddReportForm';

function AddReport(props) {

    return (
    <Fragment>
       <div className={classes["modal-background"]}></div>
       <div className={classes["add-report"]}>
            <AddReportForm userData={props.userData} buttonText="Adicionar"></AddReportForm>           
       </div>
    </Fragment>   
    );
}

export default AddReport;