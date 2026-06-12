import { useState, useRef, useEffect } from "react";
import ChatHeader from "./chatheader";
import ChatBody from "./chatbody";
import ChatInput from "./chatinput";
import DeviceStatusMini from "./devicestatusmini";
import TypingIndicator from "./typingindicator";

function ChatWidget({ closeChat }) {
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I can help you with device status, history, alerts, and troubleshooting.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const generateResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("status")) {
      return "Current device status is Healthy. Battery level is 84% and all sensors are operating normally.";
    }

    if (msg.includes("history")) {
      return "The device underwent preventive maintenance on 12 May 2026 and received a firmware update on 28 May 2026.";
    }

    if (msg.includes("alert")) {
      return "There is one active alert: Sensor calibration is recommended within the next 7 days.";
    }

    if (msg.includes("trouble")) {
      return "No critical issues detected. If you're experiencing abnormal behavior, please specify the component.";
    }

    return "I found information related to your request. Device systems appear to be functioning normally.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userText = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);

    setMessage("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: generateResponse(userText),
        },
      ]);

      setTyping(false);
    }, 1200);
  };

  const sendQuickAction = (action) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: action,
      },
    ]);

    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: generateResponse(action),
        },
      ]);

      setTyping(false);
    }, 1000);
  };

  return (
    <div
      className="
        fixed
        bottom-24
        right-6
        w-[420px]
        h-[700px]
        bg-white
        rounded-[28px]
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        border
        border-gray-100
        overflow-hidden
        flex
        flex-col
        "
    >
      <ChatHeader closeChat={closeChat} />

      <DeviceStatusMini />

      <ChatBody
        messages={messages}
        sendQuickAction={sendQuickAction}
      />

      {typing && (
        <div className="px-4 pb-2">
          <TypingIndicator />
        </div>
      )}

      <div ref={bottomRef}></div>

      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default ChatWidget;