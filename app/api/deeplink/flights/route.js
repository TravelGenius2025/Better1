
import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'
const p = encodeURIComponent
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const origin = (searchParams.get('origin') ?? 'LON').toUpperCase()
  const destination = (searchParams.get('destination') ?? 'PAR').toUpperCase()
  const depart = searchParams.get('depart') ?? '2025-10-10'
  const ret = searchParams.get('ret') ?? '2025-10-14'
  const adults = searchParams.get('adults') ?? '1'
  const links = [
    { name:'Skyscanner', url:`https://www.skyscanner.net/transport/flights/${p(origin)}/${p(destination)}/${p(depart)}/${p(ret)}/?adults=${adults}&associateid=${AFF.SKYSCANNER_PID}` },
    { name:'Kayak', url:`https://www.kayak.com/flights/${p(origin)}-${p(destination)}/${p(depart)}/${p(ret)}?adults=${adults}&aid=${AFF.KAYAK_AID}` },
    { name:'Kiwi', url:`https://www.kiwi.com/en/search/results/${p(origin)}-${p(destination)}/${p(depart)}/${p(ret)}?adults=${adults}&affil_id=${AFF.KIWI_AFFIL_ID}` },
    { name:'Ryanair', url:`https://www.ryanair.com/us/en/trip/flights/select?originIata=${p(origin)}&destinationIata=${p(destination)}&dateOut=${p(depart)}&dateIn=${p(ret)}&adt=${adults}&utm_source=affiliate&utm_medium=referral&utm_campaign=${AFF.RYANAIR_AID}` },
    { name:'easyJet', url:`https://www.easyjet.com/en/buy/flights?origin=${p(origin)}&destination=${p(destination)}&outboundDate=${p(depart)}&inboundDate=${p(ret)}&adults=${adults}&affid=${AFF.EASYJET_AID}` }
  ]
  return NextResponse.json({ links })
}
