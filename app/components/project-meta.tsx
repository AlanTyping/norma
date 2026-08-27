import type { ProjectMeta as ProjectMetaData } from "../lib/types";

type ProjectMetaProps = {
  meta: ProjectMetaData;
  overlay?: boolean;
  layout?: "grid" | "rows" | "2x2";
};

const labels = [
  ["Tipología", "typology"],
  ["Ubicación", "location"],
  ["Superficie", "area"],
  ["Año", "year"],
] as const;

export function ProjectMeta({
  meta,
  overlay = false,
  layout = "grid",
}: ProjectMetaProps) {
  const isRows = layout === "rows";
  const is2x2 = layout === "2x2";

  return (
    <dl
      className={`${
        isRows
          ? "w-full border-t border-white/45"
          : is2x2
          ? "grid w-full max-w-[600px] grid-cols-2 gap-x-12 gap-y-6 border-t border-white/45 pt-6"
          : "grid grid-cols-2 md:grid-cols-4"
      } ${
        overlay
          ? isRows
            ? "text-white"
            : is2x2
            ? "text-white"
            : "border-t border-white/45 text-white"
          : "border-b border-norma-rule text-norma-ink"
      }`}
    >
      {labels.map(([label, key]) => (
        <div
          key={label}
          className={
            isRows
              ? "flex items-center justify-between gap-6 border-b border-white/25 py-3"
              : is2x2
              ? "flex flex-col gap-1"
              : "border-b border-norma-rule py-7 pr-5 last:border-b-0 md:border-b-0 md:py-9 md:pr-7"
          }
        >
          <dt
            className={`${
              overlay ? "text-white/65" : "text-norma-ink"
            } text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px]`}
          >
            {label}
          </dt>
          <dd
            className={`${
              overlay ? "text-white/95" : "text-norma-muted"
            } m-0 text-[13px] sm:text-[15px] ${
              isRows ? "text-right" : is2x2 ? "" : "mt-2 md:mt-3"
            }`}
          >
            {meta[key]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
