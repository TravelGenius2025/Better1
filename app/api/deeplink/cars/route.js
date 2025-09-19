
import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'
const p = encodeURIComponent
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const checkin = searchParams.get('checkin') ?? '2025-10-10'
  const checkout = searchParams.get('checkout') ?? '2025-10-14'
  const links = [
    { name:'Rentalcars.com', url:`https://www.rentalcars.com/SearchResults.do?locationName=${p(city)}&dropLocationName=${p(city)}&from=${p(checkin)}&until=${p(checkout)}&affiliateCode=${AFF.RENTALCARS_AID}` },
    { name:'Kayak Cars', url:`https://www.kayak.com/cars/${p(city)}?from=${p(checkin)}&until=${p(checkout)}&aid=${AFF.KAYAK_AID}` }
  ]
  return NextResponse.json({ links })
}
