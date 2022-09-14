import { useContext, useState } from 'react';
import Context from '../body/Context';

import './AddReportForm.css'

function AddReportForm(props) {
    const [enteredMonth, setEnteredMonth] = useState("");
    const [enteredHours, setEnteredHours] = useState("");
    const [enteredPublications, setEnteredPublications] = useState("");
    const [enteredVideos, setEnteredVideos] = useState("");
    const [enteredRevisits, setEnteredRevisits] = useState("");
    const [enteredStudies, setEnteredStudies] = useState("");

    const [,setNewReportAction] = useContext(Context);
 
    const onAddReport = (event) => {
        event.preventDefault();

        const report = {
            month: enteredMonth,
            hours: enteredHours,
            publications: enteredPublications,
            videos: enteredVideos,
            revisits: enteredRevisits,
            studies: enteredStudies,
        }
        props.addReport(report);
        setEnteredMonth("");
        setEnteredHours(0);
        setEnteredPublications(0);
        setEnteredVideos(0);
        setEnteredRevisits(0);
        setEnteredStudies(0);
    } 

    const onMonth = (event) => {
        setEnteredMonth(event.target.value);
    };
    const onHours = (event) => {
        setEnteredHours(event.target.value);
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
        <form onSubmit={onAddReport}>
             <div className="add-report-form-controls" id="report">
                <div className="add-report-form-control" >
                    <label>Mês</label>
                    <input value={enteredMonth} onChange={onMonth} type="text" required/>
                </div>
                <div className="add-report-form-control">
                    <label>Horas trabalhadas</label>
                    <input value={enteredHours} onChange={onHours} type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Publicações</label>
                    <input value={enteredPublications} onChange={onPublications} type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Videos</label>
                    <input value={enteredVideos} onChange={onVideos} type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Revisitas</label>
                    <input value={enteredRevisits} onChange={onRevisits} type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Estudos</label>
                    <input value={enteredStudies} onChange={onStudies} type="number" min="1" step="1"/>
                </div>              
            </div>
            <div className="add-report-form-actions">
                <button onClick={onCancel} className="btn-grad-01">Cancelar</button>
                <button type="submit" className="btn-grad-01">Adicionar</button>
            </div>
        </form>
    );
}

export default AddReportForm;