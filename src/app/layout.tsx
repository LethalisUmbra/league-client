import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex items-center justify-center min-h-screen bg-black select-none">
        <div
          className="bg-gray-900 text-amber-200 flex flex-col justify-between"
          style={{ width: "1280px", height: "720px" }}
        >
          <Navbar />
          <div className="w-full h-full bg-gray-800 flex items-center justify-between">
            {children}
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
