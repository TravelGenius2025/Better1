
export const metadata = { title: 'Free Domain + Ownership Playbook — TravelGenius' }

export default function Playbook(){
  return (
    <article className="card">
      <h1>Free Domain + Ownership Playbook</h1>
      <p>Own your domain (required for many affiliate programs) while keeping costs at 0–low. Here are solid options:</p>
      <h2>1) Get a free third‑level domain (FAST)</h2>
      <ul>
        <li><strong>is-a.dev</strong> (via GitHub) – free .is-a.dev subdomain. Point a CNAME to your Vercel URL.</li>
        <li><strong>eu.org</strong> – free .eu.org domain. Approval in a few days; point NS to Cloudflare, then CNAME to Vercel.</li>
        <li><strong>thedev.id</strong> / <strong>js.org</strong> – community subdomains with PR flow.</li>
      </ul>
      <p className="notice"><strong>Tip:</strong> Vercel also gives a free *.vercel.app URL instantly. Some affiliate networks require a custom domain you control—use the options above to satisfy “ownership”.</p>
      <h2>2) Low‑cost real TLD (best for trust)</h2>
      <ul>
        <li><strong>Namecheap</strong> or <strong>Cloudflare Registrar</strong> – buy a .com/.travel/.site, often <$10 in promos.</li>
      </ul>
      <h2>3) Hook it up to Vercel</h2>
      <ol>
        <li>Add your domain in Vercel: <span className="token">Settings → Domains → Add</span>.</li>
        <li>Create a <span className="token">CNAME</span> for <span className="token">www</span> to your <span className="token">project-name.vercel.app</span>.</li>
        <li>Optionally set <span className="token">A/AAAA</span> for apex using Vercel’s recommended records, or use <span className="token">ALIAS/ANAME</span> if your DNS supports it.</li>
        <li>SSL is automatic.</li>
      </ol>
      <h2>4) Pass affiliate “ownership” checks</h2>
      <ul>
        <li>Put a visible footer with your brand + contact.</li>
        <li>Add a basic privacy page and disclosure.</li>
        <li>Ensure your domain resolves to your site before submitting IDs.</li>
      </ul>
    </article>
  )
}
