const calcPlugin = {
    name: "calc",
    match: (input) => /^\/calc\s+(.+)/i.test(input),
    execute: async (input) => {
      const expression = input.match(/^\/calc\s+(.+)/i)[1];
      const res = await fetch(`/api/calc?expression=${encodeURIComponent(expression)}`);
      const data = await res.json();
  
      if (data.error) throw new Error(data.error);
  
      return {
        expression: data.expression,
        result: data.result
      };
    }
  };
  
  export default calcPlugin;
  