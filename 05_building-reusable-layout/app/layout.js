export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background:'orange'}}>Header</header>
        {children}
        <footer style={{background:'teal'}}>Footer</footer>
      </body>
    </html>
  );
}
