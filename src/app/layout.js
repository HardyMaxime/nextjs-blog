import "./../styles/main.scss";

export const dynamicParams = false;
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        <body className="reveal-loaded" >{children}</body>
    </html>
  );
}