import { HeartPulse } from "lucide-react";
import MessageBubble from "./messagebubble";
import QuickActions from "./quickaction";

function ChatBody({
  messages,
  sendQuickAction,
}) {
  return (
    <div className="flex-1 overflow-y-auto p-4">

      {messages.length <= 1 && (
        <div className="mb-6">

          <div className="text-center py-4">

            <div className="flex justify-center mb-4">

              <div
                className="
                w-16
                h-16
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                "
              >
                <HeartPulse
                  size={32}
                  className="text-blue-600"
                />
              </div>

            </div>

            <h3 className="font-bold text-lg">
              Welcome to CareBot
            </h3>

            <p className="text-sm text-gray-500 mt-2 mb-4">
              CareBot can assist with device status,
              historical records, alerts,
              and troubleshooting insights.
            </p>

          </div>

          <QuickActions
            sendQuickAction={sendQuickAction}
          />

        </div>
      )}

      <div className="space-y-4 mt-4">

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

      </div>

    </div>
  );
}

export default ChatBody;