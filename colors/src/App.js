import logo from './logo.svg';
import './App.css';
import { Square } from './Square';

function App() {
  return (
    <div className='App' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10vh' }}>

      <Square initialColor="red" /> 
      <Square initialColor="green" /> 
      <Square initialColor="red" /> 
      <Square initialColor="green" /> 
    </div>
  );
}

export default App;
