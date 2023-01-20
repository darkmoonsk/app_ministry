import classes from "./LoginBox.module.css"

function LoginBox() {
  return (
    <div className={classes.container}>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
    </div>
  )
}

export default LoginBox