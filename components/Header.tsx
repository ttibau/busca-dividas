'use client';

import { useState, useEffect } from 'react';
import type { JSX } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ButtonSignin from './ButtonSignin';
import logo from '@/app/icon.png';
import config from '@/config';

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: '/#pricing',
    label: 'Valores',
  },
  {
    href: '/#about',
    label: 'Sobre',
  },
  {
    href: '/#faq',
    label: 'FAQ',
  },
];

const cta: JSX.Element = <ButtonSignin extraStyle="btn-primary" />;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-white shadow-md z-50 fixed w-full top-0">
      <nav
        className="flex items-center justify-between px-5 py-4 w-full"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex">
          <Link
            className="flex items-center gap-2 shrink-0 "
            href="/"
            title={`${config.appName} hompage`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 text-violet-700"
              fill="#4338ca"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
            <span className="font-extrabold text-2xl text-center">
              <span className="text-violet-700 uppercase">Busca</span> <br />{' '}
              <span className="uppercase text-[#1f2937]">dívidas</span>
            </span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                onClick={() => setIsOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-base-content"
                onClick={() => setIsOpen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden ml-8 lg:flex lg:justify-center lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-base text-black font-medium hover:bg-[#e5e7eb] transition-all py-2 px-6 rounded-lg hover:font-semibold"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <button className="btn btn-gradient animate-shimmer max-sm:w-28 max-sm:text-[0.5rem] w-[160px]">
            Consultar <span className="uppercase">cpf</span>
          </button>
        </div>
      </nav>

      {/* <button className="btn btn-gradient animate-shimmer max-sm:w-28 max-sm:text-[0.5rem] w-[160px] flex-1 self-end">
            Consultar cpf
          </button> */}
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? '' : 'hidden'}`}>
        <div
          className={`fixed inset-y-0 w-full max-w-[320px] right-0 z-10 px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300 mt-[96px] shadow-md`}
        >
          {/* Your logo/name on small screens */}

          {/* Your links on small screens */}
          <div className="flow-root mt-4">
            {/* Your CTA on small screens */}
            <div className="flex flex-col">
              <button className="btn btn-gradient animate-shimmer w-full">
                Consultar <span className="uppercase">cpf</span>
              </button>
              <div className="divider"></div>
              <div className="py-0">
                <div className="flex flex-col gap-y-2 items-start">
                  {links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="link link-hover py-2 text-lg text-gray-800 font-medium"
                      title={link.label}
                    >
                      - {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
