import "./globals.css";
import "highlight.js/styles/base16/espresso.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto flex min-h-screen flex-col p-4 font-serif md:max-w-[75%] md:p-0">
        <Header />
        <div className="flex-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
