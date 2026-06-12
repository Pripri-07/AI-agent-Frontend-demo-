import { X, HeartPulse } from "lucide-react";

function ChatHeader({ closeChat }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <HeartPulse size={22} />
          </div>

          <div>
            <h2 className="font-bold text-lg">
              RNA
            </h2>

            <p className="text-xs text-blue-100">
              Medical Device Intelligence Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-xs">Live</span>
          </div>

          <button
            onClick={closeChat}
            className="hover:bg-white/20 p-1 rounded"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;