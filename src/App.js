import './App.css';
import Header from './components/Header';
import ReportContent from './components/ReportContent';

function App() {
  return (
    <div className="main-container">
      <div className="container">
        <Header></Header>
        <ReportContent></ReportContent>
      </div> 
    </div>
  );
}

export default App;
