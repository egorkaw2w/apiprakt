
import './App.css';
import Header from '../src/template/header/header.js';
import Card from '../src/template/main-card/main-card.js';
function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Card></Card>
      </main>
    </div>
  );
}

export default App;


