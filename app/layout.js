import "./globals.css";

export const metadata = {
  title: "Multi Step From",
  description: "Multistep form for gaming subscription",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
