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
          <h2 className="text-3xl font-semibold md:text-4xl">
            Let&apos;s build something <span className="text-gradient-animate">better</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            If you&apos;re building a product, refreshing an existing app, or need help shipping a stronger experience,
            send me a note here.
          </p>
        </Reveal>

        {firstError && <p className="text-center text-sm text-rose-300">{firstError}</p>}

        <Reveal delayMs={100}>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="hero-card space-y-4 p-6"
          >
          <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-4 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Best for</p>
              <p className="mt-2 text-sm text-slate-200">New products</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Also for</p>
              <p className="mt-2 text-sm text-slate-200">UI refreshes</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">And</p>
              <p className="mt-2 text-sm text-slate-200">AI-assisted features</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
              Name
              <input
                type="text"
                {...register("name")}
                placeholder="How should I call you?"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
              Email
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
            Message
            <textarea
              rows={5}
              {...register("message", { required: "Message is required" })}
              placeholder="Tell me about your idea, product, redesign, or how I can help."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading || !isValid}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-orange-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
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
