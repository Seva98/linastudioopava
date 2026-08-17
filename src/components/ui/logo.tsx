import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
  linked?: boolean;
};

export function Logo({ className, priority, linked = true }: LogoProps) {
  const logo = (
    <Image
      src="/logo.svg"
      alt="Studio Lina"
      width={220}
      height={112}
      className={cn("site-logo", className)}
      priority={priority}
      loading={priority ? "eager" : undefined}
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
