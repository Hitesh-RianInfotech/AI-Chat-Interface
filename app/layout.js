import "./globals.css"; 

export const metadata = {
  title: "AI Plugin Chat",
  description: "A modern AI-powered chat interface with plugin support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-sans">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
