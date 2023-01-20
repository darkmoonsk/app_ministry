import { useState } from 'react';
import classes from './App.module.css';
import Context from './components/body/Context';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const [newReportAction, setNewReportAction] = useState(false);

  return (
    <div className={classes["main-container"]}>
      <div className={classes.container}>
          <Context.Provider value={[newReportAction, setNewReportAction]}>   
            <BrowserRouter>  
              <Routes>
                <Route path="/login" element={<Login />} />          
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </BrowserRouter>
          </Context.Provider>
      </div> 
    </div>
  );
}

export default App;
