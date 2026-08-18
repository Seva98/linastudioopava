import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  eager?: boolean;
  linked?: boolean;
};

export function Logo({ className, eager, linked = true }: LogoProps) {
  const logo = (
    <Image
      src="/brand/lina-studio-accent.svg"
      alt="Lina Studio"
      width={1009}
      height={494}
      className={cn("site-logo", className)}
      loading={eager ? "eager" : undefined}
      fetchPriority={eager ? "high" : undefined}
    />
  );

  return linked ? (
    <Link href="/" aria-label="Lina Studio Opava – úvod">
      {logo}
    </Link>
  ) : (
    logo
  );
}
