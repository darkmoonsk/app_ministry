import { Fragment, useContext } from 'react';
import classes from "./EditReport.module.css";
import AddReportForm from './AddReportForm';
import Context from '../../../contexts/Dashboard/Context';

function EditReport(props) {
	const {reportToEdit} = useContext(Context);

	const getReport = (report) => {
        const updatedReport = {
			...report,
		};
        props.onUpdatedReportContent(updatedReport, reportToEdit);
    }

    return (
    <Fragment>
       <div className={classes["modal-background"]}></div>
       <div className={classes["edit-report"]}>
            <AddReportForm onGetReport={getReport} reportData={reportToEdit} buttonText="Salvar" ></AddReportForm>           
       </div>
    </Fragment>   
    );
}

export default EditReport