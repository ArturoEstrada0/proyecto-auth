import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User'; // Asegúrate de que el modelo User exista
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectToDatabase();

  try {
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  await connectToDatabase();

  const body = await req.json(); // Obtiene los datos JSON del cuerpo de la solicitud

  try {
    const user = await User.create(body);
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
