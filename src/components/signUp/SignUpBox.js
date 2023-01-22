import classes from "./SignUpBox.module.css";

function SignUpBox() {
  return (
	<div className={classes.container}>
		<label>Nome completo</label>
		<input type="text" />
		<label>Email</label>
		<input type="text" />
		<label>Senha</label>
		<input type="password" />
		<button>Registrar-se</button>
	</div>
  )
}

export default SignUpBox