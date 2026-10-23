import './globals.css';

export const metadata = { title: 'CodeLab | كود لاب', description: 'منصة تعليمية متكاملة لتعلم البرمجة' };
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#0b0816' };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
