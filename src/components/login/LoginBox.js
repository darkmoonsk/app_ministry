import classes from "./LoginBox.module.css"
import logo from "../../assets/ministry-logo.png"


function LoginBox() {
  return (
    <section className={classes.container}>
      <img alt="Logo do Ministry" src={logo} className={classes.logo} />
      <div className={classes["login-container"]}>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
      </div>
    </section>
  )
}

export default LoginBox