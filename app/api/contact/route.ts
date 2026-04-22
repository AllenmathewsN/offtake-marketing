import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();
    
    const result = await pool.query(
      'INSERT INTO contacts (name, email, phone, service, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, service, message]
    );
    
    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
}
