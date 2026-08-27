type Metric = {
  value: string;
  label: string;
};

type MetricStripProps = {
  metrics: Metric[];
  variant?: "centered" | "ruled";
};

export function MetricStrip({
  metrics,
  variant = "centered",
}: MetricStripProps) {
  if (variant === "ruled") {
    return (
      <section
        aria-label="Datos del estudio"
        className="border-b border-norma-rule px-6 md:px-10 lg:px-14"
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`border-b border-norma-rule py-8 md:border-b-0 md:py-9 ${
                index % 2 === 0 ? "pr-5 md:pr-7" : "pl-5 md:pl-7 md:pr-7"
              } ${index >= 2 ? "md:border-l md:border-norma-rule" : ""}`}
            >
              <p className="font-editorial text-[30px] leading-none tracking-[-0.05em]">
                {metric.value}
              </p>
              <div className="my-4 h-px w-full bg-norma-rule" />
              <p className="text-[10px] md:text-[8px] font-semibold uppercase tracking-[0.16em] text-norma-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-norma-rule bg-norma-soft">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-[clamp(72px,8vw,104px)] text-center md:grid-cols-3 md:gap-10 md:px-[5vw]">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-editorial text-[clamp(3.5rem,6vw,6.25rem)] leading-[0.8] tracking-[-0.05em]">
              {metric.value}
            </p>
            <p className="mt-6 text-[12px] md:text-[11px] font-semibold uppercase tracking-[0.14em] text-norma-muted">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
