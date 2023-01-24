import classes from "./HomeHeader.module.css";
import logo from "../../assets/ministry-logo-home.png";

function HomeHeader() {
  return (
	<header className={classes.container}>
		<img alt="Imagem do logo da página principal" src={logo}></img>
		<a href="/login">Entrar</a>
	</header>
  )
}

export default HomeHeader