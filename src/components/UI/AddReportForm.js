import './AddReportForm.css'

function AddReportForm() {
    return (
        <form>
             <div className="add-report-form-controls">
                <div className="add-report-form-control">
                    <label>Mês</label>
                    <input type="text"/>
                </div>
                <div className="add-report-form-control">
                    <label>Horas trabalhadas</label>
                    <input type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Publicações</label>
                    <input type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Videos</label>
                    <input type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Revisitas</label>
                    <input type="number" min="1" step="1"/>
                </div>
                <div className="add-report-form-control">
                    <label>Estudos</label>
                    <input type="number" min="1" step="1"/>
                </div>              
            </div>
            <div className="add-report-form-actions">
                <button type="submit" className="btn-grad-01">Adicionar</button>
            </div>
        </form>
    );
}

export default AddReportForm;