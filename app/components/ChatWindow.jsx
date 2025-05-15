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
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50 dark:bg-gray-950">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={ref} />
    </div>
  );
  
}
