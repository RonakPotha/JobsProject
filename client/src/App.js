import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import{Button} from 'antd'
import Home from './pages/Home';
import JobInfo from './pages/JobInfo';
import {BrowserRouter , Route } from 'react-router-dom' 
function App() {
  return (
    <div className="App">
    
        <Home/>
    </div>
  );
}

export default App;
