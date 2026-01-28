export default function RootLayout({ children }) {
  return (
    <>
        <header style={{background:'blue'}}>Header (Application)</header>
        {children}
        <footer style={{background:'yellow'}}>Footer (Application)</footer>
    </>
  );
}
