import { useEffect, useRef, useState } from 'react';
import { FullPageChat } from "flowise-embed-react";

function Chatbot() {
  const chatRef = useRef();
  const [dishData, setDishData] = useState(null);

  useEffect(() => {
    const handleBotResponse = (event) => {
      const data = event?.data;

      if (data?.type === 'flowise-chat-response') {
        const message = data.payload;

        try {
          const parsed = JSON.parse(message); // Intentamos parsear JSON
          if (parsed?.image_url) {
            setDishData(parsed); // Si trae imagen, lo guardamos
          }
        } catch (err) {
          // Si no es JSON, lo ignoramos
          console.log("Texto plano del bot:", message);
        }
      }
    };

    window.addEventListener('message', handleBotResponse);
    return () => window.removeEventListener('message', handleBotResponse);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {/* Tu chat original, intacto ✔️ */}
      <div style={{ height: "600px", width: "100%" }}>
        <FullPageChat
          ref={chatRef}
          chatflowid="3a62603b-3342-4ad1-8b24-06f1905a5b2a"
          apiHost="https://oscarchatbot.duckdns.org"
        />
      </div>

      {/* Mostramos la imagen del plato si existe */}
      {dishData && (
        <div className="dish-card">
          <h2>{dishData.name}</h2>
          <p>{dishData.description}</p>
          <p><strong>Allergens:</strong> {dishData.allergens}</p>
          <img
            src={dishData.image_url}
            alt={dishData.name}
            style={{ maxWidth: '300px', borderRadius: '8px', marginTop: '12px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
