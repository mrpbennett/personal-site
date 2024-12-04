import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto flex min-h-screen flex-col p-4 font-mono md:max-w-[75%] md:p-0">
        <Header />
        <div className="flex-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
