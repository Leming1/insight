import Hero from '@sections/Hero';
import Benefits from '@sections/Benefits';
import Spaces from '@sections/Spaces';
import FAQ from '@sections/FAQ';
import Reviews from '@sections/Reviews';
import Footer from '@sections/Footer';

function PageBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[520px]"
      style={{ background: 'red' }}
    />
  );
}

export default function Page() {
  return (
    <main className="relative">
      {/* Декоративная петля - абсолютный слой на всю ширину экрана */}
      <div className="pointer-events-none fixed inset-0 overflow-visible">
        <div className="absolute left-1/2 -translate-x-1/2 top-[36%] w-[140vw] max-w-[2600px]">
          <svg
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-none select-none"
          >
            <use href="/assets/curve.svg" />
          </svg>
        </div>
      </div>

      <Hero />

      <Spaces />

      <Benefits />

      <Reviews />

      <FAQ />

      <Footer />
    </main>
  );
}
