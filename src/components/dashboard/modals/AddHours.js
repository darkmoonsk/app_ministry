import { useContext, useState } from "react";
import classes from "./AddHours.module.css";
import Button from "../../UI/ButtonStandard";
import { DashboardContext } from "../../../contexts/Dashboard/DashboardContext";
import Firebase from "../../../infra/firebase";
import ValidateReport from "../../../core/validateReport";

function AddHours(props) {
  const [ hours, setHours ] = useState(""); 
  const [ showError, setShowError ] = useState(false);
  const { setAddHoursAction } = useContext(DashboardContext);
  const { reportToEdit } = useContext(DashboardContext);

  const handleSumHours = (hour1, hour2) => {
    const [_hour1, _minute1] = hour1.split(":");
    const [_hour2, _minute2] = hour2.split(":");

    let sumHours = parseInt(_hour1) + parseInt(_hour2);
    let sumMinutes = parseInt(_minute1) + parseInt(_minute2);

    if(sumMinutes >= 60) {
      sumHours += Math.floor(sumMinutes / 60);
      sumMinutes %= 60;
    }

    const result = `${sumHours.toString().padStart(2, "0")}:${sumMinutes.toString().padStart(2, "0")}`

    return result;
  }

  const handleUpdateHours = async (event) => {
    event.preventDefault();
    const firebase = new Firebase();
    if (ValidateReport.validateHours(hours)) {
      setShowError(false);

      const report = {
          year: reportToEdit.year,
          month: reportToEdit.month,
          hours: handleSumHours(reportToEdit.hours, hours),
          publications: reportToEdit.publications,
          videos: reportToEdit.videos,
          revisits: reportToEdit.revisits,
          studies: reportToEdit.studies,
          id: reportToEdit.id,
      }

      await firebase.updateReport(report, reportToEdit, props.userData);
      setAddHoursAction(false);
    } else {
      setShowError(true);
    }

  }

  const onCancel = () => {
    setAddHoursAction(false);
    setHours("");
  }


  return (
    <>
        <div className={classes["modal-background"]}></div>
        <form className={classes.container} onSubmit={handleUpdateHours}>
            <h3 className={classes.title}>Digite as horas que deseja adicionar</h3>
            <p>O sistema automaticamente fará os cálculos e somará com as horas que estão em seu relatório.</p>
            <input className={classes.inputHours} placeholder="0:00" value={hours} onChange={(e) => setHours(e.target.value)} />
            {showError ? (
              <span className={classes.error}>Digite uma hora válida!</span>
              ): (
                ""
              )}
            <Button type="submit">Adicionar Horas</Button>
            <Button onClick={onCancel}>Cancelar</Button>
        </form>
    </>
  )
}

export default AddHours