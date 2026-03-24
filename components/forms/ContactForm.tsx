"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  subject: z.string().min(2, "Enter a subject."),
  message: z.string().min(10, "Please add a message."),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold text-slate-700">
          Full name
        </label>
        <input
          id="contact-name"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
          {...register("name")}
        />
        {errors.name ? (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-semibold text-slate-700">
          Email address
        </label>
        <input
          id="contact-email"
          type="email"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="contact-subject" className="text-sm font-semibold text-slate-700">
          Subject
        </label>
        <input
          id="contact-subject"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
          {...register("subject")}
        />
        {errors.subject ? (
          <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-slate-700">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-emerald-600">Thanks for reaching out. We will respond soon.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
