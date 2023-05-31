import './globals.css';

import Nav from './nav';
import { Suspense } from 'react';

export const metadata = {
  title: 'FitoRegis',
  description:
    'Registro de datos fitosanitarios para el control de plagas y enfermedades en cultivos agrícolas.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
