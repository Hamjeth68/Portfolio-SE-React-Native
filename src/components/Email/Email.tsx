import React, { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import useEmailJs from "../../Hooks/useEmail";
import Reveal from "../Reveal";

type ContactFormData = {
  email: string;
  message: string;
  name?: string;
};

const ContactMe: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  const { sendEmail, isLoading } = useEmailJs();
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = useCallback(async () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      await sendEmail(formData);
      reset();
    }
  }, [reset, sendEmail]);

  const firstError = errors.email?.message || errors.message?.message;

  return (
    <section id="contact" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-4">
        <Reveal className="space-y-2 text-center">
          <p className="section-kicker">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Let&apos;s build something <span className="text-gradient-animate">better</span>
          </h2>
          <p className="mx-auto max-w-2xl text-soft">
            If you&apos;re building a product, refreshing an existing app, or need help shipping a stronger experience,
            send me a note here.
          </p>
        </Reveal>

        {firstError && <p className="text-center text-sm text-rose-300" role="alert">{firstError}</p>}

        <Reveal delayMs={100}>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="hero-card space-y-4 p-6"
          >
          <div className="grid gap-4 rounded-lg border border-line bg-bg/60 p-4 md:grid-cols-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Best for</p>
              <p className="mt-2 text-sm text-ink">New products</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Also for</p>
              <p className="mt-2 text-sm text-ink">UI refreshes</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">And</p>
              <p className="mt-2 text-sm text-ink">AI-assisted features</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-soft">
              Name
              <input
                type="text"
                {...register("name")}
                placeholder="How should I call you?"
                className="field"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-soft">
              Email
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="you@example.com"
                className="field"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-soft">
            Message
            <textarea
              rows={5}
              {...register("message", { required: "Message is required" })}
              placeholder="Tell me about your idea, product, redesign, or how I can help."
              className="field"
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading || !isValid}
              className="btn-primary"
            >
              {isLoading ? "Sending…" : "Send message"}
            </button>
          </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactMe;
