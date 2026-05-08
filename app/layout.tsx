import './globals.css';

export const metadata = {
  title: 'SporTees Screen Printing | Custom Shirts & Vinyl Decals in Harrah OK',
  description:
    'SporTees Screen Printing provides custom screen printing, vinyl decals, heat press shirts, business logo apparel, team uniforms, and custom stickers in Harrah, Oklahoma. Serving Choctaw, Shawnee, Midwest City, and the Oklahoma City metro area.',
  openGraph: {
    title: 'SporTees Screen Printing | Harrah, Oklahoma',
    description:
      'Custom screen printing, vinyl decals, custom shirts, team uniforms, business apparel, and stickers serving Harrah and the Oklahoma City metro area.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
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