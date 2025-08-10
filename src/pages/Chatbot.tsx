import React, { useState, useRef } from "react";

const presetPrompts = [
  { prompt: "Summarize the work done by all partners.", response: "Partners are engaged in diverse activities: Pratham focuses on youth employability; British Asian Trust on community well-being; Kabil on sustainable livelihoods; Transform Tarde Prasari on community empowerment; ECS on clean energy; Nazdeek on legal rights; Swaniti Initiatives on access to entitlements; FPAI on reproductive health; Sanhita on workplace safety; Baikunthapur Tarun Sangha on community resilience; Indraprastha Srijan Welfare Society on social issues; Rupantaran Foundation on collective action; Aangan on child protection; Liver Foundation on health practices; Deutsche Welthungerhilfe on livelihoods; IPAS on reproductive health; Mukti on women's empowerment; DRCSC Sunderbaas on climate-resilient agriculture; Dignity Alliance International on migrant rights; SEWA Bharat on women in the unorganized sector; CPF on agroecological practices; and Sign of Hope + DRCSC on indigenous community empowerment." },
  { prompt: "Which partners work in the area of women empowerment?", response: "The partners working in the area of women empowerment are: British Asian Trust, Transform Tarde Prasari, Nazdeek, Sanhita, Baikunthapur Tarun Sangha, Indraprastha Srijan Welfare Society, Rupantaran Foundation, Liver Foundation, IPAS, Mukti, SEWA Bharat and Sign of Hope + DRCSC." },
];


const TYPING_SPEED = 18; // ms per character
const THINKING_TIME = 1200; // ms before typing starts

const initialUserPrompt = { from: "user", text: "What specific program activities, such as trade meetings and SSK camps, may have contributed to the change in behavior of the members towards accessing their PF benefits?"}
const initialBotResponse = { from: "bot", text: "Trade meetings and SSK camps may have contributed to the change in behavior of the members towards accessing their PF benefits by raising awareness about the importance of knowing their UAN numbers. After awareness sessions and camps on PF, members collectively approached mahajans for their UAN numbers." };

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState([initialUserPrompt, initialBotResponse]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const [showPresets, setShowPresets] = useState(true);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking || typingMessage) return;
    setShowPresets(false);
    handleUserMessage(input);
    setInput("");
  };

  const handleUserMessage = (userInput: string) => {
    setMessages(prev => [...prev, { from: "user", text: userInput }]);
    setIsThinking(true);

    // Find preset or fallback
    const preset = presetPrompts.find(
      p => p.prompt.toLowerCase() === userInput.toLowerCase()
    );
    const botResponse = preset
      ? preset.response
      : "I'm just a demo bot. You said: " + userInput;

    // Show spinner for a while, then type out the response
    setTimeout(() => {
      setIsThinking(false);
      typeBotResponse(botResponse);
    }, THINKING_TIME);
  };

  // Types out the bot response letter by letter
  const typeBotResponse = (fullText: string) => {
    setTypingMessage("");
    let i = 0;
    function typeNext() {
      setTypingMessage(fullText.slice(0, i + 1));
      i++;
      if (i < fullText.length) {
        typingTimeout.current = setTimeout(typeNext, TYPING_SPEED);
      } else {
        setMessages(prev => [...prev, { from: "bot", text: fullText }]);
        setTypingMessage(null);
      }
    }
    typeNext();
  };

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, []);

  const handlePresetClick = (preset: typeof presetPrompts[0]) => {
    if (isThinking || typingMessage) return;
    setShowPresets(false);
    setInput("");
    handleUserMessage(preset.prompt);
  };

  const handleClearChat = () => {
    setMessages([]);
    setShowPresets(true);
    setInput("");
    setIsThinking(false);
    setTypingMessage(null);
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        paddingLeft: 240,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "2rem 10vw",
          display: "flex",
          flexDirection: "column",
          minHeight: 480,
          height: "100vh",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            position: "relative"
          }}
        >
          <div style={{ flex: 1 }} />
          <h3
            style={{
              color: "#03045E",
              fontWeight: 700,
              marginBottom: 0,
              flex: 1,
              textAlign: "center"
            }}
          >
            Chatbot
          </h3>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleClearChat}
              style={{
                background: "none",
                border: "none",
                color: "#00B4D8",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                padding: "0.3rem 1rem",
                borderRadius: "0.5rem",
                transition: "background 0.2s"
              }}
              title="Clear chat"
            >
              <i className="bi bi-trash" style={{ marginRight: 6 }} />
              Clear chat
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "1rem",
            paddingRight: "0.5rem"
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                marginBottom: 8
              }}
            >
              <div
                style={{
                  background: msg.from === "user" ? "#e9f2ff" : "#f0f4fa",
                  color: "#22223b",
                  borderRadius: "1rem",
                  padding: "0.75rem 1.1rem",
                  maxWidth: "60%",
                  fontSize: "1rem",
                  textAlign: "left" // <-- left align bot response text
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {/* Spinner and typing effect */}
          {isThinking && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: 8 }}>
              <span className="spinner-border spinner-border-sm" style={{ color: "#00B4D8" }} role="status" />
              <span style={{ color: "#00B4D8", fontWeight: 500 }}>Thinking...</span>
            </div>
          )}
          {typingMessage !== null && (
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 8
            }}>
              <div
                style={{
                  background: "#f0f4fa",
                  color: "#22223b",
                  borderRadius: "1rem",
                  padding: "0.75rem 1.1rem",
                  maxWidth: "60%",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  letterSpacing: "0.01em",
                  textAlign: "left" // <-- left align typing effect
                }}
              >
                {typingMessage}
                <span className="typing-cursor" style={{ opacity: 0.6 }}>|</span>
              </div>
            </div>
          )}
        </div>
        {/* Preset Prompts near input, only when showPresets is true */}
        {showPresets && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
            {presetPrompts.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePresetClick(preset)}
                disabled={isThinking || typingMessage !== null}
                style={{
                  background: "#e9f2ff",
                  color: "#023E8A",
                  border: "1px solid #90e0ef",
                  borderRadius: "1.5rem",
                  padding: "0.5rem 1.2rem",
                  fontWeight: 500,
                  fontSize: "1rem",
                  cursor: isThinking || typingMessage !== null ? "not-allowed" : "pointer",
                  opacity: isThinking || typingMessage !== null ? 0.6 : 1,
                  transition: "background 0.2s"
                }}
              >
                {preset.prompt}
              </button>
            ))}
          </div>
        )}
        <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isThinking || typingMessage !== null}
            style={{
              flex: 1,
              border: "1px solid #e3e6f0",
              borderRadius: "0.75rem",
              padding: "0.6rem 1rem",
              fontSize: "1rem",
              outline: "none",
              background: isThinking || typingMessage !== null ? "#f0f4fa" : "#fff"
            }}
          />

          <button
            type="submit"
            disabled={isThinking || typingMessage !== null}
            style={{
              background: "#03045E",
              color: "#fff",
              border: "none",
              borderRadius: "0.75rem",
              padding: "0.6rem 1.3rem",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: isThinking || typingMessage !== null ? "not-allowed" : "pointer",
              opacity: isThinking || typingMessage !== null ? 0.6 : 1,
              transition: "background 0.2s"
            }}
          >
            <i className="bi bi-arrow-up-circle-fill" style={{ fontSize: "1.2rem" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;