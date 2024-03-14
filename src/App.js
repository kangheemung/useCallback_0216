
import './App.css';
import Counter from './Counter';
import Notcallback from './Notcallback'
import Usecallbacktest from './Usecallbacktest';
import ImageUpload from './ImageUpload';
import FilteredList from './FilteredList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Notcallback/>
        <Usecallbacktest/>
        <ImageUpload/>
        <FilteredList/>
      </header>
    </div>
  );
}

export default App;
