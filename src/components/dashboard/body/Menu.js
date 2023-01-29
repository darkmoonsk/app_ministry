import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebaseConfig";
import Button from "../../UI/Button";
import Context from "../../../contexts/Dashboard/Context";
import classes from "./Menu.module.css";


function Menu(props) {
    const {setNewReportAction} = useContext(Context);

    const onSignOutHandler = async () => {
       signOut(auth).then(() => {
            alert("Deslogado com sucesso!");
       }).catch((error) => {
            alert("Erro ao deslogar!");
            console.log(error);
       });
    };  

    const onNewReportHandler = () => {
        setNewReportAction(true);
    };

    return (
        <div className={classes.menu}>
            <nav>
                <ul>
                    <li>
                        <Button onClick={onSignOutHandler}>Sair</Button>
                    </li>
                    <li>
                        <Button onClick={onNewReportHandler}>
                            Novo relatório
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
