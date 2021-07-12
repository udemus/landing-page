import { Section } from '../layout/Section';
import { Form } from './Form';

export const Features = () => (
  <>
    <Section
      title="Built for unique people"
      description="Never get lost with personalized education"
      imageProps={{
        src: 'v1626129065/section-1_nfg2hj.png',
        alt: 'Home Feed',
        width: 1880,
        height: 1368,
      }}
    />

    <Section
      title="First-class editor"
      description="Organize your knowledge into interactive pages"
      imageProps={{
        src: 'v1626129067/section-2_jnnpxg.png',
        alt: 'Editor',
        width: 1880,
        height: 1107,
      }}
    />

    <Section
      title="Udemus is in your hands"
      description="Learn smarter, not harder"
    />

    <div className="mt-5">
      <Form />
    </div>
  </>
);
