"use client";
import PluginCard from "./PluginCard";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} px-2`}>
      <div
        className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm shadow-sm transition-all ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        {message.type === "plugin" ? (
          <PluginCard
            pluginName={message.pluginName}
            pluginData={message.pluginData}
          />
        ) : (
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        )}
      </div>
    </div>
  );
}
