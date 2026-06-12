function TypingIndicator() {
  return (
    <div className="flex gap-1 p-2 ml-10">

      <div className="
      w-2
      h-2
      bg-gray-400
      rounded-full
      animate-bounce
      "></div>

      <div className="
      w-2
      h-2
      bg-gray-400
      rounded-full
      animate-bounce
      delay-100
      "></div>

      <div className="
      w-2
      h-2
      bg-gray-400
      rounded-full
      animate-bounce
      delay-200
      "></div>

    </div>
  );
}

export default TypingIndicator;