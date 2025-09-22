
'use client'
import { useState } from 'react'
import { AFF } from '../../lib/affiliates'

function enc(v){return encodeURIComponent(v||'')}

export default function Book(){
  const [city,setCity]=useState('Paris')
  const [from,setFrom]=useState('London')
  const [to,setTo]=useState('Paris')
  const [depart,setDepart]=useState('2025-10-10')
  const [ret,setRet]=useState('2025-10-14')
  const [adults,setAdults]=useState(2)

  const links=[
    {name:'Booking.com',url:`https://www.booking.com/searchresults.html?ss=${enc(city)}&aid=${AFF.bookingAid}`},
    {name:'Ryanair',url:`https://www.ryanair.com?origin=${enc(from)}&dest=${enc(to)}&dateOut=${enc(depart)}&dateIn=${enc(ret)}&adults=${adults}&aid=${AFF.ryanairAid}`},
    {name:'Trainline',url:`https://www.thetrainline.com?origin=${enc(from)}&dest=${enc(to)}&outward=${enc(depart)}&return=${enc(ret)}&partner=${AFF.trainlineAid}`}
  ]

  return (
    <div>
      <h1>Book Travel</h1>
      <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City" />
      {links.map(l=>(<div key={l.name}><a href={l.url} target="_blank"><button>{l.name}</button></a></div>))}
    </div>
  )
}
