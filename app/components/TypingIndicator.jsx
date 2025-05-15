"use client";

export default function TypingIndicator() {
  return (
<div className="flex items-center space-x-1 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
  <span className="animate-bounce">•</span>
  <span className="animate-bounce delay-75">•</span>
  <span className="animate-bounce delay-150">•</span>
  <span className="ml-2">Assistant is typing...</span>
</div>

  );
}
