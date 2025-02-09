import "./globals.css";

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
