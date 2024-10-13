import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
      <RedocStandalone specUrl="spacecrop-api.json"/>
    </div>
  );
}

export default App;
