
import './globals.css'

export const metadata = { title: 'TravelGenius', description: 'Smarter, Fairer Travel' }

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <header style={{background:'#fff',padding:'10px',borderBottom:'1px solid #eee'}}>
          <nav>
            <a href="/">Home</a> | <a href="/book">Book</a> | <a href="/playbook-domain">Free Domain Playbook</a>
          </nav>
        </header>
        <main style={{padding:'20px'}}>{children}</main>
      </body>
    </html>
  )
}
