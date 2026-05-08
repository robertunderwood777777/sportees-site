import './globals.css';

export const metadata = {
  metadataBase: new URL('https://sporteesscreenprinting.com'),
  title: 'Custom Screen Printing & Vinyl Decals Harrah OK | SporTees',
  description:
    'Professional custom screen printing, vinyl decals, heat press shirts, business logo apparel, and team uniforms in Harrah, Oklahoma. Serving Harrah, Choctaw, Shawnee, Midwest City & OKC Metro.',
  keywords: [
    'screen printing Harrah OK',
    'custom t-shirts Harrah Oklahoma',
    'vinyl decals Harrah',
    'heat press shirts Oklahoma',
    'business logo apparel Harrah',
    'team uniforms Harrah OK',
    'custom screen printing Oklahoma City',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}