"use client";

import { useState } from "react";
import { TextInput } from "@/components/ui";
import { colorClasses, typography } from "@/lib/design-system";
import { cn } from "@/lib/cn";

type PasswordFormProps = {
  password: string;
  onSuccess: () => void;
  submitLabel?: string;
  autoFocus?: boolean;
  initialValue?: string;
};

export function PasswordForm({
  password,
  onSuccess,
  submitLabel = "Unlock",
  autoFocus,
  initialValue = "",
}: PasswordFormProps) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (value === password) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <TextInput
        type="password"
        value={value}
        autoFocus={autoFocus}
        onChange={(event) => {
          setValue(event.target.value);
          if (error) setError(false);
        }}
        placeholder="Enter password"
        aria-label="Password"
      />
      <button
        type="submit"
        className={cn(
          "self-start rounded-full border px-5 py-2.5 transition-colors",
          colorClasses.borderMid,
          colorClasses.textMuted,
          "hover:border-white hover:text-white",
          typography.bodySmall.className,
        )}
      >
        {submitLabel}
      </button>
      {error ? (
        <p className={cn(typography.bodySmall.className, colorClasses.textError)}>
          Incorrect password. Please try again.
        </p>
      ) : null}
    </form>
  );
}
