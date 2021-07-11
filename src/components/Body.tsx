import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from './Features';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';

export const Body = () => (
  <div className="flex flex-col items-center text-neutralPrimary antialiased">
    <div className="w-[1260px] relative flex flex-col items-center">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  </div>
);
