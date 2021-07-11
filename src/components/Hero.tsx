import { Form } from './Form';

export const Hero = () => (
  <div className="flex flex-col items-center space-y-5">
    <h1 className="text-[74px] leading-[1.1] mt-20 font-bold">
      Learning community
    </h1>

    <h2 className="text-[20px]">
      Education for all. Write, think and explore together.
    </h2>

    <div className="mt-5">
      <Form />
    </div>
  </div>
);
