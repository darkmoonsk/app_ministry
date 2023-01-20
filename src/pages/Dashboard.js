import React from 'react'
import Menu from '../components/dashboard/body/Menu'
import ReportContent from '../components/dashboard/content/ReportContent'
import DashboardContainer from '../components/dashboard/DashboardContainer'

function dashboard() {
  return (
    <DashboardContainer>
        <Menu />
        <ReportContent />
    </DashboardContainer>
  )
}

export default dashboard