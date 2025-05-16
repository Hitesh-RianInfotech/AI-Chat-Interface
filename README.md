# 🤖 AI Chat Interface with Plugin Tools

This is a next.js project that provides a smart chat interface with plugin-style tools like `/calc`, `/define`, and `/weather`.

## 🛠️ Setup and Running Instructions

Follow these steps to run the project locally:

**Clone the repository**
git clone https://github.com/Hitesh-RianInfotech/AI-Chat-Interface.git
cd ai-chat-interface
npm install
npm run dev

### 🧠 How It Works

1. **User Input:**  
   The user types a message like `/calc 5 + 10`.

2. **Command Parsing:**  
   The app extracts the command (`/calc`) and the remaining input (`5 + 10`).

3. **Plugin Registry Match:**  
   The app looks up the command in `pluginRegistry.ts`, where all plugins are registered.

4. **Dynamic Import:**  
   If the command exists, the matching plugin is dynamically imported using `Next.js dynamic()`.

5. **ToolCard Render:**  
   The plugin is passed the user input as a prop and rendered as a tool card in the chat window.

---

### 📦 Plugin Structure

Each plugin is:
- A React component inside the `/plugins` folder
- Responsible for its own logic (API call, computation, etc.)
- Rendered dynamically using Next.js

---

## 🧠 Plugins Implemented and APIs Used

This chat app currently supports the following plugins:

- **`/calc` (Calculator)**  
  Lets users solve simple math expressions like `5 + 3 * 2`. It uses JavaScript’s `eval()` function to evaluate the result.

- **`/define` (Dictionary)**  
  Provides definitions for English words. For example, typing `/define innovation` fetches the meaning of "innovation". This plugin uses the [Free Dictionary API](https://dictionaryapi.dev/).

- **`/weather` (Weather Info)**  
  Shows current weather information for a given city. Typing `/weather London` will return temperature, humidity, etc., using the [OpenWeather API](https://openweathermap.org/api).