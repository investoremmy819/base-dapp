import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Base dApp",
  description: "Base dApp deployed on Vercel"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
