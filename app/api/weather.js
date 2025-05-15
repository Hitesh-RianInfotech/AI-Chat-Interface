export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
  
    if (!city) {
      return new Response(JSON.stringify({ error: "City is required." }), {
        status: 400,
      });
    }
  
    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await res.json();
  
      const condition = data.current_condition?.[0];
  
      return Response.json({
        city,
        temp: condition.temp_C,
        condition: condition.weatherDesc?.[0]?.value,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch weather." }), {
        status: 500,
      });
    }
  }
  