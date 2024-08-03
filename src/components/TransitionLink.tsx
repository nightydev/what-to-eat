'use client';
import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default function TransitionLink({ children, href, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const body = document.querySelector('body');

    body?.classList.add('page-transition')

    await sleep(500);

    router.push(href);

    await sleep(500);

    body?.classList.remove('page-transition');
  }

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
}