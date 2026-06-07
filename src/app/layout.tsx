import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import OmegaNavigation from "@/components/layout/OmegaNavigation";
import OmegaSearch from "@/components/search/OmegaSearch";
import OmegaFooter from "@/components/layout/OmegaFooter";

export const metadata: Metadata = {
  title: "DP WESTVOGUE | The Global Fashion Authority",
  description: "The world's most advanced immersive digital fashion ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="font-sans bg-black text-white antialiased selection:bg-white/20"
      >
        <SmoothScroll>
          <OmegaNavigation />
          <OmegaSearch />
          {children}
          <OmegaFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
