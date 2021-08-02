import { Section } from '../layout/Section';
import { Form } from './Form';

export const Features = () => (
  <>
    <Section
      title="Built for unique people"
      description="Enjoy your personalized learning feed"
      imageProps={{
        src: 'v1626129065/browser1_n7mftw',
        alt: 'Learning feed',
        width: 1880,
        height: 1664,
      }}
    />

    <Section
      title="Powerful editor"
      description="Create an amazing interactive learning experience"
      imageProps={{
        src: 'v1626129067/browser2_fdjoxt',
        alt: 'Editor',
        width: 1880,
        height: 1397,
      }}
    />

    <Section
      title="Map your knowledge"
      description="Create and share dynamic learning paths"
      imageProps={{
        src: 'v1626129067/browser3_kqhr0s',
        alt: 'Knowledge map',
        width: 1880,
        height: 1025,
      }}
    />
    <Section
      title="Practice your skills"
      description="Keep track of your progress for an optimized learning experience"
      imageProps={{
        src: 'v1626129067/browser4_blap7e',
        alt: 'Learn',
        width: 1880,
        height: 1125,
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
