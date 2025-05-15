const definePlugin = {
    name: "define",
    match: (input) => /^\/define\s+(.+)/i.test(input),
    execute: async (input) => {
      const word = input.match(/^\/define\s+(.+)/i)[1];
      const res = await fetch(`/api/define?word=${encodeURIComponent(word)}`);
      const data = await res.json();
  
      if (data.error) throw new Error(data.error);
  
      return {
        word: data.word,
        definition: data.definition,
        example: data.example,
        partOfSpeech: data.partOfSpeech
      };
    }
  };
  
  export default definePlugin;
  