"use client";
import { useChatStore } from "../lib/store";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useEffect, useRef } from "react";

export default function ChatWindow({ isTyping }) {
  const messages = useChatStore((state) => state.messages);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 bg-white rounded-xl">
      {messages.length === 0 && (
        <div className="text-center text-gray-400 text-sm pt-8">
          Start a conversation by typing a message below 👇
        </div>
      )}

      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {isTyping && <TypingIndicator />}
      <div ref={ref} />
    </div>
  );
}
