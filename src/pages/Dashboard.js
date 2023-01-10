import React from 'react'
import Menu from '../components/body/Menu'
import ReportContent from '../components/content/ReportContent'
import classes from "./Dashboard.module.css"

function dashboard() {
  return (
    <div className={classes.container}>
        <Menu />
        <ReportContent />
    </div>
  )
}

export default dashboard