import classes from "./SignUpContainer.module.css";

function SignUpContainer(props) {
  return (
	<div className={classes.container}>{props.children}</div>
  )
}

export default SignUpContainer