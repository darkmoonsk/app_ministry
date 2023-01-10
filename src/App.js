import { useState } from 'react';
import classes from './App.module.css';
import Context from './components/body/Context';
import Dashboard from './pages/Dashboard';



function App() {
  const [newReportAction, setNewReportAction] = useState(false);

  return (
    <div className={classes["main-container"]}>
      <div className={classes.container}>
          <Context.Provider value={[newReportAction, setNewReportAction]}>               
            <Dashboard />
          </Context.Provider>
      </div> 
    </div>
  );
}

export default App;
