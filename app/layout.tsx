import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { MainNav } from '@/components/main-nav';
import { marketingConfig } from '@/config/navigation';


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/Colabero.woff",
  variable: "--font-heading",
})


console.log(fontSans.variable, fontHeading.variable)
export const metadata = {
  title: 'Shadcn',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-noise font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {' '}
        <header className='container z-40 px-5'>
          <div className='flex h-20 items-center justify-center py-6'>
            <MainNav items={marketingConfig.mainNav} />
          </div>
        </header>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
