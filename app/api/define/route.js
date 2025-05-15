export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const word = searchParams.get("word");
  
    if (!word) {
      return new Response(JSON.stringify({ error: "Word is required." }), {
        status: 400,
      });
    }
  
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  
      if (!res.ok) {
        return new Response(JSON.stringify({ error: "Word not found." }), {
          status: 404,
        });
      }
  
      const data = await res.json();
  
      const meaning = data[0]?.meanings?.[0]?.definitions?.[0];
  
      return Response.json({
        word,
        definition: meaning.definition,
        example: meaning.example || null,
        partOfSpeech: data[0]?.meanings?.[0]?.partOfSpeech,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch definition." }), {
        status: 500,
      });
    }
  }
  