import React from "react";

function Report(props){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Mês</th>
                        <th>Horas trabalhadas</th>
                        <th>Publicações</th>
                        <th>Videos</th>
                        <th>Revisitas</th>
                        <th>Estudos</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><strong>{props.month}</strong></td>
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
