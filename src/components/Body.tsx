import { Footer } from '../footer/Footer';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Features } from './Features';
import { Header } from './Header';
import { Hero } from './Hero';

export const Body = () => (
  <div className="flex flex-col items-center text-neutralPrimary antialiased">
    <div className="max-w-[1280px] relative flex flex-col items-center px-5 w-full">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  </div>
);
