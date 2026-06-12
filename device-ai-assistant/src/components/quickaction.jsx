function QuickActions({ sendQuickAction }) {
  const actions = [
    {
      title: "Current Status",
      icon: "🟢",
    },
    {
      title: "Device History",
      icon: "📋",
    },
    {
      title: "Active Alerts",
      icon: "⚠️",
    },
    {
      title: "Troubleshooting",
      icon: "🔧",
    },
  ];

  return (
    <div className="space-y-2">

      {actions.map((action) => (
        <button
          key={action.title}
          onClick={() =>
            sendQuickAction(action.title)
          }
          className="
          w-full
          text-left
          p-4
          rounded-xl
          border
          bg-white
          hover:bg-blue-50
          hover:border-blue-300
          transition
          "
        >
          <div className="flex items-center gap-3">
            <span>{action.icon}</span>
            <span>{action.title}</span>
          </div>
        </button>
      ))}

    </div>
  );
}

export default QuickActions;