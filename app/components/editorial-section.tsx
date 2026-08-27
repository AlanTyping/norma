type EditorialSectionProps = {
  id?: string;
  title: string;
  paragraphs: string[];
  label?: string;
  className?: string;
};

export function EditorialSection({
  id,
  title,
  paragraphs,
  label,
  className = "",
}: EditorialSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-b border-norma-rule px-6 py-[clamp(92px,11vw,154px)] md:px-[5vw] ${className}`}
    >
      <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[0.78fr_1.22fr] md:gap-[clamp(48px,9vw,150px)]">
        <div>
          {label ? (
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-norma-muted">
              {label}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="font-editorial text-[clamp(2.7rem,4.4vw,4.5rem)] leading-[0.94] tracking-[-0.055em]"
          >
            {title}
          </h2>
        </div>
        <div className="max-w-[675px] text-[15px] leading-[1.78] text-norma-muted sm:text-[17px] lg:text-[18px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 [&+p]:mt-8 sm:[&+p]:mt-10">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
