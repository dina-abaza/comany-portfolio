import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
    title: "Aurora Software House",
    description: "Modern web and mobile development company portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Navbar />

  
        <main className="flex-1 min-h[1000px]">
          {children}
        </main>
       
       
     
        <Footer />
      </body>
    </html>
  );
}

