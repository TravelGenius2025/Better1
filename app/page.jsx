
export default function HomePage(){
  return (
    <div className="hero">
      <div>
        <h1>Book smarter with a <em>Wellbeing-first</em> meta‑search</h1>
        <p className="small">We compare top providers worldwide (Europe included) and compute a unique <strong>Traveler Wellbeing Score™</strong> that factors red‑eye risk, layover stress, carbon, and hotel sleep quality.</p>
        <div style={{marginTop:14, display:'flex', gap:10}}>
          <a className="button" href="/book">Start Searching</a>
          <a className="button" style={{background:'#ffffff', color:'#4f46e5'}} href="/playbook-domain">Free Domain Playbook</a>
        </div>
        <div className="card" style={{marginTop:16}}>
          <h2>Why we’re different</h2>
          <ul>
            <li>Links out to many providers (Skyscanner, Booking.com, Trainline, Omio, DB, Kayak, Kiwi, SNCF, Italo, easyJet, Ryanair…)</li>
            <li><strong>Traveler Wellbeing Score™</strong>: combines sleep windows, connections, CO₂ and noise to help you feel better in‑trip.</li>
            <li>No logins required. Your search, your choice.</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <h2>Quick demo</h2>
        <p className="small">Jump in to the meta‑booking form. We’ll generate direct provider links with your dates and passenger count.</p>
        <a className="button" href="/book">Open Booking Form</a>
      </div>
    </div>
  )
}
