import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhoro Ndirangu | Full-Stack Web Developer • AI/ML Enthusiast',
  description:
    'Portfolio website for Muhoro Ndirangu, a Computer Science student focused on web development and AI/ML.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
