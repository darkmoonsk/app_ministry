import { useContext, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import Button from "../UI/Button";
import Context from "../../contexts/Dashboard/Context";
import classes from "./Menu.module.css";
import UserContext from "../../contexts/Login/UserContext";


function Menu(props) {
    const {setNewReportAction} = useContext(Context);
    const {userData} = useContext(UserContext);
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setViewWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
    }, []);

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
            <>
            <div className={`${classes.menu} ${showMenu? classes["show-menu"] : ""} `}>
                <button className={`${classes.close} ${!showMenu? classes.hidden : ""}`} onClick={() => setShowMenu(false)} >
                    <img src="./assets/close.svg" alt="Icone do botão para fechar menu" />
                </button>
                <h1>Olá {userData[0]?.name}</h1>
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
            <div className={viewWidth <= 768 && !showMenu? classes["open-menu"] : classes.hidden}>
                <button onClick={() => setShowMenu(true)} >
                <img src="./assets/sandwich.svg" alt="Icone do botão para abrir menu" />
                </button>
            </div>
            </>
        );

}

export default Menu;
