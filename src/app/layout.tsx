import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matusevich.dev"),
  title: {
    default:
      "Сергей Матусевич - AI-first Head of Scrum / Delivery Transformation Lead",
    template: "%s | Сергей Матусевич",
  },
  description:
    "Масштабирую delivery на уровне 20+ команд: метрики → OKR → техдолг → AI-автоматизация. Результат — быстрее Time-to-Market, выше прозрачность и управляемость.",
  keywords: [
    "Head of Scrum",
    "Delivery Transformation",
    "Agile at Scale",
    "LeSS",
    "OKR внедрение",
    "метрики потока",
    "AI enablement",
    "техдолг",
    "Scrum масштабирование",
    "управление 20+ командами",
  ],

  authors: [{ name: "Сергей Матусевич" }],
  creator: "Сергей Матусевич",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://matusevich.dev",
    title:
      "Сергей Матусевич - AI-first Head of Scrum / Delivery Transformation Lead",
    description:
      "Масштабирую delivery на уровне 20+ команд: метрики → OKR → техдолг → AI-автоматизация",
    siteName: "Сергей Матусевич",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Сергей Матусевич — AI-first Head of Scrum / Delivery Transformation Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сергей Матусевич - AI-first Head of Scrum",
    description:
      "Масштабирую delivery на уровне 20+ команд: метрики → OKR → техдолг → AI-автоматизация",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" data-oid="wel_s50">
      <head data-oid="8b9rrer">
        <link
          rel="canonical"
          href="https://matusevich.dev"
          data-oid="b4o3:df"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Сергей Матусевич",
              jobTitle: "Head of Scrum / Delivery Transformation Lead",
              description:
                "AI-first лидер по масштабированию delivery-процессов, OKR и AI-автоматизации",
              url: "https://matusevich.dev",
              sameAs: ["https://t.me/digedon"],
              knowsAbout: [
                "Agile",
                "Scrum",
                "LeSS",
                "OKR",
                "Delivery Management",
                "AI Enablement",
                "Flow Metrics",
              ],
            }),
          }}
          data-oid="wcu_a2z"
        />
      </head>
      <body className="antialiased" data-oid="tkyu25-">
        {children}
      </body>
    </html>
  );
}
