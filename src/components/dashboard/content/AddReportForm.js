import { useContext, useState } from 'react';
import Context from '../body/Context';
import ButtonStandard from '../../UI/ButtonStandard';

import classes from './AddReportForm.module.css'

function AddReportForm(props) {
    const [enteredMonth, setEnteredMonth] = useState("Janeiro");
    const [enteredYear, setEnteredYear] = useState("2022");
    const [enteredHours, setEnteredHours] = useState("0");
    const [enteredPublications, setEnteredPublications] = useState("0");
    const [enteredVideos, setEnteredVideos] = useState("0");
    const [enteredRevisits, setEnteredRevisits] = useState("0");
    const [enteredStudies, setEnteredStudies] = useState("0");

    const [,setNewReportAction] = useContext(Context);
 
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
        }
        props.addReport(report);
        setEnteredMonth("Janeiro");
        setEnteredYear("2022");
        setEnteredHours("");
        setEnteredPublications("");
        setEnteredVideos("");
        setEnteredRevisits("");
        setEnteredStudies("");
        onCancel();
    } 

    const onMonth = (event) => {
        setEnteredMonth(event.target.value);
    };
    const onHours = (event) => {
        setEnteredHours(event.target.value);
    };
    const onYear = (event) => {
        setEnteredYear(event.target.value);
    };
    const onPublications = (event) => {
        setEnteredPublications(event.target.value);
    };
    const onVideos = (event) => {
        setEnteredVideos(event.target.value);
    };
    const onRevisits = (event) => {
        setEnteredRevisits(event.target.value);
    };
    const onStudies = (event) => {
        setEnteredStudies(event.target.value);
    };

    const onCancel = () => {
        setNewReportAction(false);
    };

    return (
        <form onSubmit={onAddReport} className={classes["add-report-form-controls"]}>
             <div className={classes["add-report-form-control"]} id="report">
                <div>
                    <label>Mês</label>
                    {/* <input value={enteredMonth} onChange={onMonth} type="text" required/> */}
                    <select onChange={onMonth} required>
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
                <div >
                    <label>Ano</label>
                    <input value={enteredYear} onChange={onYear} type="number" min="2022" step="1" required/>
                </div>

                <div >
                    <label>Horas</label>
                    <input value={enteredHours} onChange={onHours} type="number" min="0" step="1" />
                </div>
                <div >
                    <label>Publicações</label>
                    <input value={enteredPublications} onChange={onPublications} type="number" min="0" step="1" />
                </div>
                <div >
                    <label>Videos</label>
                    <input value={enteredVideos} onChange={onVideos} type="number" min="0" step="1"/>
                </div>
                <div >
                    <label>Revisitas</label>
                    <input value={enteredRevisits} onChange={onRevisits} type="number" min="0" step="1"/>
                </div>
                <div >
                    <label>Estudos</label>
                    <input value={enteredStudies} onChange={onStudies} type="number" min="0" step="1"/>
                </div>             
            </div>  
            <div className={classes["add-report-form-actions"]}>
                <ButtonStandard onClick={onCancel}>Cancelar</ButtonStandard>
                <ButtonStandard type="submit">Adicionar</ButtonStandard>
            </div>        
        </form>
    );
}

export default AddReportForm;