import Link from "next/link";

type TestimonialProps = {
  quote: string;
  author: string;
  cta?: string;
  id?: string;
};

export function Testimonial({ quote, author, cta, id }: TestimonialProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-quote` : undefined}
      className="border-y border-norma-rule bg-norma-testimonial px-6 py-[clamp(112px,15vw,190px)] md:px-[5vw]"
    >
      <div className="mx-auto flex min-h-[450px] max-w-[1120px] flex-col items-center justify-center text-center sm:min-h-[520px]">
        <div
          aria-hidden="true"
          className="font-editorial text-[clamp(4rem,6vw,5.5rem)] leading-none text-[#b9bfbe]"
        >
          99
        </div>
        <blockquote
          id={id ? `${id}-quote` : undefined}
          className="mt-10 max-w-[990px] font-editorial text-[clamp(2.25rem,4.4vw,4.35rem)] leading-[1.03] tracking-[-0.055em]"
        >
          “{quote}”
        </blockquote>
        <p className="mt-9 text-[11px] font-semibold tracking-[0.16em] text-norma-muted sm:text-[13px]">
          {author}
        </p>
        {cta ? (
          <Link
            href="/#contacto"
            className="norma-link norma-focus mt-16 text-[11px] font-semibold tracking-[0.12em] sm:mt-20 sm:text-[12px]"
          >
            {cta}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
