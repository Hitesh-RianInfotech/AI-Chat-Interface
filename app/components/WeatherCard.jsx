"use client";

export default function WeatherCard({ data }) {
  return (
    <div className="p-5 bg-blue-50 border border-blue-200 text-blue-800 rounded-xl text-sm shadow-sm">
      <p className="font-semibold text-base mb-1">🌤 Weather in {data.city}</p>
      <p className="mb-1">Temperature: <strong>{data.temp}°C</strong></p>
      <p>Condition: {data.condition}</p>
    </div>
  );
}
