import type { SiteImage } from "../lib/types";
import { SiteImage as ResponsiveImage } from "./site-image";

type ProjectProcessProps = {
  image: SiteImage;
  body: string;
};

export function ProjectProcess({ image, body }: ProjectProcessProps) {
  return (
    <section className="px-6 py-[clamp(88px,14vw,182px)] md:px-[5vw]">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 border-t border-norma-rule pt-16 sm:pt-20 md:grid-cols-[1.08fr_0.92fr] md:gap-20 md:pt-24">
        <div className="relative aspect-[1.45] overflow-hidden">
          <ResponsiveImage image={image} />
        </div>
        <div className="md:pl-4">
          <h2 className="font-editorial text-[clamp(2.8rem,4vw,4rem)] leading-none tracking-[-0.05em]">
            El Proceso
          </h2>
          <p className="mt-8 max-w-[475px] text-[16px] leading-[1.75] text-norma-muted sm:mt-9 sm:text-[18px]">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
