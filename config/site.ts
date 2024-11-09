import { SiteConfig } from "@/types/siteConfig";
import { BsGithub } from "react-icons/bs";

const OPEN_SOURCE_URL =
  "https://github.com/PeterChen1997/short-link-landing-page";

const baseSiteConfig = {
  name: "Link Fun",
  description:
    "Make link management fun and efficient. A URL shortener optimized for China with powerful analytics, team collaboration and marketing tools that just work.",
  url: "https://www.linkp.fun",
  ogImage: "https://www.linkp.fun/og.png",
  metadataBase: "/",
  keywords: [
    "link fun",
    "url shortener",
    "link management",
    "analytics",
    "marketing tools",
    "qr code generator",
    "short urls",
    "china url shortener",
  ],
  authors: [
    {
      name: "Link Fun Team",
      url: "https://www.linkp.fun",
      twitter: "https://twitter.com/linkfun_hq",
    },
  ],
  creator: "@linkfun_hq",
  openSourceURL: OPEN_SOURCE_URL,
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerLinks: [
    // { name: "Support", href: "mailto:support@linkp.fun", icon: MdEmail },
    // {
    //   name: "Twitter",
    //   href: "https://twitter.com/linkfun_hq",
    //   icon: BsTwitterX,
    // },
    // { name: "GitHub", href: OPEN_SOURCE_URL, icon: BsGithub },
    // { name: "WeChat", href: "/contact", icon: BsWechat },
  ],
  footerProducts: [
    // { url: "/features/analytics", name: "Smart Analytics" },
    // { url: "/features/team", name: "Team Space" },
    // { url: "/features/api", name: "API Access" },
    // { url: "/features/qrcode", name: "QR Studio" },
    // { url: "/features/security", name: "Link Shield" },
    // { url: "/features/custom-domain", name: "Custom Domain" },
    // { url: "/features/marketing", name: "Marketing Hub" },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

