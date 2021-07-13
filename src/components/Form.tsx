import { css } from 'styled-components';

export const Form = () => (
  <div
    className="ml-form-embed min-h-[83px]"
    data-account="3292648:j0b6l7d2p0"
    data-form="4395622:f7b6d5"
    css={css`
      .embedForm {
        max-width: none !important;
      }

      .ml-form-horizontalRow input,
      .ml-form-horizontalRow button,
      .ml-form-successContent h4,
      .ml-form-successContent p {
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica,
          Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
        color: #323130 !important;
      }

      .ml-input-horizontal {
        width: 260px !important;
      }

      .ml-button-horizontal {
        width: auto !important;
      }

      .ml-form-horizontalRow input,
      .ml-form-horizontalRow button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px !important;
      }

      .ml-form-horizontalRow button {
        font-weight: 600 !important;
      }

      .ml-form-successContent h4 {
        font-weight: 600 !important;
      }

      .ml-form-successContent p {
        font-size: 16px !important;
      }

      .ml-form-embedSubmitLoad:after {
        width: 100% !important;
        height: 100% !important;
      }
    `}
  />
  // <div className="flex space-x-2.5">
  //   <TextField placeholder="Enter your email..." className="w-[260px]" />
  //   <PrimaryButton>Join waitlist</PrimaryButton>
  // </div>
);
