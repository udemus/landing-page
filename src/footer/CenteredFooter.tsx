import { ReactNode } from 'react';
import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

export const CenteredFooter = ({
  children,
  iconList,
  logo,
}: ICenteredFooterProps) => (
  <div className="text-center">
    {logo}

    <nav>
      <ul className="navbar text-gray-800 flex flex-row justify-center mt-5 text-xl font-medium">
        {children}
      </ul>
    </nav>

    <div className="flex justify-center mt-8">
      <FooterIconList>{iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);
