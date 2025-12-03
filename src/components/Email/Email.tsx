import React, { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import useEmailJs from "../../Hooks/useEmail";

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
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s work together</h2>
          <p className="text-slate-300">Drop me a note and I’ll get back to you soon.</p>
        </div>

        {firstError && <p className="text-center text-sm text-rose-300">{firstError}</p>}

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="card-surface space-y-4 p-6"
        >
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
              placeholder="Tell me about your idea, a role, or how I can help."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
            />
          </label>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading || !isValid}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
