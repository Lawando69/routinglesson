import './App.css';
import Home from './pages/home/Home';
import Pages from './Pages.js';

function App() {
  return (
    <div className="App">
      <header>THIS IS MY HEADER</header>
      <Pages/>
      <footer>This will appear under all the pages</footer>
    </div>
  );
}

export default App;
