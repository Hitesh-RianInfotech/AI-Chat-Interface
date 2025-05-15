"use client";
import { useEffect, useState } from "react";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { useChatStore } from "../lib/store";

export default function ChatPage() {
  const [isTyping, setTyping] = useState(false);
  const loadMessages = useChatStore((s) => s.loadMessages);
  const clearMessages = useChatStore((s) => s.clearMessages);

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background text-gray-900 dark:text-gray-100">
  <div className="w-full max-w-4xl mx-auto flex flex-col flex-1 px-4">
    <header className="py-4 mb-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold text-primary">🤖 AI Assistant</h1>
      <button
        onClick={clearMessages}
        className="text-sm bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-md transition"
      >
        Clear Chat
      </button>
    </header>

    <main className="flex-1 overflow-hidden rounded-xl shadow-lg bg-card dark:bg-gray-900 p-4">
      <ChatWindow isTyping={isTyping} />
    </main>

    <footer className="pt-4 pb-6">
      <MessageInput setTyping={setTyping} />
    </footer>
  </div>
</div>

  );
}
