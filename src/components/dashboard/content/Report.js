import classes from "./ReportContent.module.css";
import React, { useContext } from "react";
import deleteImg from "../../../assets/delete.png";
import editImg from "../../../assets/edit.png";
import { DashboardContext } from "../../../contexts/Dashboard/DashboardContext";

function Report(props) {
    const { setEditReportAction, setReportToEdit, setAddHoursAction } = useContext(DashboardContext);

    return (
        <section className={classes["table-wrapper"]}>
            <section className={classes.controls}>
                <button onClick={() => {
                    setReportToEdit(props.reportData);
                    setAddHoursAction(true);
                }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Adicionar horas" />
                </button>
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
            <div className={classes.card}>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Mês</th>
                                <th>Ano</th>
                                <th>Horas</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <strong>{props.month}</strong>
                                </td>
                                <td>{props.year}</td>
                                <td>{props.hours}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Publicações</th>
                                <th>Videos</th>
                                <th>Revisitas</th>
                                <th>Estudos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.publications}</td>
                                <td>{props.videos}</td>
                                <td>{props.revisits}</td>
                                <td>{props.studies}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Report;
