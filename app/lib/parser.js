// For natural language parsing (bonus, extendable)

export function parseToCommand(input) {
    const lower = input.toLowerCase();
  
    if (lower.startsWith("what's the weather in ")) {
      const city = lower.replace("what's the weather in ", "").trim();
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
  
    return input; // fallback: return as-is
  }
  