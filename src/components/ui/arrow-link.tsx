import Link from "next/link";

import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: string;
  className?: string;
  external?: boolean;
};

export function ArrowLink({ href, children, className, external }: ArrowLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 38 12">
        <path d="M0 6h35M30 1l5 5-5 5" />
      </svg>
    </>
  );
  const classes = cn("arrow-link", className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
