import { useContext } from 'react';
import Context from './Context';

import './Menu.css';

function Menu(props) {
    const [,setNewReportAction] = useContext(Context);

    const onNewReportHandler = () => {
        setNewReportAction(true);
    };

    return (
        <nav className="menu">
            <ul >
            <a href="#report" onClick={onNewReportHandler}><li className="btn-grad-01">Novo relatório</li></a>
            </ul>
        </nav>
    );
}

export default Menu;