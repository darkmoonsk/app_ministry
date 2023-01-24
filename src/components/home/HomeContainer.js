import classes from "./HomeContainer.module.css";

function HomeContainer(props) {
  return (
	<main className={classes.container}>
		{props.children}
	</main>
  )
}

export default HomeContainer