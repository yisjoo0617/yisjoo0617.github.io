import type { Metadata } from "next";
import "@/style/globals.css";
import { suit } from "@/styles/fonts/suit";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import { ThemeProvider } from "@/components/home/theme-provider";

export default function RootLayout({
 children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={suit.className}>
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
    </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Home | Sam Blog",
  description: "Sam의 개발 블로그입니다.",
};
