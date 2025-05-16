"use client";

export default function TypingIndicator() {
  return (
    <div className="flex items-center px-4 py-2 text-sm text-gray-500 animate-pulse">
      <div className="flex space-x-1 mr-2">
        <span className="block w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
        <span className="block w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></span>
        <span className="block w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></span>
      </div>
      <span className="italic">Assistant is typing...</span>
    </div>
  );
}
