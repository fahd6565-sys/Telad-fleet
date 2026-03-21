import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Telad Fleet System',
  description: 'Fleet management system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
