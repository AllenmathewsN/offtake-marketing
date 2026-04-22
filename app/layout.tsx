import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Offtake Marketing | Youth Marketing & Brand Activations Kenya',
  description: 'Kenya\'s leading youth marketing and brand activation agency. Experiential marketing, influencer campaigns, and nationwide activations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
