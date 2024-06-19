import type { Metadata } from "next";
import "./style/globals.css";
import { suit } from "./style/fonts/suit";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "./components/theme-provider";

export default function RootLayout({
 children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={suit.className} suppressHydrationWarning>
    <body className="max-w-screen-md min-w-[320px] mx-auto">
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex flex-col">
        <Header />
        {children}
      </main>
    </ThemeProvider>
    <Footer />
    <GoogleAnalytics />
    </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Home | Sam Blog",
  description: "Sam의 개발 블로그입니다.",
};
