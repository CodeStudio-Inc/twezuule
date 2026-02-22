"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  organization: z.string().min(2, "Enter your organization name."),
  contactName: z.string().min(2, "Enter a contact person."),
  email: z.string().email("Enter a valid email."),
  interest: z.string().min(2, "Tell us your partnership interest."),
  message: z.string().min(10, "Share a short message."),
});

type FormData = z.infer<typeof schema>;

export default function PartnershipForm() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="partner-organization" className="text-sm font-semibold text-slate-700">
          Organization
        </label>
        <input
          id="partner-organization"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("organization")}
        />
        {errors.organization ? (
          <p className="mt-1 text-xs text-red-600">{errors.organization.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="partner-contact" className="text-sm font-semibold text-slate-700">
          Contact person
        </label>
        <input
          id="partner-contact"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("contactName")}
        />
        {errors.contactName ? <p className="mt-1 text-xs text-red-600">{errors.contactName.message}</p> : null}
      </div>
      <div>
        <label htmlFor="partner-email" className="text-sm font-semibold text-slate-700">
          Email address
        </label>
        <input
          id="partner-email"
          type="email"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("email")}
        />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
      </div>
      <div>
        <label htmlFor="partner-interest" className="text-sm font-semibold text-slate-700">
          Partnership interest
        </label>
        <input
          id="partner-interest"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("interest")}
        />
        {errors.interest ? <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p> : null}
      </div>
      <div>
        <label htmlFor="partner-message" className="text-sm font-semibold text-slate-700">
          Message
        </label>
        <textarea
          id="partner-message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("message")}
        />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>
      <button
        type="submit"
        className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit partnership interest"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-emerald-600">Thank you! We will respond shortly.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
