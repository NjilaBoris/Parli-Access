
import { cn } from "@/lib/utils";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";


export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
      )}
    >
      <body className="min-h-full">
          <Navbar />
          {children}
          <WhatsAppButton/>
          <Footer/>
      </body>
    </html>
  );
}
