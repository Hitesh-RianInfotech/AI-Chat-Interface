const weatherPlugin = {
    name: "weather",
    match: (input) => /^\/weather\s+(.+)/i.test(input),
    execute: async (input) => {
      const city = input.match(/^\/weather\s+(.+)/i)[1];
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();
  
      if (data.error) throw new Error(data.error);
  
      return {
        city: data.city,
        temp: data.temp,
        condition: data.condition
      };
    }
  };
  
  export default weatherPlugin;
  