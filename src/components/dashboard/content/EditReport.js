import { Fragment, useContext } from 'react';
import classes from "./EditReport.module.css";
import AddReportForm from './AddReportForm';
import { DashboardContext } from '../../../contexts/Dashboard/DashboardContext';

function EditReport(props) {
	const {reportToEdit} = useContext(DashboardContext);

    console.log(reportToEdit);

    return (
    <Fragment>
       <div className={classes["modal-background"]}></div>
       <div className={classes["edit-report"]}>
            <AddReportForm isReadyOnly={true} editMode={true} reportData={reportToEdit} userData={props.userData} buttonText="Salvar" ></AddReportForm>           
       </div>
    </Fragment>   
    );
}

export default EditReport