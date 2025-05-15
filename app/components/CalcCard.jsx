"use client";

export default function CalcCard({ data }) {
  if (!data) return <div className="text-sm">Calculation failed.</div>;

  return (
    <div className="p-4 rounded shadow text-sm">
      <p className="mb-1">Expression: <code>{data.expression}</code></p>
      <p>
        Result: <strong>{data.result}</strong>
      </p>
    </div>
  );
}
