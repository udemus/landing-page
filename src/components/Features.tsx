import Section1 from '../../public/assets/images/section-1.png';
import Section2 from '../../public/assets/images/section-2.png';
import { Section } from '../layout/Section';
import { Form } from './Form';

export const Features = () => (
  <>
    <Section
      title="Built for unique people"
      description="Never get lost with personalized education"
      image={Section1}
      imageAlt="Home Timeline"
    />

    <Section
      title="First-class editor"
      description="Organize your knowledge into interactive pages"
      image={Section2}
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
