import React, { useContext } from "react";
import deleteImg from "../../../assets/delete.png";
import editImg from "../../../assets/edit.png";
import Context from "../../../contexts/Dashboard/Context";

function Report(props) {
    const { setEditReportAction, setReportToEdit } = useContext(Context);

    return (
        <div>
            <section>
                <button
                    onClick={() => {
                        setReportToEdit(props.reportData);
                        setEditReportAction(true);
                    }}
                >
                    <img alt="Botão para editar o relatório" src={editImg} />
                </button>
                <button onClick={() => props.onRemoveReportContent(props.id)}>
                    <img alt="Botão para apagar o relatório" src={deleteImg} />
                </button>
            </section>
            <table>
                <thead>
                    <tr>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Horas</th>
                        <th>Publicações</th>
                        <th>Videos</th>
                        <th>Revisitas</th>
                        <th>Estudos</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <strong>{props.month}</strong>
                        </td>
                        <td>{props.year}</td>
                        <td>{props.hours}</td>
                        <td>{props.publications}</td>
                        <td>{props.videos}</td>
                        <td>{props.revisits}</td>
                        <td>{props.studies}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Report;
