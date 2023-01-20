import { useContext } from 'react';
import Button from '../../UI/Button';
import Context from './Context';

import classes from './Menu.module.css';

function Menu(props) {
    const [,setNewReportAction] = useContext(Context);

    const onNewReportHandler = () => {
        setNewReportAction(true);
    };

    return (
        <div className={classes.menu}>
            <nav>
                <ul >
                    <Button onClick={onNewReportHandler}><li>Novo relatório</li></Button>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;