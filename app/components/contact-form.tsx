"use client";

import { useState } from "react";

import type { ContactFormValues } from "../lib/types";

type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;
type FormStatus = "idle" | "submitting" | "success";

const projectTypes = [
  "Residencial",
  "Comercial",
  "Reforma integral",
  "Interiorismo",
  "Consulta general",
];

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  projectType: "Residencial",
  message: "",
};

function validate(values: ContactFormValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) errors.name = "Escribí tu nombre.";
  if (!values.email.trim()) {
    errors.email = "Escribí tu email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Revisá el formato del email.";
  }
  if (!values.message.trim()) errors.message = "Contanos brevemente sobre tu proyecto.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...values, [field]: value }));
    }
    if (status === "success") setStatus("idle");
  };

  const handleBlur = (field: keyof ContactFormValues) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 600);
  };

  if (status === "success") {
    return (
      <div
        className="border-t border-norma-field pt-8"
        role="status"
        aria-live="polite"
      >
        <p className="font-editorial text-[clamp(2.4rem,3.4vw,3.4rem)] leading-none tracking-[-0.04em]">
          Gracias por escribirnos, {values.name.split(" ")[0]}.
        </p>
        <p className="mt-4 text-[15px] leading-[1.7] text-norma-muted">
          Recibimos tu consulta para un proyecto de tipo{" "}
          <strong className="text-norma-ink">{values.projectType}</strong>. Nuestro equipo se pondrá en contacto a{" "}
          <strong className="text-norma-ink">{values.email}</strong> en las próximas 24 horas hábiles.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-sm bg-norma-soft px-3.5 py-2 text-[11px] text-norma-muted">
          <span>✓</span>
          <span>Demostración de flujo completada exitosamente</span>
        </div>
        <div className="mt-8">
          <button
            type="button"
            className="norma-link norma-focus text-[11px] font-semibold uppercase tracking-[0.14em]"
            onClick={() => {
              setValues(initialValues);
              setErrors({});
              setTouched({});
              setStatus("idle");
            }}
          >
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="max-w-[650px]" onSubmit={handleSubmit} noValidate>
      {/* Project Type Chips */}
      <div className="mb-8">
        <label className="block text-[11px] font-bold tracking-[0.16em] uppercase text-norma-ink">
          Tipo de Proyecto
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {projectTypes.map((type) => {
            const selected = values.projectType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => updateField("projectType", type)}
                className={`norma-focus border px-3.5 py-1.5 text-[11px] font-medium transition-colors ${
                  selected
                    ? "border-norma-ink bg-norma-ink text-white"
                    : "border-norma-rule bg-transparent text-norma-muted hover:border-norma-ink hover:text-norma-ink"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {(
        [
          { field: "name", label: "NOMBRE", placeholder: "Tu nombre", type: "text" },
          { field: "email", label: "EMAIL", placeholder: "tu@email.com", type: "email" },
        ] as const
      ).map((input) => {
        const error = touched[input.field] ? errors[input.field] : undefined;
        const errorId = `${input.field}-error`;

        return (
          <label
            key={input.field}
            htmlFor={input.field}
            className="mt-8 block border-b border-norma-field pb-3 first:mt-0"
          >
            <span className="block text-[11px] font-bold tracking-[0.16em]">
              {input.label}
            </span>
            <input
              id={input.field}
              name={input.field}
              type={input.type}
              value={values[input.field]}
              placeholder={input.placeholder}
              autoComplete={input.field === "name" ? "name" : "email"}
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className="norma-field norma-focus mt-2 w-full border-0 bg-transparent p-0 text-[18px] outline-hidden"
              onChange={(event) => updateField(input.field, event.target.value)}
              onBlur={() => handleBlur(input.field)}
            />
            {error ? (
              <span id={errorId} className="mt-2 block text-[11px] text-red-800">
                {error}
              </span>
            ) : null}
          </label>
        );
      })}

      <label htmlFor="message" className="mt-8 block border-b border-norma-field pb-3">
        <span className="block text-[11px] font-bold tracking-[0.16em]">MENSAJE</span>
        <textarea
          id="message"
          name="message"
          value={values.message}
          placeholder="Contanos sobre la ubicación, m² estimados o ideas de tu proyecto..."
          required
          rows={3}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={touched.message && errors.message ? "message-error" : undefined}
          className="norma-field norma-focus mt-2 min-h-[90px] w-full resize-none border-0 bg-transparent p-0 text-[18px] outline-hidden"
          onChange={(event) => updateField("message", event.target.value)}
          onBlur={() => handleBlur("message")}
        />
        {touched.message && errors.message ? (
          <span id="message-error" className="mt-2 block text-[11px] text-red-800">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="norma-focus bg-norma-ink px-8 py-4 text-[11px] font-bold uppercase tracking-[0.13em] text-white transition-colors duration-200 hover:bg-norma-muted disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <span className="text-[11px] text-norma-muted">
          Respuesta habitual en &lt; 24hs
        </span>
      </div>
    </form>
  );
}

