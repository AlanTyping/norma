import type {
  MaterialityData,
  SiteImage,
} from "../lib/types";
import { SiteImage as ResponsiveImage } from "./site-image";

type MaterialityBandProps = {
  data: MaterialityData;
  variant?: "casa" | "feature";
  secondaryImage?: SiteImage;
};

function FeatureMotif({ motif }: { motif: "structure" | "light" | "wood" }) {
  const value = motif === "structure" ? "◇" : motif === "light" ? "○" : "▭";

  return (
    <span aria-hidden="true" className="mt-0.5 w-4 shrink-0 text-[12px] leading-none">
      {value}
    </span>
  );
}

export function MaterialityBand({
  data,
  variant = "feature",
  secondaryImage,
}: MaterialityBandProps) {
  if (variant === "casa") {
    return (
      <section className="border-y border-norma-rule bg-norma-soft px-6 py-[clamp(88px,12vw,176px)] md:px-[5vw]">
        <div className="mx-auto grid max-w-[1120px] items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <h2 className="max-w-[420px] font-editorial text-[clamp(3rem,4.4vw,4.55rem)] leading-[0.96] tracking-[-0.055em]">
              {data.title}
            </h2>
            <p className="mt-9 max-w-[480px] text-[15px] leading-[1.72] text-norma-muted sm:mt-11 sm:text-[17px]">
              {data.body}
            </p>
          </div>
          <div className="grid grid-cols-2 items-start gap-3 sm:gap-5">
            <div className="relative aspect-[0.76] overflow-hidden">
              <ResponsiveImage image={data.image} />
            </div>
            {secondaryImage ? (
              <div className="relative mt-9 aspect-[0.76] overflow-hidden sm:mt-14">
                <ResponsiveImage image={secondaryImage} />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-norma-rule bg-norma-soft px-6 py-[clamp(88px,9vw,126px)] md:px-[5vw]">
      <div className="text-center">
        {data.eyebrow ? (
          <p className="m-0 text-[9px] font-semibold uppercase tracking-[0.22em] text-norma-muted">
            {data.eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 font-editorial text-[clamp(2.7rem,4.6vw,4.2rem)] leading-none tracking-[-0.06em]">
          {data.title}
        </h2>
      </div>
      <div className="mx-auto mt-[clamp(50px,6vw,76px)] grid max-w-[1120px] items-center gap-12 md:grid-cols-[1.03fr_0.97fr] md:gap-[clamp(48px,7vw,108px)]">
        <div className="relative aspect-[1.05] overflow-hidden md:aspect-[1.07]">
          <ResponsiveImage image={data.image} />
        </div>
        <div className="max-w-[500px] text-[15px] leading-[1.68] text-norma-muted">
          <p className="m-0">{data.body}</p>
          {data.features?.length ? (
            <div className="mt-9 border-t border-norma-rule">
              {data.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 border-b border-norma-rule py-4"
                >
                  <FeatureMotif motif={feature.motif} />
                  <div>
                    <h3 className="m-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-norma-ink">
                      {feature.title}
                    </h3>
                    <p className="m-0 mt-1 text-[11px] leading-[1.4]">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
