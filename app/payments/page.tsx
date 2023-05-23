import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // nextjs 13 fetching api from our api folder/payments
  const res = await fetch('http://localhost:3000/api/payments' || 'https://demo-table-eight.vercel.app', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <section className='container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24 text-black  ring-1 ring-gray-900/10'>
      <div className='relative mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-black '>
          Data-Table Demo
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          using Shadcn ui and tanstack{' '}
        </p>
      </div>

      <DataTable columns={columns} data={data} />
    </section>
  );
}
