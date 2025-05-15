"use client";
import WeatherCard from "./WeatherCard";
import CalcCard from "./CalcCard";
import DefineCard from "./DefineCard";

export default function PluginCard({ pluginName, pluginData }) {
  switch (pluginName) {
    case "weather":
      return <WeatherCard data={pluginData} />;
    case "calc":
      return <CalcCard data={pluginData} />;
    case "define":
      return <DefineCard data={pluginData} />;
    default:
      return <div>Unknown plugin</div>;
  }
}
