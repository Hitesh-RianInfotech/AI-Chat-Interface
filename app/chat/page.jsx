"use client";
import { useEffect, useState } from "react";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { useChatStore } from "../lib/store";

export default function ChatPage() {
  const [isTyping, setTyping] = useState(false);
  const loadMessages = useChatStore((s) => s.loadMessages);
  const clearMessages = useChatStore((s) => s.clearMessages);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#f9fafb] text-gray-900">
      <div className="w-full max-w-3xl mx-auto flex flex-col h-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="py-5 flex-shrink-0 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold tracking-tight text-blue-600">
              🤖 AI Assistant
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={clearMessages}
                className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-md transition font-medium"
              >
                Clear Chat
              </button>
              <button
                onClick={() => setShowHelp((prev) => !prev)}
                className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-md transition font-medium"
              >
                {showHelp ? "Hide" : "Show"} Instructions
              </button>
            </div>
          </div>
        </header>

        {/* Instructions */}
        {showHelp && (
          <section className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm text-sm text-gray-700">
            <h2 className="font-semibold text-blue-800 mb-2">
              💡 Try these prompts:
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li><code>/weather Tokyo</code> — Get current weather</li>
              <li><code>/calc 45 * 11 + 2</code> — Do a calculation</li>
              <li><code>/define empathy</code> — Get a word definition</li>
              <li>weather in Paris</li>
              <li>calculate 123 + 456</li>
              <li>define innovation</li>
            </ul>
          </section>
        )}

        {/* Chat */}
        <main className="flex-1 overflow-y-auto rounded-2xl shadow-lg bg-white p-6 border border-gray-200 my-4">
          <ChatWindow isTyping={isTyping} />
        </main>

        {/* Footer */}
        <footer className="pt-2 pb-6 flex-shrink-0">
          <MessageInput setTyping={setTyping} />
        </footer>
      </div>
    </div>
  );
}
