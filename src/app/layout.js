import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="p-4 container mx-auto font-mono md:p-0 md:max-w-[75%]
      "
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
