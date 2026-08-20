import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://claire-atelier.patricioaraujosh.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Claire — Arquitetura, Arte e Design",
  description:
    "Pinturas em parede, ilustrações, peças personalizadas e identidades visuais criadas à mão por Victoria Claire, em Fortaleza.",
  keywords: [
    "arte em parede Fortaleza",
    "pintura artística",
    "ilustração personalizada",
    "quadros personalizados",
    "identidade visual",
    "Victoria Claire",
  ],
  openGraph: {
    title: "Claire — Arquitetura, Arte e Design",
    description: "Arte para morar, presentear e guardar.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Claire — Arte para morar, presentear e guardar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claire — Arquitetura, Arte e Design",
    description: "Arte para morar, presentear e guardar.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/images/logo-claire.webp",
    shortcut: "/images/logo-claire.webp",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
