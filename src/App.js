import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Charecters from './components/comics/Charecters';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTodo/>
      <Todos/>
      <Charecters/>
    </div>
  );
}

export default App;
