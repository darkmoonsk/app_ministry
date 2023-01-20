import classes from "./LoginContainer.module.css"

function LoginContainer(props) {
  return (
    <div className={classes.container}>{props.children}</div>
  )
}

export default LoginContainer