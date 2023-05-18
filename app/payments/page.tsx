import Link from 'next/link';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';
import LargeHeading from '@/components/ui/LargeHeading';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  return [
    {
      id: '728ed52s',
      amount: 200,
      status: 'processing',
      email: 'mejiabrayan@example.com',
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
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <section className='container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24 text-black'>
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
