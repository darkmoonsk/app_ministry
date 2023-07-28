import classes from "./ContentContainer.module.css"

export default function ContentContainer(props) {
  return (
    <div className={classes.container}>{ props.children }</div>
  )
}
