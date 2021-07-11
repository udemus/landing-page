import Link from 'next/link';
import { Logo } from './Logo';

export const Header = () => (
  <div className="h-[80px] flex items-center justify-between w-full">
    <div>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-semibold">
        <li className="px-2.5">
          <Link href="/">
            <a>Product</a>
          </Link>
        </li>
        {/* <li className="px-2.5"> */}
        {/*  <Link href="/about-us"> */}
        {/*    <a>About Us</a> */}
        {/*  </Link> */}
        {/* </li> */}
      </ul>
    </nav>
  </div>
);
