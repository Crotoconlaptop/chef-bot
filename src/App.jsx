import './App.css';
import Chatbot from './components/Chatbot';

const menuData = [
  // Entrantes
  {
    name: "Saffron Arancini Fried Risotto Ball",
    description: "Bola de risotto frita con queso cheddar blanco...",
    allergens: ["Gluten", "Lácteos", "Frutos secos"],
    category: "Entrante",
    image_url: "/images/SaffronAranciniFriedRisottoBall.jpg"
  },
  {
    name: "Caviar Indulgence",
    description: "Dos tipos de caviar disponibles...",
    allergens: [],
    category: "Entrante",
    image_url: "/images/CaviarIndulgence.jpg"
  },
  {
    name: "Fritto Misto with Tartare Sauce",
    description: "Calamares, gambas, mejillones...",
    allergens: ["Gluten", "Lácteos", "Huevo", "Mariscos"],
    category: "Entrante",
    image_url: "/images/FrittoMistowithTartareSauce.jpg"
  },
  {
    name: "Shrimp Cocktail",
    description: "Aguacate en cubos, gajos de aguacate fritos...",
    allergens: ["Gluten", "Lácteos", "Huevo", "Mariscos"],
    category: "Entrante",
    image_url: "/images/ShrimpCocktail.jpg"
  },
  {
    name: "Vitello Tonnato Bruschetta",
    description: "Tostada de pan de masa madre crujiente...",
    allergens: ["Gluten", "Lácteos", "Pescado", "Huevo"],
    category: "Entrante",
    image_url: "/images/VitelloTonnatoBruschetta.jpg"
  },
  {
    name: "Cheese Monger Selection",
    description: "Selección de 5 tipos de queso...",
    allergens: ["Gluten", "Lácteos", "Cacahuetes", "Frutos secos"],
    category: "Entrante",
    image_url: "/images/CheeseMongerSelection.jpg"
  },
  {
    name: "Cold Mezze Heritage",
    description: "Selección de mezze fríos tradicionales.",
    allergens: [],
    category: "Entrante",
    image_url: "/images/ColdMezzeHeritage.jpg"
  },

  // Ensaladas
  {
    name: "Burrata Salad",
    description: "Ensalada con burrata, tomate heirloom...",
    allergens: ["Lácteos"],
    category: "Ensalada",
    image_url: "/images/BurataSalad.jpg"
  },
  {
    name: "Caesar Salad",
    description: "Ensalada César con cesta de parmesano.",
    allergens: ["Lácteos"],
    category: "Ensalada",
    image_url: "/images/CaesarSaladwithParmessanBasket.jpg"
  },
  {
    name: "Nicoise Salad",
    description: "Ensalada con atún fresco de aleta azul...",
    allergens: ["Lácteos", "Pescado", "Huevo", "Mostaza"],
    category: "Ensalada",
    image_url: "/images/NicoiseSalad.jpg"
  },

  // Sandwiches
  {
    name: "Truffle Croc Monsieur",
    description: "Ternera ahumada, pasta de trufa, queso gruyere...",
    allergens: ["Gluten", "Lácteos", "Huevo", "Champiñones"],
    category: "Sandwich",
    image_url: "/images/TruffleCrocMonsieur.jpg"
  },
  {
    name: "Wagyu Steak Sandwich",
    description: "Pan ciabatta, cebollas confitadas...",
    allergens: ["Gluten", "Lácteos", "Cebolla", "Mostaza"],
    category: "Sandwich",
    image_url: "/images/WagyuSteakSandwich.jpg"
  },
  {
    name: "Grilled Zaatar Focaccia Bread",
    description: "Pan focaccia a la parrilla con zaatar...",
    allergens: ["Gluten", "Lácteos", "Pescado"],
    category: "Sandwich",
    image_url: "/images/GrilledZaatarFocacciaBread.jpg"
  },

  // Postres
  {
    name: "Pistachio Um Ali",
    description: "Postre de sabor medio dulce.",
    allergens: ["Lácteos", "Frutos secos"],
    category: "Postre",
    image_url: "/images/PistachioUmAli.jpg"
  },
  {
    name: "Ginori Baba",
    description: "Inspirado en el postre Rum Baba...",
    allergens: ["Gluten", "Lácteos", "Frutos secos"],
    category: "Postre",
    image_url: "/images/GinoriBaba.jpg"
  },
  {
    name: "Vanilla Creme Brulee",
    description: "Crema brulee de vainilla con mezcla de bayas...",
    allergens: ["Gluten", "Lácteos", "Huevo"],
    category: "Postre",
    image_url: "/images/VanillaCremeBrulee.jpg"
  },
  {
    name: "Table Side Tiramisu",
    description: "Lady Finger, salsa de café, mascarpone...",
    allergens: ["Gluten", "Lácteos", "Huevo"],
    category: "Postre",
    image_url: "/images/TableSideTiramisufinal.jpg"
  },

  // Tapas
  {
    name: "Beef Air Dryer Beef Bresaola Cecina de Leon",
    description: "Cecina de León, jerky, pan con tomate.",
    allergens: ["Gluten"],
    category: "Tapas",
    image_url: "/images/BeefAirDryerBresaola.jpg"
  }
];

// 🍷 Bebidas (solo para el chatbot, no se renderiza)
const drinkData = [
 {
      "name": "Regal Mary",
      "description": "Jugo de tomate, jugo de limón, cardamomo, clavos, dátiles, mezcla Bloody Mary de Riyadh, polvo de zumaque. Inspirado en la realeza saudí.",
      "category": "Cóctel",
      "tags": ["sin alcohol", "especiado", "tradicional"]
    },
    {
      "name": "Red Snapper",
      "description": "Jugo de limón, jugo de tomate, salsa Worcestershire, salsa Tabasco, sal, pimienta, pimienta de cayena.",
      "category": "Cóctel",
      "tags": ["clásico", "picante"]
    },
    {
      "name": "Royal Riyadh",
      "description": "Cordial de frambuesa con salvia, fresa, albahaca, vainilla y ginger ale. 670 kcal.",
      "category": "Mocktail",
      "tags": ["afrutado", "sin alcohol"]
    },
    {
      "name": "Lady Astor",
      "description": "Vino blanco, sirope de arándano, sirope de durazno blanco, limón. 254 kcal.",
      "category": "Cóctel",
      "tags": ["afrutado"]
    },
    {
      "name": "Day & Night",
      "description": "London Dry, limón, sirope de albahaca, uvas verdes, vino tinto. 523 kcal.",
      "category": "Cóctel",
      "tags": ["cítrico", "refrescante"]
    },
    {
      "name": "Lost Flower in Riyadh",
      "description": "Rosso, agua de rosas, Fever Tree Rose, jugo de toronja, limonada. 364 kcal.",
      "category": "Cóctel",
      "tags": ["floral"]
    },
    {
      "name": "Mandarine Dunes",
      "description": "London Dry, jugo de limón, mandarina, sirope de agave. 254 kcal.",
      "category": "Cóctel",
      "tags": ["cítrico"]
    },
    {
      "name": "The Bravery",
      "description": "Caña especiada, jugo de naranja, sirope de agave, jugo de limón, Tabasco. 175 kcal.",
      "category": "Cóctel",
      "tags": ["picante"]
    },
    {
      "name": "Wadi Sunset",
      "description": "Spritz italiano, sirope de maracuyá, jugo de naranja. 543 kcal.",
      "category": "Cóctel",
      "tags": ["dulce", "tropical"]
    },
    {
      "name": "Hibiscus Iced Tea",
      "description": "Té de hibisco, jugo de granada, limón.",
      "category": "Té Helado",
      "tags": ["herbal", "refrescante"]
    },
    {
      "name": "Refreshing Mint Iced Tea",
      "description": "Menta, limón, vainilla.",
      "category": "Té Helado",
      "tags": ["menta"]
    },
    {
      "name": "Peach Iced Tea",
      "description": "Té negro, durazno, limón.",
      "category": "Té Helado",
      "tags": ["frutal"]
    },
    {
      "name": "Royal Highness Iced Tea",
      "description": "Royal breakfast, limón, vainilla.",
      "category": "Té Helado",
      "tags": ["refinado"]
    },
    {
      "name": "Green Jasmine Iced Tea",
      "description": "Té jazmín, manzana verde, limón, flor de saúco.",
      "category": "Té Helado",
      "tags": ["japonés", "verde"]
    },
    {
      "name": "Matcha Latte",
      "description": "Latte de té verde japonés matcha.",
      "category": "Especialidad de Café/Té",
      "tags": ["energizante", "verde"]
    },
    {
      "name": "Brown Sugar Latte",
      "description": "Latte con azúcar moreno.",
      "category": "Especialidad de Café/Té",
      "tags": ["dulce"]
    },
    {
      "name": "Rose Latte",
      "description": "Latte con esencia de rosa.",
      "category": "Especialidad de Café/Té",
      "tags": ["floral"]
    },
    {
      "name": "Turmeric Latte",
      "description": "Latte con cúrcuma.",
      "category": "Especialidad de Café/Té",
      "tags": ["antiinflamatorio"]
    },
    {
      "name": "Iced Spanish Latte",
      "description": "Latte helado con leche condensada.",
      "category": "Iced Coffee",
      "tags": ["dulce"]
    },
    {
      "name": "Rooibos Heel",
      "description": "Rooibos, cáscara de cítricos y naranja.",
      "category": "Té",
      "tags": ["herbal"]
    },
    {
      "name": "Chamomile Breeze",
      "description": "Manzanilla, hibisco, hierba limón, escaramujo, menta, cáscara de naranja.",
      "category": "Té",
      "tags": ["relajante"]
    },
    {
      "name": "Currant Dream",
      "description": "Té verde con grosellas rojas.",
      "category": "Té Verde",
      "tags": ["frutal"]
    },
    {
      "name": "Classic Jasmine",
      "description": "Té verde jazmín con manzana verde, limón y flor de saúco.",
      "category": "Té Verde",
      "tags": ["verde", "floral"]
    },
    {
      "name": "Caramel Macchiato",
      "description": "Espresso con leche y caramelo.",
      "category": "Especialidad de Café",
      "tags": ["café", "dulce"]
    }
];

function App() {
  const groupedData = menuData.reduce((acc, dish) => {
    if (!acc[dish.category]) acc[dish.category] = [];
    acc[dish.category].push(dish);
    return acc;
  }, {});

  return (
    <div className="App">
      <div className="chef-header">
        <img src="/chef-raigt.png" alt="Chef Raigt" className="chef-avatar" />
        <h1>Bonjour! I am Chef Raigt 🍽️</h1>
      </div>
      <p>Bienvenido a nuestra experiencia culinaria. ¿Qué desea saber del menú, monsieur/mademoiselle?</p>

      <div className="menu-section">
        {Object.entries(groupedData).map(([category, dishes]) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>
            {dishes.map((dish) => (
              <div key={dish.name} className="dish-card">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <p><strong>Allergens:</strong> {dish.allergens.join(', ')}</p>
                <img src={dish.image_url} alt={dish.name} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <Chatbot />
    </div>
  );
}

export default App;
