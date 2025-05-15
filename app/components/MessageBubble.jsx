"use client";
import PluginCard from "./PluginCard";
export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} px-1`}>
  <div
    className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm shadow transition-all ${
      isUser
        ? "bg-primary text-white rounded-br-none"
        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
    }`}
  >
    {message.type === "plugin" ? (
      <PluginCard pluginName={message.pluginName} pluginData={message.pluginData} />
    ) : (
      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
    )}
  </div>
</div>

  );
}
