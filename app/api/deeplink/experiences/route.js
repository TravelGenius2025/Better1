
import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'
const p = encodeURIComponent
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Rome'
  const date = searchParams.get('date') ?? '2025-10-10'
  const adults = searchParams.get('adults') ?? '2'
  const links = [
    { name:'Viator', url:`https://www.viator.com/searchResults/all?text=${p(city)}&date=${p(date)}&adult=${adults}&pid=${AFF.VIATOR_PID}` },
    { name:'Klook', url:`https://www.klook.com/search/?keyword=${p(city)}&start_date=${p(date)}&adults=${adults}&aid=${AFF.KLOOK_AFF}` }
  ]
  return NextResponse.json({ links })
}
