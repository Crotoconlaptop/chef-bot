import { FullPageChat } from "flowise-embed-react";

function Chatbot() {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <FullPageChat
        chatflowid="5473a1c9-fb53-4a21-966c-80ddd4d9fc1f"
        apiHost="https://flowiseai-railway-production-57be.up.railway.app"
      />
    </div>
  );
}

export default Chatbot;
