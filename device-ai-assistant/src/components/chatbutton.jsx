import { Bot } from "lucide-react";

function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      fixed
      bottom-6
      right-6
      w-16
      h-16
      rounded-full
      bg-blue-600
      text-white
      shadow-xl
      flex
      items-center
      justify-center
      hover:scale-110
      transition"
    >
      <Bot size={28} />
    </button>
  );
}

export default ChatButton;