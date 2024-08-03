import { NextRequest, NextResponse } from 'next/server';

interface DataStore {
  [key: string]: (boolean | string | number)[];
}

let dataStore: DataStore = {};

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const data = dataStore[id || ''] || null;
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  const { id, data }: { id: string; data: (boolean | string | number)[] } = body;
  dataStore[id] = data;
  return NextResponse.json({ success: true });
}
