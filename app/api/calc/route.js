export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const expression = searchParams.get("expression");
  
    if (!expression) {
      return new Response(JSON.stringify({ error: "Expression is required." }), {
        status: 400,
      });
    }
  
    try {
      const result = Function(`"use strict"; return (${expression})`)();
  
      if (typeof result !== "number") {
        throw new Error("Invalid result");
      }
  
      return Response.json({ expression, result });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid expression." }), {
        status: 400,
      });
    }
  }
  