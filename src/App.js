import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  );
}

function TodoCounter() {
  return (
    <h1>Has comnpletado 2 de 3 TODOs</h1>
  )
}

function TodoSearch() {
  return (
    <h1>Has comnpletado 2 de 3 TODOs</h1>
  )
}

function TodoItem() {
  return(
    <li>
      <span>V</span>
      <p>Elemento Todo</p>
      <span>X</span>
    </li>
  )
  
}
export default App;
