import './App.css'
import Chatbot from './components/Chatbot'

const menuData = [
  {
    name: 'Croque Monsieur',
    description: 'Classic French ham and cheese sandwich, grilled to golden perfection.',
    allergens: 'Gluten, Dairy, Pork',
    image_url: '/public/TruffleCrocMonsieur.jpg'
  },
  {
    name: 'Soupe à l’oignon',
    description: 'Rich onion soup topped with melted cheese and toasted bread.',
    allergens: 'Gluten, Dairy',
    image_url: '/menu/onion-soup.jpg'
  },
  {
    name: 'Ratatouille',
    description: 'Stewed vegetable medley made with eggplant, zucchini, tomatoes, and herbs.',
    allergens: 'None',
    image_url: '/menu/ratatouille.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <div className="chef-header">
        <img src="/chef-raigt.png" alt="Chef Raigt" className="chef-avatar" />
        <h1>Bonjour! I am Chef Raigt 🍽️</h1>
      </div>
      <p>
        Bienvenido a nuestra experiencia culinaria. ¿Qué desea saber del menú, monsieur/mademoiselle?
      </p>

      <div className="menu-section">
        {menuData.map((dish) => (
          <div key={dish.name} className="dish-card">
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p><strong>Allergens:</strong> {dish.allergens}</p>
            <img src={dish.image_url} alt={dish.name} />
          </div>
        ))}
      </div>

      <Chatbot />
    </div>
  )
}

export default App
