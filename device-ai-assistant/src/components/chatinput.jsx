import { Send } from "lucide-react";

function ChatInput({
  message,
  setMessage,
  sendMessage
}) {
  return (
    <div className="border-t p-3 flex gap-2">

      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask about your device..."
        className="
        flex-1
        border
        rounded-full
        px-4
        py-2"
      />

      <button
        onClick={sendMessage}
        className="
        bg-blue-600
        text-white
        p-2
        rounded-full"
      >
        <Send size={18} />
      </button>

    </div>
  );
}

export default ChatInput;