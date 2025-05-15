"use client";

export default function DefineCard({ data }) {
  if (!data) return <div className="text-sm">No definition found.</div>;

  return (
    <div className="p-4 rounded shadow text-sm">
      <h4 className="font-bold text-indigo-600 mb-1">{data.word}</h4>
      <p className="italic text-xs text-gray-500">{data.partOfSpeech}</p>
      <p className="mb-2">{data.definition}</p>
      {data.example && (
        <p className="text-gray-600 text-sm">Example: "{data.example}"</p>
      )}
    </div>
  );
}
