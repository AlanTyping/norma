import type { TeamMember } from "../lib/types";
import { SiteImage } from "./site-image";

type TeamSectionProps = {
  members: TeamMember[];
  additionalMembers: TeamMember[];
};

export function TeamSection({ members, additionalMembers }: TeamSectionProps) {
  return (
    <section id="equipo" className="border-b border-norma-rule px-6 py-24 md:px-10 md:py-36 lg:px-14">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="font-editorial text-[clamp(2.3rem,3.6vw,3.7rem)] leading-none tracking-[-0.055em]">
          El Equipo
        </h2>
        <div className="mt-16 grid items-start gap-12 md:grid-cols-[0.82fr_0.92fr] md:gap-16 md:px-10 lg:mt-20 lg:grid-cols-[0.76fr_0.84fr] lg:gap-24 lg:px-16">
          {members.map((member, index) => (
            <figure
              key={member.name}
              className={`max-w-[390px] ${index === 1 ? "md:mt-28" : ""}`}
            >
              {member.image ? (
                <div className="relative aspect-[0.82] overflow-hidden">
                  <SiteImage image={member.image} objectPosition="top" />
                </div>
              ) : null}
              <figcaption className="mt-5">
                <p className="font-editorial text-[23px] leading-none tracking-[-0.04em]">
                  {member.name}
                </p>
                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-norma-muted">
                  {member.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-24 border-t border-norma-rule pt-8 md:mt-28 md:pt-9">
          <div className="grid gap-9 md:grid-cols-3 md:gap-10">
            {additionalMembers.map((member) => (
              <div key={member.name}>
                <p className="font-editorial text-[19px] leading-none tracking-[-0.03em]">
                  {member.name}
                </p>
                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-norma-muted">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
