import { v4 as uuidv4 } from "uuid";

export function createMessage({ sender, content, type = "text", pluginName, pluginData }) {
  return {
    id: uuidv4(),
    sender,
    content,
    type,
    pluginName,
    pluginData,
    timestamp: new Date().toISOString(),
  };
}

export function parseToCommand(input) {
  const lower = input.toLowerCase().trim();

  if (lower.startsWith("weather in ")) {
    const city = lower.replace("weather in ", "").trim();
    return `/weather ${city}`;
  }

  if (lower.startsWith("calculate ")) {
    const expr = lower.replace("calculate ", "").trim();
    return `/calc ${expr}`;
  }

  if (lower.startsWith("define ")) {
    const word = lower.replace("define ", "").trim();
    return `/define ${word}`;
  }

  return input;
}
