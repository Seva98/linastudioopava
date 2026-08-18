import Image from "next/image";

import { cn } from "@/lib/cn";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  eager?: boolean;
};

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  eager,
}: MediaFrameProps) {
  return (
    <div className={cn("media-frame", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("media-frame__image", imageClassName)}
        sizes={sizes}
        loading={eager ? "eager" : undefined}
        fetchPriority={eager ? "high" : undefined}
      />
    </div>
  );
}
