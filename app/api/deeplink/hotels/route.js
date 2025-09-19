
import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'
const p = encodeURIComponent
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const checkin = searchParams.get('checkin') ?? '2025-10-10'
  const checkout = searchParams.get('checkout') ?? '2025-10-14'
  const adults = searchParams.get('adults') ?? '2'
  const links = [
    { name:'Booking.com', url:`https://www.booking.com/searchresults.html?ss=${p(city)}&checkin=${p(checkin)}&checkout=${p(checkout)}&group_adults=${adults}&aid=${AFF.BOOKING_AID}` },
    { name:'Agoda', url:`https://www.agoda.com/search?city=${p(city)}&checkIn=${p(checkin)}&checkOut=${p(checkout)}&adults=${adults}&cid=${AFF.AGODA_CID}` },
    { name:'Hotels.com', url:`https://www.hotels.com/search.do?q-destination=${p(city)}&q-check-in=${p(checkin)}&q-check-out=${p(checkout)}&q-rooms=1&q-room-0-adults=${adults}&affcid=${AFF.HOTELS_COM_CID}` },
    { name:'Expedia', url:`https://www.expedia.com/Hotel-Search?destination=${p(city)}&startDate=${p(checkin)}&endDate=${p(checkout)}&adults=${adults}&affcid=${AFF.EXPEDIA_CID}` }
  ]
  return NextResponse.json({ links })
}
