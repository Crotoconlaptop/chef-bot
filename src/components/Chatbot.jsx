import { useEffect, useRef, useState } from 'react';
import { BubbleChat } from "flowise-embed-react";

function Chatbot() {
  const chatRef = useRef();
  const [dishData, setDishData] = useState(null);

  useEffect(() => {
    const handleBotResponse = (event) => {
      const data = event?.data;

      if (data?.type === 'flowise-chat-response') {
        const message = data.payload;

        try {
          const parsed = JSON.parse(message);
          if (parsed?.image_url) {
            setDishData(parsed);
          }
        } catch (err) {
          console.log("Texto plano del bot:", message);
        }
      }
    };

    window.addEventListener('message', handleBotResponse);
    return () => window.removeEventListener('message', handleBotResponse);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {/* Chat flotante personalizado con estilo gastronómico */}
      <BubbleChat
        ref={chatRef}
        chatflowid="3a62603b-3342-4ad1-8b24-06f1905a5b2a"
        apiHost="https://oscarchatbot.duckdns.org"
        theme={{
          button: {
            backgroundColor: '#b71c1c',
            right: 20,
            bottom: 20,
            size: 54,
            dragAndDrop: false,
            iconColor: '#fff3e0',
            customIconSrc: '/chef-raigt.png',
            autoWindowOpen: {
              autoOpen: true,
              openDelay: 1,
              autoOpenOnMobile: true
            }
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: '¿Le puedo sugerir un platillo del menú? 🍽️',
            tooltipBackgroundColor: '#8b0000',
            tooltipTextColor: '#fff3e0',
            tooltipFontSize: 15
          },
          chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Chef Raigt',
            titleAvatarSrc: '/chef-raigt.png',
            welcomeMessage: 'Bonjour! Soy el Chef Raigt. ¿Desea conocer nuestros platillos?',
            backgroundColor: '#fffdf8',
            height: 640,
            width: 420,
            fontSize: 15,
            starterPrompts: [
              "¿Qué tipos de ensalada tienes?",
              "Empecemos por los sandwiches!! muestrame lo que tienes",
              "Primero las bebidas, ¿Que bebidas tienes disponible?"
            ],
            textInput: {
              placeholder: "Pregunte sobre un platillo, alergias o sugerencias...",
              backgroundColor: '#fff8f0',
              textColor: '#5d4037',
              sendButtonColor: '#b71c1c',
              autoFocus: true
            },
            botMessage: {
              backgroundColor: '#fff8f0',
              textColor: '#5d4037',
              showAvatar: true,
              avatarSrc: '/chef-raigt.png'
            },
            userMessage: {
              backgroundColor: '#b71c1c',
              textColor: '#fff3e0',
              showAvatar: false
            },
            footer: {
              textColor: '#8b0000',
              text: 'Presentado por',
              company: 'Chef Raigt',
              companyLink: '#'
            }
          }
        }}
      />

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

