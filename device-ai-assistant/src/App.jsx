import { useState } from "react";
import ChatButton from "./components/chatbutton";
import ChatWidget from "./components/chatwidget";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Medical Device Portal
        </h1>

        <p className="mt-4 text-gray-600">
          AI-powered device monitoring assistant
        </p>
      </div>

      {open && (
        <ChatWidget
          closeChat={() => setOpen(false)}
        />
      )}

      <ChatButton onClick={() => setOpen(true)} />
    </div>
  );
}

export default App;