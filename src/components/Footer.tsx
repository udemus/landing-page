import { ReactNode } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Nav = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <nav className="flex flex-col space-y-2">
    <div className="font-semibold">{title}</div>

    {children}
  </nav>
);

export const Footer = () => (
  <>
    <div className="mt-[120px] h-[1px] bg-[#e2e8f0] w-full w-full" />
    <div className="py-[60px] flex justify-between w-full">
      <div className="flex flex-col space-y-4">
        <Logo />
        <div className="text-neutralSecondary">
          © 2021 Udemus. All rights reserved.
        </div>
        <div className="text-neutralSecondary">
          <Link href="/terms">
            <a>Terms</a>
          </Link>{' '}
          ·{' '}
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </div>
      </div>

      {/* <Nav title="Product"> */}
      {/*  <Link href="/"> */}
      {/*    <a>Overview</a> */}
      {/*  </Link> */}
      {/* </Nav> */}

      {/* <Nav title="Company"> */}
      {/*  <Link href="/about-us"> */}
      {/*    <a>About us</a> */}
      {/*  </Link> */}
      {/* </Nav> */}

      <Nav title="Contact">
        <div>
          <a
            href="https://twitter.com/udem_us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter @udem_us
          </a>
        </div>
        <div>
          <a
            href="https://github.com/udecode/slate-plugins"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div>
          <a href="mailto:hello@udemus.com">Email us</a>
        </div>
      </Nav>
    </div>
  </>
);
