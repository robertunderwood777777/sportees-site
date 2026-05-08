'use client';

import { useState } from 'react';

const PHONE_DISPLAY = '(405) 000-0000';
const PHONE_LINK = 'tel:4050000000';
const EMAIL = 'sporteesscreenprintingllc@gmail.com';

const galleryImages = [
  {
    src: '/images/405-obs-hoodie.png',
    alt: 'Black 405 OBS custom printed hoodie by SporTees Screen Printing in Harrah Oklahoma',
  },
  {
    src: '/images/screen-printing-shop.png',
    alt: 'SporTees Screen Printing shop workspace with screen printing press equipment',
  },
  {
    src: '/images/conveyor-dryer-equipment.png',
    alt: 'Conveyor dryer equipment used for custom screen printing production',
  },
  {
    src: '/images/black-harrah-panthers-shirt.png',
    alt: 'Black Harrah Panthers custom printed shirt on display',
  },
  {
    src: '/images/blue-harrah-panthers-shirt.png',
    alt: 'Blue Harrah Panthers custom printed team shirt on display',
  },
  {
    src: '/images/gray-harrah-panthers-shirt.png',
    alt: 'Gray Harrah Panthers custom printed shirt with paw print design on display',
  },
];

const services = [
  {
    title: 'Custom Screen Printing',
    description:
      'High-quality custom screen printing for t-shirts, hoodies, and apparel for businesses, teams, schools, and personal projects.',
  },
  {
    title: 'Vinyl Decals & Stickers',
    description:
      'Custom vinyl decals and stickers for vehicles, windows, laptops, branding, and promotional use with durable materials.',
  },
  {
    title: 'Heat Press T-Shirts',
    description:
      'Fast-turnaround heat press shirts with crisp, detailed designs for small runs, events, teams, and personalized orders.',
  },
  {
    title: 'Car Window Decals',
    description:
      'Weather-resistant custom car and truck window decals for personal use, small businesses, and local branding.',
  },
  {
    title: 'Business Logo Apparel',
    description:
      'Professional branded shirts, hoodies, and uniforms featuring your company logo for staff, promotions, and events.',
  },
  {
    title: 'Team Uniforms',
    description:
      'Custom team uniforms and spirit wear for schools, sports teams, clubs, organizations, and local groups.',
  },
];

export default function SporTeesWebsite() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="site-page">
      {/* NAV */}
      <header className="site-nav">
        <a href="#top" className="brand-link" aria-label="SporTees Home">
          <span className="brand-main">SporTees</span>
          <span className="brand-sub">Screen Printing</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href={PHONE_LINK} className="nav-call">Call Now</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="hero-section">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Family-owned in Harrah, Oklahoma</p>

            <h1>Custom Screen Printing & Vinyl Decals in Harrah, Oklahoma</h1>

            <p className="hero-text">
              High-quality custom t-shirts, vinyl decals, business logo apparel, stickers, and team uniforms serving Harrah, Choctaw, Shawnee, Midwest City, and the Oklahoma City metro area.
            </p>

            <div className="hero-actions">
              <a href={PHONE_LINK} className="button button-light">
                Call Now
              </a>
              <a href="#services" className="button button-outline">
                View Services
              </a>
            </div>
          </div>

          <aside className="trust-card">
            <h2>Why Local Businesses Choose SporTees</h2>
            <ul>
              <li>Fast turnaround times</li>
              <li>High-quality custom apparel</li>
              <li>Durable vinyl decals & stickers</li>
              <li>Affordable pricing for businesses & teams</li>
              <li>Family-owned Oklahoma business</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-muted">
        <div className="site-container narrow text-center">
          <h2>About SporTees Screen Printing</h2>
          <p>
            SporTees Screen Printing is a family-owned custom screen printing and vinyl decal shop in Harrah, Oklahoma, specializing in custom t-shirts, business logo apparel, team uniforms, heat press shirts, and vinyl stickers. We provide high-quality custom apparel and printing services for businesses, schools, sports teams, and individuals across Harrah, Choctaw, Shawnee, Midwest City, and the Oklahoma City metro area.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="site-container">
          <div className="section-heading">
            <h2>Our Services</h2>
            <p>
              Professional custom printing and branding solutions for businesses, schools, teams, and events.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="service-area-section">
        <div className="site-container text-center narrow">
          <h2>Proudly Serving Oklahoma</h2>
          <p>
            We proudly serve Harrah, Choctaw, Shawnee, Midwest City, Oklahoma City, and surrounding Oklahoma communities with custom screen printing, heat press apparel, business logo shirts, vinyl decals, and custom stickers.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section section-muted">
        <div className="site-container">
          <div className="section-heading">
            <h2>Recent Work</h2>
            <p>
              Real custom screen printing, vinyl decals, apparel, and business branding projects.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <button
                key={image.src}
                type="button"
                className="gallery-card"
                onClick={() => setSelectedImage(image.src)}
                aria-label={`Enlarge ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} />
                <span className="gallery-overlay">Click to Enlarge</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="site-container narrow text-center">
          <h2>Get a Free Quote</h2>
          <p>
            Need custom shirts, decals, business apparel, or promotional products? Contact SporTees Screen Printing today for fast, professional service.
          </p>

          <div className="contact-card">
            <p>
              <strong>Phone:</strong> {PHONE_DISPLAY}
            </p>
            <p>
              <strong>Email:</strong> {EMAIL}
            </p>
            <p>
              <strong>Service Area:</strong> Harrah, OK & Oklahoma City Metro
            </p>

            <a href={PHONE_LINK} className="button button-dark contact-button">
              Call Now for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <strong>SporTees Screen Printing</strong>
            <p>Custom Screen Printing & Vinyl Decals in Harrah, Oklahoma</p>
          </div>
          <div>
            <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CALL BUTTON */}
      <a href={PHONE_LINK} className="mobile-call-button">
        Call Now
      </a>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close enlarged image"
            >
              ×
            </button>

            <img src={selectedImage} alt="Expanded SporTees project" />
          </div>
        </div>
      )}
    </main>
  );
}
