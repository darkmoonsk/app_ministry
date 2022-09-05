import './App.css';
import Header from './components/body/Header';
import ReportContent from './components/content/ReportContent';
import AddReport from './components/UI/AddReport';

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <Header/>
        <AddReport/>
        <ReportContent/>
      </div> 
    </div>
  );
}

export default App;
