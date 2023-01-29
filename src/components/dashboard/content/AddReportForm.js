import { useContext, useState } from "react";
import Context from "../../../contexts/Dashboard/Context";
import ButtonStandard from "../../UI/ButtonStandard";

import classes from "./AddReportForm.module.css";

function AddReportForm(props) {
    const [enteredMonth, setEnteredMonth] = useState(
        props.reportData ? props.reportData.month : "Janeiro"
    );
    const [enteredYear, setEnteredYear] = useState(
        props.reportData ? props.reportData.year : `${new Date().getFullYear()}`
    );
    const [enteredHours, setEnteredHours] = useState(
        props.reportData ? props.reportData.hours : "0"
    );
    const [enteredPublications, setEnteredPublications] = useState(
        props.reportData ? props.reportData.publications : "0"
    );
    const [enteredVideos, setEnteredVideos] = useState(
        props.reportData ? props.reportData.videos : "0"
    );
    const [enteredRevisits, setEnteredRevisits] = useState(
        props.reportData ? props.reportData.revisits : "0"
    );
    const [enteredStudies, setEnteredStudies] = useState(
        props.reportData ? props.reportData.studies : "0"
    );

    const { setNewReportAction, setEditReportAction } = useContext(Context);

    const onAddReport = (event) => {
        event.preventDefault();

        const report = {
            month: enteredMonth,
            year: enteredYear,
            hours: enteredHours,
            publications: enteredPublications,
            videos: enteredVideos,
            revisits: enteredRevisits,
            studies: enteredStudies,
            id: enteredMonth + enteredYear,
        };
        props.onGetReport(report);
        setEnteredMonth("Janeiro");
        setEnteredYear("2022");
        setEnteredHours("");
        setEnteredPublications("");
        setEnteredVideos("");
        setEnteredRevisits("");
        setEnteredStudies("");
        onCancel();
    };

    function validateNumber(value) {
        const numberRegex = new RegExp(/^(0|[1-9]\d*)$/);
        return numberRegex.test(value);
    }

    const onMonth = (event) => {
            setEnteredMonth(event.target.value);
    };
    const onHours = (event) => {
        if (validateNumber(event.target.value) || event.target.value === "")
            setEnteredHours(event.target.value);
    };
    const onYear = (event) => {
        if (validateNumber(event.target.value) || event.target.value === "")
            setEnteredYear(event.target.value);
    };
    const onPublications = (event) => {
        if (validateNumber(event.target.value) || event.target.value === "")
            setEnteredPublications(event.target.value);
    };
    const onVideos = (event) => {
        if (validateNumber(event.target.value))
            setEnteredVideos(event.target.value);
    };
    const onRevisits = (event) => {
        if (validateNumber(event.target.value) || event.target.value === "")
            setEnteredRevisits(event.target.value);
    };
    const onStudies = (event) => {
        if (validateNumber(event.target.value) || event.target.value === "")
            setEnteredStudies(event.target.value);
    };

    const onCancel = () => {
        setNewReportAction(false);
        setEditReportAction(false);
    };

    return (
        <form
            onSubmit={onAddReport}
            className={classes["add-report-form-controls"]}
        >
            <div className={classes["add-report-form-control"]} id="report">
                <div>
                    <label>Mês</label>
                    {/* <input value={enteredMonth} onChange={onMonth} type="text" required/> */}
                    <select disabled={props.isReadyOnly} value={enteredMonth}  onChange={onMonth}>
                        <option value="Janeiro">Janeiro</option>
                        <option value="Fevereiro">Fevereiro</option>
                        <option value="Março">Março</option>
                        <option value="Abril">Abril</option>
                        <option value="Maio">Maio</option>
                        <option value="Junho">Junho</option>
                        <option value="Julho">Julho</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setembro">Setembro</option>
                        <option value="Outubro">Outubro</option>
                        <option value="Novembro">Novembro</option>
                        <option value="Dezembro">Dezembro</option>
                    </select>
                </div>
                <div>
                    <label>Ano</label>
                    <input
                        value={enteredYear}
                        onChange={onYear}
                        readOnly={props.isReadyOnly}
                        type="number"
                        min="2022"
                        max="2042"
                        step="1"
                        required
                    />
                </div>

                <div>
                    <label>Horas</label>
                    <input
                        value={enteredHours}
                        onChange={onHours}
                        type="number"
                        min="0"
                        step="1"
                        required
                    />
                </div>
                <div>
                    <label>Publicações</label>
                    <input
                        value={enteredPublications}
                        onChange={onPublications}
                        type="number"
                        min="0"
                        step="1"
                        required
                    />
                </div>
                <div>
                    <label>Videos</label>
                    <input
                        value={enteredVideos}
                        onChange={onVideos}
                        type="number"
                        min="0"
                        step="1"
                        required
                    />
                </div>
                <div>
                    <label>Revisitas</label>
                    <input
                        value={enteredRevisits}
                        onChange={onRevisits}
                        type="number"
                        min="0"
                        step="1"
                        required
                    />
                </div>
                <div>
                    <label>Estudos</label>
                    <input
                        value={enteredStudies}
                        onChange={onStudies}
                        type="number"
                        min="0"
                        step="1"
                        required
                    />
                </div>
            </div>
            <div className={classes["add-report-form-actions"]}>
                {
                props.isReadyOnly?
                    <p>Nota: o ano e o mês não podem ser editados, para isso apague este relatorio e crie um novo</p>
                : <></>
                }
                <ButtonStandard onClick={onCancel}>Cancelar</ButtonStandard>
                <ButtonStandard type="submit">
                    {props.buttonText}
                </ButtonStandard>
            </div>
        </form>
    );
}

export default AddReportForm;
