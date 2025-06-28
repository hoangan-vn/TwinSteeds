import { times } from '@/lib/fonts';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata = {
  title: 'Wedding Invitation',
  description: 'Wedding invitation application'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <body className={`${times.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
