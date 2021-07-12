import { PrimaryButton, TextField } from '@fluentui/react';

export const Form = () => (
  <div className="flex space-x-2.5">
    <TextField placeholder="Enter your email..." className="w-[260px]" />
    <PrimaryButton>Join waitlist</PrimaryButton>
  </div>
);
