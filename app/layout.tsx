import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`} />
    </html>
  );
}
