"use client";

import { useEffect } from "react";
import { DisplayHeading } from "@/components/ui";
import { PasswordForm } from "@/components/site/PasswordForm";
import {
  colorClasses,
  layoutClasses,
  typography,
  zIndexClasses,
} from "@/lib/design-system";
import { cn } from "@/lib/cn";

type PasswordDialogProps = {
  open: boolean;
  onClose: () => void;
  password: string;
  onUnlocked: () => void;
  title?: string;
  description?: string;
  initialValue?: string;
};

export function PasswordDialog({
  open,
  onClose,
  password,
  onUnlocked,
  title = "Protected project",
  description = "This project is under NDA. Enter the password to view the case study.",
  initialValue = "",
}: PasswordDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center p-6 backdrop-blur-sm",
        zIndexClasses.modal,
        colorClasses.surfaceOverlay,
      )}
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={cn(
          "w-full max-w-[420px] border p-8",
          layoutClasses.radius,
          colorClasses.surfaceRaised,
          colorClasses.borderMid,
        )}
      >
        <p className="label">Password protected</p>
        <DisplayHeading as="h2" variant="closing" className="mt-3 mb-2">
          {title}
        </DisplayHeading>
        <p className={cn("mb-6", typography.body.className)}>{description}</p>
        <PasswordForm
          password={password}
          onSuccess={onUnlocked}
          autoFocus
          submitLabel="View case study"
          initialValue={initialValue}
        />
      </div>
    </div>
  );
}
