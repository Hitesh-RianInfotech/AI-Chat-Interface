import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-6">
      <div className="max-w-2xl text-center space-y-6 bg-white p-10 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-600 tracking-tight">
          Welcome Sakshi
        </h1>

        <p className="text-gray-600 text-lg">
          This intelligent assistant can help you go to the like you want to see , so just click on the button below and you will be redirected to the page you want to see.
        </p>

     
        <a
          href="https://www.figma.com/proto/AVpsCszzDzEY58fqgwJ0dK/Credflow-home-workplace?page-id=190%3A1150&node-id=224-965&viewport=465%2C144%2C0.1&t=KMfKwLxesXdmySgp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=224%3A965"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition"
        >
          🚀 Open Link
        </a>
      </div>
    </main>
  );
}
