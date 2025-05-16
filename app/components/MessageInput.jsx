"use client";
import { useState } from "react";
import { useChatStore } from "../lib/store";
import plugins from "../plugins";
import { createMessage, parseToCommand } from "../lib/utils";

export default function MessageInput({ setTyping }) {
  const [text, setText] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSubmit = async () => {
    const rawInput = text.trim();
    if (!rawInput) return;

    const parsedInput = parseToCommand(rawInput);

    const userMessage = createMessage({
      sender: "user",
      content: rawInput,
    });
    addMessage(userMessage);
    setText("");

    const matchedPlugin = plugins.find((plugin) => plugin.match(parsedInput));

    if (matchedPlugin) {
      setTyping(true);
      try {
        const pluginData = await matchedPlugin.execute(parsedInput);
        const pluginMessage = createMessage({
          sender: "assistant",
          content: "",
          type: "plugin",
          pluginName: matchedPlugin.name,
          pluginData,
        });
        addMessage(pluginMessage);
    } catch (err) {
  const errorMessage = createMessage({
    sender: "assistant",
    content: `⚠️ ${err.message || String(err)}`,
  });
  addMessage(errorMessage);
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
      <div className="relative flex items-center bg-white rounded-xl shadow-sm border border-gray-300 focus-within:ring-2 ring-blue-500 transition">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message or try /define love"
          rows={1}
          className="flex-1 resize-none px-4 py-3 text-sm text-gray-800 bg-transparent focus:outline-none placeholder-gray-400"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-xl hover:bg-blue-700 transition font-medium"
        >
          Send
        </button>
      </div>
      <div className="text-xs text-gray-400 mt-2 px-1">
        Try: <code className="text-gray-600">/weather Tokyo</code> or{" "}
        <code className="text-gray-600">/calc 99+1</code>
      </div>
    </>
  );
}
