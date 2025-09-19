
import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'
const p = encodeURIComponent
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const fr = searchParams.get('from') ?? 'London'
  const to = searchParams.get('to') ?? 'Paris'
  const date = searchParams.get('date') ?? '2025-10-10'
  const links = [
    { name:'Trainline', url:`https://www.thetrainline.com/book/results?origin=${p(fr)}&destination=${p(to)}&outwardDate=${p(date)}&redirected=true&railmcard=false&partner=${AFF.TRAINLINE_PID}` },
    { name:'Omio', url:`https://www.omio.com/search-results?departure=${p(fr)}&arrival=${p(to)}&date=${p(date)}&partner_id=${AFF.OMIO_AID}` },
    { name:'Deutsche Bahn', url:`https://www.bahn.com/en?from=${p(fr)}&to=${p(to)}&noChrome=yes&ref=${AFF.DB_BAHN_ID}` },
    { name:'SNCF', url:`https://www.sncf-connect.com/en-en/train?departure=${p(fr)}&arrival=${p(to)}&outwardDate=${p(date)}&affid=${AFF.SNCF_ID}` }
  ]
  return NextResponse.json({ links })
}
