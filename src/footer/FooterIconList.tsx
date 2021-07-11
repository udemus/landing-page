import { ReactNode } from 'react';
import tw, { css } from 'twin.macro';

type IFooterIconListProps = {
  children: ReactNode;
};

export const FooterIconList = ({ children }: IFooterIconListProps) => (
  <div
    className="footer-icon-list flex flex-wrap"
    css={css`
      a:not(:last-child) {
        ${tw`mr-3`}
      }

      svg {
        ${tw`w-5 h-5 fill-current`}
      }
    `}
  >
    {children}
  </div>
);
