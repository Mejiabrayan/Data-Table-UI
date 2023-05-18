import { Icons } from '@/components/icons';
import LargeHeading from '@/components/ui/LargeHeading';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Carousel } from 'react-responsive-carousel';
import { DataTable } from './payments/data-table';
import Link from 'next/link';
import { Payment, columns } from './payments/columns';

async function getData(): Promise<Payment[]> {

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
export default async function IndexPage() {
  const data = await getData();
  return (
    <main>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[64rem] flex-col justify-center items-center gap-4 text-center'>
      

      
          <Link
            href={siteConfig.links.linkedIn}
            className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            let&apos;s connect on linkedin
          </Link>
          <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            An example app built using Next.js 13 server components.
          </h1>
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            This is a demo app to showcase the new Next.js 13 server components
            using Schadcn Ui, check it out here: <Link href='/payments'></Link>
          </p>
          <div className='space-x-4'>
            <Link href='/login' className={cn(buttonVariants({ size: 'lg' }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
