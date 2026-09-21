import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
  metadataBase: new URL("https://omarsharaby.dev"),
  authors: [{ name: profile.name, url: "https://omarsharaby.dev" }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    url: "https://omarsharaby.dev",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[#060911] text-slate-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
