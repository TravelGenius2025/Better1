export default function Home() {
  return (
    <section className="hero">
      <h1 style={{fontSize:36, lineHeight:1.15, marginBottom:12}}>Travel smarter with the <em>Traveler Wellbeing Score™</em></h1>
      <p style={{color:"var(--muted)", maxWidth:800}}>We compare across global providers (including Europe) and estimate how each trip impacts your energy, sleep, and carbon—so you can pick the plan you'll actually enjoy.</p>
      <div style={{marginTop:16}}>
        <a className="btn" href="/book">Start booking</a>
      </div>
      <div className="grid" style={{marginTop:28}}>
        <div className="card">
          <h3>Unique: Wellbeing Score™</h3>
          <p>Time zones, layovers, red-eyes, seat pitch &amp; neighborhood noise rolled into a single comfort score.</p>
        </div>
        <div className="card">
          <h3>Europe-first coverage</h3>
          <p>Ryanair, easyJet, Trainline, SNCF, DB, Omio, Booking.com, Hostelworld, and more.</p>
        </div>
        <div className="card">
          <h3>Own your domain</h3>
          <p>Follow our playbook to get a free/custom domain that satisfies affiliate “site ownership”.</p>
        </div>
      </div>
    </section>
  );
}