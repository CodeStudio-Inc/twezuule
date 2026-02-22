"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(8, "Enter a phone number."),
  location: z.string().min(2, "Enter your location."),
  interest: z.string().min(2, "Tell us your area of interest."),
  availability: z.string().min(2, "Share your availability."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function VolunteerForm() {
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
        <label htmlFor="volunteer-name" className="text-sm font-semibold text-slate-700">
          Full name
        </label>
        <input
          id="volunteer-name"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("name")}
        />
        {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name.message}</p> : null}
      </div>
      <div>
        <label htmlFor="volunteer-email" className="text-sm font-semibold text-slate-700">
          Email address
        </label>
        <input
          id="volunteer-email"
          type="email"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("email")}
        />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
      </div>
      <div>
        <label htmlFor="volunteer-phone" className="text-sm font-semibold text-slate-700">
          Phone
        </label>
        <input
          id="volunteer-phone"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("phone")}
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
      </div>
      <div>
        <label htmlFor="volunteer-location" className="text-sm font-semibold text-slate-700">
          Location
        </label>
        <input
          id="volunteer-location"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("location")}
        />
        {errors.location ? <p className="mt-1 text-xs text-red-600">{errors.location.message}</p> : null}
      </div>
      <div>
        <label htmlFor="volunteer-interest" className="text-sm font-semibold text-slate-700">
          Area of interest
        </label>
        <input
          id="volunteer-interest"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("interest")}
        />
        {errors.interest ? <p className="mt-1 text-xs text-red-600">{errors.interest.message}</p> : null}
      </div>
      <div>
        <label htmlFor="volunteer-availability" className="text-sm font-semibold text-slate-700">
          Availability
        </label>
        <input
          id="volunteer-availability"
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("availability")}
        />
        {errors.availability ? (
          <p className="mt-1 text-xs text-red-600">{errors.availability.message}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="volunteer-message" className="text-sm font-semibold text-slate-700">
          Additional notes (optional)
        </label>
        <textarea
          id="volunteer-message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2"
          {...register("message")}
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit volunteer interest"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-emerald-600">Thank you! We will reach out with next steps.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
