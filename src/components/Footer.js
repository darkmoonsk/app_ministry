import classes from "./Footer.module.css";

function Footer() {
  return (
	<footer className={classes.container}>
		Todos os direitos reservados DKM Studio &copy; 2022 - {new Date().getFullYear()}
	</footer>
  )
}

export default Footer;