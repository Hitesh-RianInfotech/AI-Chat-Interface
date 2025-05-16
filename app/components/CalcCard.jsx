"use client";

export default function CalcCard({ data }) {
  if (!data) {
    return (
      <div className="text-sm text-center text-gray-400 py-4">
        Calculation failed.
      </div>
    );
  }

  return (
    <div className="p-5 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl text-sm shadow-sm">
      <p className="mb-2 font-medium">
        Expression: <code className="bg-white px-1 py-0.5 rounded border border-gray-200">{data.expression}</code>
      </p>
      <p className="text-gray-700">
        Result: <strong className="text-yellow-900">{data.result}</strong>
      </p>
    </div>
  );
}
