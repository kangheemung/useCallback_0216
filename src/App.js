
import './App.css';
import Counter from './Counter';
import Notcallback from './Notcallback'
import Usecallbacktest from './Usecallbacktest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Notcallback/>
        <Usecallbacktest/>
      </header>
    </div>
  );
}

export default App;
