import { Form } from './Form';

export const Hero = () => (
  <div className="flex flex-col items-center space-y-5">
    <h1 className="leading-[1.05] text-[50px] md:text-[74px] md:leading-[1.1] mt-20 text-center font-bold">
      Learning community
    </h1>

    <h2 className="text-[20px] md:text-[17px] text-center">
      Free education for all. Write, think and explore together.
    </h2>

    <div className="mt-5">
      <Form />
    </div>
  </div>
);
