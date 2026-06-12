import { HeartPulse } from "lucide-react";

function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="
          bg-blue-600
          text-white
          px-4
          py-3
          rounded-2xl
          max-w-[80%]
          shadow
          "
        >
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">

      <div
        className="
        h-8
        w-8
        rounded-full
        bg-blue-100
        flex
        items-center
        justify-center
        flex-shrink-0
        "
      >
        <HeartPulse
          size={18}
          className="text-blue-600"
        />
      </div>

      <div
        className="
        bg-gray-100
        rounded-2xl
        px-4
        py-3
        max-w-[80%]
        shadow-sm
        "
      >
        {text}
      </div>

    </div>
  );
}

export default MessageBubble;