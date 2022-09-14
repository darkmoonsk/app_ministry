import { useState } from 'react';
import './App.css';
import Context from './components/body/Context';
import Header from './components/body/Header';
import ReportContent from './components/content/ReportContent';


function App() {
  const [newReportAction, setNewReportAction] = useState(false);

  return (
    <div className="main-container">
      <div className="container">
          <Context.Provider value={[newReportAction, setNewReportAction]}>
          <Header />
          <ReportContent />
          </Context.Provider>
      </div> 
    </div>
  );
}

export default App;
