import { times } from '@/lib/fonts';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { FontLoader } from '@/components/ui/font-loader';

export const metadata = {
  title: 'Wedding Invitation',
  description: 'Wedding invitation application',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Wedding Invitation'
  },
  formatDetection: {
    telephone: false
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
      <body className={`${times.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <FontLoader />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
