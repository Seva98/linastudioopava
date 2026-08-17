import Image from "next/image";

import { cn } from "@/lib/cn";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
}: MediaFrameProps) {
  return (
    <div className={cn("media-frame", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("media-frame__image", imageClassName)}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : undefined}
      />
    </div>
  );
}
