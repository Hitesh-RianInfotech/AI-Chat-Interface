"use client";

export default function WeatherCard({ data }) {
  return (
    <div className="p-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200 rounded-xl text-sm shadow-sm">
    <p className="font-semibold">🌤 Weather in {data.city}</p>
    <p className="mt-1">Temperature: <strong>{data.temp}°C</strong></p>
    <p>Condition: {data.condition}</p>
  </div>
  
  );
}
