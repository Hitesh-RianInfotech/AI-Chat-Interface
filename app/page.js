import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-6">
      <div className="max-w-2xl text-center space-y-6 bg-white p-10 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-600 tracking-tight">
          Welcome to Your AI Assistant
        </h1>

        <p className="text-gray-600 text-lg">
          This intelligent assistant can help you calculate expressions,
          define words, check the weather, and more — all through a simple
          chat interface.
        </p>

        <p className="text-gray-500 text-sm">
          Just type commands like <code className="bg-gray-100 px-2 py-0.5 rounded">/define love</code>,{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded">/weather Tokyo</code>, or{" "}
          <code className="bg-gray-100 px-2 py-0.5 rounded">/calc 99+1</code> and get instant results.
        </p>

        <Link
          href="/chat"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition"
        >
          🚀 Start Chatting
        </Link>
      </div>
    </main>
  );
}
