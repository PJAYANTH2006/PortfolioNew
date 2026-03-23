import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3",
        align === "center" && "items-center text-center"
      )}
    >
      <span className="text-xs uppercase tracking-[0.35em] text-muted">
        Highlight
      </span>
      <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
