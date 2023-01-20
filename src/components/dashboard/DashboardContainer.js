import classes from './DashboardContainer.module.css';

function DashboardContainer(props) {
  return (
    <div className={classes.container}>
        {props.children}
    </div>
  )
}

export default DashboardContainer