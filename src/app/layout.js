

export const metadata = {
  title: "Assignment",
  description: "NextJs Assignment for Go India Stocks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
