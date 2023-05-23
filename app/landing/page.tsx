import LargeHeading from "@/components/ui/LargeHeading";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-center items-center lg:items-start'>
          <div className='flex flex-col items-center'>
            <LargeHeading
              size='lg'
              className='three-d text-black dark:text-light-gold lg:text-left leading-none font-extrabold tracking-tight'
            >
              Bonsai Agency
            </LargeHeading>
          </div>
          <div className='w-[100px] h-1 bg-[#706730] my-8'></div>
          <p className='max-w-lg lg:max-w-xl lg:text-center text-center text-gray-600'>
            Launch your online brand with Creavio.io. An all-in-one platform for
            content creators, influencers, and entrepreneurs.{' '}
            <Link
              href='/login'
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              Sign up
            </Link>
            .
          </p>

          <div className='relative w-full max-w-2xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow'
              quality={100}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              fill
              src='/images/bonsai.png'
              alt='bonsai tree'
            />
          </div>

      
        </div>
      </div>
    </div>
  );
}
