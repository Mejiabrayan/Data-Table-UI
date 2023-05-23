import { NextResponse } from 'next/server';

const payments = [
  {
    id: '728ed52s',
    amount: 200,
    status: 'succesful',
    email: 'mejiabrayan@protonmail..com',
  },
  {
    id: '728ed52f',
    amount: 300,
    status: 'pending',
    email: 'kevinf@example.com',
  },
  {
    id: '728ed52d',
    amount: 450,
    status: 'success',
    email: 'johndoe@example.com',
  },
  {
    id: '728ed52v',
    amount: 100,
    status: 'failed',
    email: 'ianjones@example.com',
  },
];

export async function GET() {
  return NextResponse.json(payments);
}
