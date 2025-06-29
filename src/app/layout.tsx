import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'CRUD Users & Posts',
  description: 'Projeto Next.js + Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
