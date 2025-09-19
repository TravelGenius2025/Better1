
'use client'
import { useState } from 'react'

export default function BookPage(){
  const [city, setCity] = useState('Paris')
  const [checkin, setCheckin] = useState('2025-10-10')
  const [checkout, setCheckout] = useState('2025-10-14')
  const [adults, setAdults] = useState(2)
  const [origin, setOrigin] = useState('LON')
  const [destination, setDestination] = useState('PAR')
  const [depart, setDepart] = useState('2025-10-10')
  const [ret, setRet] = useState('2025-10-14')

  async function openLinks(endpoint, params){
    const qs = new URLSearchParams(params).toString()
    const r = await fetch(`/api/deeplink/${endpoint}?${qs}`)
    const j = await r.json()
    j.links.forEach(l => window.open(l.url, '_blank','noopener'))
  }

  return (
    <div className="grid">
      <div className="card">
        <h2>Hotels</h2>
        <div style={{display:'grid', gap:10}}>
          <input className="input" value={city} onChange={e=>setCity(e.target.value)} placeholder="City e.g. Paris" />
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <input className="input" type="date" value={checkin} onChange={e=>setCheckin(e.target.value)} />
            <input className="input" type="date" value={checkout} onChange={e=>setCheckout(e.target.value)} />
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <input className="input" type="number" min="1" value={adults} onChange={e=>setAdults(e.target.value)} />
            <button className="button" onClick={()=>openLinks('hotels',{city,checkin,checkout,adults})}>Open Provider Links</button>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Flights</h2>
        <div style={{display:'grid', gap:10}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <input className="input" value={origin} onChange={e=>setOrigin(e.target.value.toUpperCase())} placeholder="Origin IATA e.g. LON" />
            <input className="input" value={destination} onChange={e=>setDestination(e.target.value.toUpperCase())} placeholder="Destination IATA e.g. PAR" />
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <input className="input" type="date" value={depart} onChange={e=>setDepart(e.target.value)} />
            <input className="input" type="date" value={ret} onChange={e=>setRet(e.target.value)} />
          </div>
          <button className="button" onClick={()=>openLinks('flights',{origin,destination,depart,ret,adults})}>Open Provider Links</button>
        </div>
      </div>

      <div className="card">
        <h2>Rail</h2>
        <div style={{display:'grid', gap:10}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <input className="input" placeholder="From city (e.g. London)" id="railFrom" />
            <input className="input" placeholder="To city (e.g. Paris)" id="railTo" />
          </div>
          <button className="button" onClick={()=>openLinks('rail',{from:document.getElementById('railFrom').value||'London', to:document.getElementById('railTo').value||'Paris', date:depart})}>Open Provider Links</button>
        </div>
      </div>

      <div className="card">
        <h2>Cars</h2>
        <div style={{display:'grid', gap:10}}>
          <input className="input" placeholder="Pickup city e.g. Paris" id="carCity" />
          <button className="button" onClick={()=>openLinks('cars',{city:document.getElementById('carCity').value||city,checkin,checkout})}>Open Provider Links</button>
        </div>
      </div>

      <div className="card">
        <h2>Experiences</h2>
        <div style={{display:'grid', gap:10}}>
          <input className="input" placeholder="City e.g. Rome" id="xpCity" />
          <button className="button" onClick={()=>openLinks('experiences',{city:document.getElementById('xpCity').value||city, date:checkin, adults})}>Open Provider Links</button>
        </div>
      </div>

      <div className="card">
        <h2>Traveler Wellbeing Score™ (example)</h2>
        <p className="small">We estimate a 0–100 score combining night flights, layovers, CO₂, and quiet hotels. This demo shows a typical city‑break: score <strong>78/100</strong>.</p>
      </div>
    </div>
  )
}
