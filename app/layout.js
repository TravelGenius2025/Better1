export const metadata = {
  title: "TravelGenius — Book Smarter, Travel Better",
  description: "Global flight, hotel, rail & experiences meta-links + Traveler Wellbeing Score™",
};
import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="wrap nav">
            <div className="logo">
              <div className="logo-badge" />
              <span>TravelGenius</span>
            </div>
            <nav style={{display:"flex", gap:12, marginLeft:"auto"}}>
              <Link href="/">Home</Link>
              <Link href="/book">Book</Link>
              <Link href="/playbook-domain">Free Domain Playbook</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer>
          <div className="wrap" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 0"}}>
            <small>© {new Date().getFullYear()} TravelGenius</small>
            <small><Link href="/playbook-domain">Free-domain + ownership guide</Link></small>
          </div>
        </footer>
      </body>
    </html>
  );
}