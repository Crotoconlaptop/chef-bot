import './App.css';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <h1>Chef Raigt 🍽️</h1>
      <p>
        Bienvenido a nuestra experiencia culinaria. ¿Qué desea saber del menú,
        monsieur/mademoiselle?
      </p>
      <Chatbot />
    </div>
  );
}

export default App;
