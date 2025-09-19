
import './globals.css'

export const metadata = {
  title: 'TravelGenius — Smarter Travel Meta-Search',
  description: 'Compare across global providers and get the Traveler Wellbeing Score™ on every itinerary.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <div className="logo">
              <img src="/logo.svg" width="28" height="28" alt="TravelGenius" />
              TravelGenius
              <span className="badge">Traveler Wellbeing Score™</span>
            </div>
            <nav style={{display:'flex', gap:14}}>
              <a href="/">Home</a>
              <a href="/book">Book</a>
              <a href="/playbook-domain">Free Domain Playbook</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer container">
          © {new Date().getFullYear()} TravelGenius. Meta-search links may be affiliate links. Prices are indicative from providers.
        </footer>
      </body>
    </html>
  )
}
