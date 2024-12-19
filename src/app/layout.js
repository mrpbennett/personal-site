import "highlight.js/styles/base16/espresso.css";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
// import ThemeSwitcher from "@/components/themeSwitcher";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto flex min-h-screen flex-col p-4 font-serif md:max-w-[75%] md:p-0">
        {/* <div className="fixed right-4 top-4 z-50 hidden md:block">
          <ThemeSwitcher />
        </div> */}
        <Header />
        <div className="flex-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
