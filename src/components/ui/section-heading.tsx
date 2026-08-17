import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  italic?: string;
  className?: string;
  level?: 1 | 2;
};

export function SectionHeading({
  eyebrow,
  title,
  italic,
  className,
  level = 2,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className={cn("section-heading", className)}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <Heading className="section-heading__title">
        {title}
        {italic ? <em>{italic}</em> : null}
      </Heading>
    </div>
  );
}
