"use client";

export default function DefineCard({ data }) {
  if (!data) {
    return (
      <div className="text-sm text-center text-gray-400 py-4">
        No definition found.
      </div>
    );
  }

  return (
    <div className="p-5 bg-green-50 border border-green-200 rounded-xl shadow-sm text-sm">
      <h4 className="text-lg font-semibold text-green-700 mb-1 capitalize">
        {data.word}
      </h4>
      <p className="italic text-xs text-green-500 mb-2">{data.partOfSpeech}</p>
      <p className="text-gray-800 mb-3 leading-relaxed">{data.definition}</p>
      {data.example && (
        <div className="text-gray-600 text-sm border-l-4 border-blue-300 pl-3 italic">
          “{data.example}”
        </div>
      )}
    </div>
  );
}
