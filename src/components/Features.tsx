import { Section } from '../layout/Section';
import { Form } from './Form';

export const Features = () => (
  <>
    <Section
      title="Built for unique people"
      description="Never get lost with personalized education"
      image="/assets/images/section-1.png"
      imageAlt="Home Timeline"
    />

    <Section
      title="First-class editor"
      description="Organize your knowledge into interactive pages"
      image="/assets/images/section-2.png"
      imageAlt="Editor"
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
