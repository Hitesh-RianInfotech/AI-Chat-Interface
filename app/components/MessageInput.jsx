"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useChatStore } from "../lib/store";
import plugins from "../plugins";

export default function MessageInput({ setTyping }) {
  const [text, setText] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSubmit = async () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage = {
      id: uuidv4(),
      sender: "user",
      content: trimmed,
      type: "text",
      timestamp: new Date().toISOString(),
    };

    addMessage(userMessage);
    setText("");

    const matchedPlugin = plugins.find((plugin) => plugin.match(trimmed));

    if (matchedPlugin) {
      setTyping(true);
      try {
        const pluginData = await matchedPlugin.execute(trimmed);
        addMessage({
          id: uuidv4(),
          sender: "assistant",
          content: "",
          type: "plugin",
          pluginName: matchedPlugin.name,
          pluginData,
          timestamp: new Date().toISOString(),
        });
      } catch (err) {
        addMessage({
          id: uuidv4(),
          sender: "assistant",
          content: "⚠️ Failed to run plugin.",
          type: "text",
          timestamp: new Date().toISOString(),
        });
      }
      setTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
   <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-300 dark:border-gray-700 focus-within:ring-2 ring-primary transition">
  <textarea
    value={text}
    onChange={(e) => setText(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Ask something or try /define love"
    rows={1}
    className="flex-1 resize-none px-4 py-3 text-sm bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
  />
  <button
    onClick={handleSubmit}
    className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition"
  >
    Send
  </button>
</div>
<div className="text-xs text-gray-500 mt-2 dark:text-gray-400">
  Try: <code>/weather Tokyo</code> or <code>/calc 99+1</code>
</div>

</>
  );
}
